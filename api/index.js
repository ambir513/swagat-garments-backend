import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./auth/index.js";
import addressRouter from "./address/index.js";
import connectMongoDB from "../libs/db.js";
import { landingJson } from "../libs/landingJson.js";
import cookieParser from "cookie-parser";
import { UserDetail } from "../utils/user.js";
import { UserMiddleware } from "../utils/UserMiddleware.js";
import productRouter from "./product/index.js";

configDotenv();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/address", addressRouter);
app.use("/api/v1/product", productRouter);
app.get("/api/v1/user", UserMiddleware, UserDetail);
app.get("/", landingJson);

connectMongoDB()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
