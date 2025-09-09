import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./auth/index.js";
import connectMongoDB from "../libs/db.js";
import { landingJson } from "../libs/landingJson.js";
import cookieParser from "cookie-parser";

configDotenv();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
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
