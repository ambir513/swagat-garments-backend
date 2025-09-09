import { validateSignUpFields } from "../../libs/validate.js";
import User from "../../models/User.js";
import Otp from "../../models/Otp.js";
import mailprovider from "mailprovider";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function SignUp(req, res) {
  try {
    const token = req.cookies?.token;

    if (token) {
      const decrypt = jwt.verify(token, SECRET_KEY);
      if (decrypt.sub) {
        return res.json({ message: "Already Logged In " });
      }
    }

    validateSignUpFields(req.body);
    const { firstName, lastName, email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(404).json({ message: "User is already Register" });
    }

    const code = Math.floor(Math.random() * 1000000);

    await mailprovider({
      displayName: "Swagat Garments",
      email: email,
      subject: "OTP send",
      htmlContent: `Your OTP is ${code}`,
    });

    await Otp.create({
      email,
      code,
    });

    res.status(200).json({ message: "Otp send successfully" });
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
