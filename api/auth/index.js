import { Router } from "express";
import { SignUp } from "./sign-up.js";
import { Verify } from "./verify.js";
import { Login } from "./login.js";
import { ForgotPassword } from "./forgot-password.js";
import { PasswordVerify } from "./password-verify.js";
const authRouter = Router();

authRouter.post("/sign-up", SignUp);
authRouter.post("/login", Login);
authRouter.post("/verify", Verify);
authRouter.get("/forgot-password/:emailId", ForgotPassword);
authRouter.post("/password/verify", PasswordVerify);

export default authRouter;
