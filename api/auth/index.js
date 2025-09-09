import { Router } from "express";
import { SignUp } from "./sign-up.js";
import { Verify } from "./verify.js";
import { Login } from "./login.js";
const authRouter = Router();

authRouter.post("/sign-up", SignUp);
authRouter.post("/login", Login);
authRouter.post("/verify", Verify);
// authRouter.post("/forgot-password/:email");
// authRouter.post("/password/verify");

export default authRouter;
