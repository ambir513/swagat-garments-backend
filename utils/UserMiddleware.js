import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function UserMiddleware(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(404).json({ message: "please login now" });
  }
  try {
    const decrypt = jwt.verify(token, SECRET_KEY);
    req.user = { _id: decrypt?.sub, role: decrypt?.role };
    next();
  } catch (err) {
    return res.status(403).json({ message: err?.message });
  }
}
