import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function AdminMiddleware(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(404).json({ message: "please login now" });
  }
  try {
    const decrypt = jwt.verify(token, SECRET_KEY);
    const role = decrypt?.role;
    if (role === "USER") {
      return res.status(404).json({ message: "only admin is allow" });
    }
    next();
  } catch (err) {
    return res.status(403).json({ message: err?.message });
  }
}
