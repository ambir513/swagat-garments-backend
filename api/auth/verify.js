import { validateSignUpFields } from "../../libs/validate.js";
import Otp from "../../models/Otp.js";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import welcomeMsgSend from "../../utils/welcomeMsgSend.js";

configDotenv();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function Verify(req, res) {
  try {
    const { firstName, lastName, email, password, code } = req.body;
    validateSignUpFields(req.body);

    const isOtpExist = await Otp.findOne({ email });
    if (!isOtpExist) {
      return res.status(404).json({ message: "Otp not found" });
    }

    if (code !== isOtpExist?.code) {
      return res.status(402).json({ message: "invalid otp" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    const token = jwt.sign(
      {
        sub: user._id,
        role: user.role,
      },
      SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    await welcomeMsgSend(email);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    return res.status(202).json({ message: "Logged In Successfully" });
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
