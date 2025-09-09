import { validatePasswordFields } from "../../libs/validate.js";
import Otp from "../../models/Otp.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function PasswordVerify(req, res) {
  try {
    const token = req.cookies?.token;

    if (token) {
      const decrypt = jwt.verify(token, SECRET_KEY);
      if (decrypt.sub) {
        return res.json({ message: "Already Logged In " });
      }
    }

    validatePasswordFields(req.body);

    const { email, code, newPassword } = req.body;

    const isUserExist = await User.findOne({ email });
    const isOtpExist = await Otp.findOne({ email });
    if (!isUserExist) {
      return res.status(404).json({ message: "User is not found" });
    }
    if (!isOtpExist) {
      return res.status(404).json({ message: "Otp is not found" });
    }
    if (code !== isOtpExist?.code) {
      return res.status(404).json({ message: "otp is invalid" });
    }
    const hashPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findByIdAndUpdate(
      { _id: isUserExist._id },
      { password: hashPassword }
    );
    const newToken = jwt.sign(
      {
        sub: user._id,
        role: user.role,
      },
      SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", newToken, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    return res.status(202).json({ message: "password changed successfully" });
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
