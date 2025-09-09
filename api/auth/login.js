import { configDotenv } from "dotenv";
import { validateLoginFields } from "../../libs/validateVerfiy.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

configDotenv();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function Login(req, res) {
  try {
    const token = req.cookies?.token;

    if (token) {
      const decrypt = jwt.verify(token, SECRET_KEY);
      if (decrypt.sub) {
        return res.json({ message: "Already Logged In " });
      }
    }
    validateLoginFields(req.body);
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.status(404).json({ message: "User is not register" });
    }

    const hashPassword = await bcrypt.compare(password, isUserExist.password);

    if (!hashPassword) {
      return res.status(404).json({ message: "password is invalid" });
    }
    const newToken = jwt.sign(
      {
        sub: isUserExist._id,
        role: isUserExist.role,
      },
      SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", newToken, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    return res.status(202).json({ message: "Logged In Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
