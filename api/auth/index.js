import { Router } from "express";
import { SignUp } from "./sign-up.js";
import { Verify } from "./verify.js";
import { Login } from "./login.js";
import { ForgotPassword } from "./forgot-password.js";
import { PasswordVerify } from "./password-verify.js";
import { Logout } from "./logout.js";
import { UserMiddleware } from "../../utils/UserMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", SignUp);
authRouter.post("/login", Login);
authRouter.post("/verify", Verify);
authRouter.get("/forgot-password/:emailId", ForgotPassword);
authRouter.post("/password/verify", PasswordVerify);
authRouter.post("/logout", UserMiddleware, Logout);

export default authRouter;
