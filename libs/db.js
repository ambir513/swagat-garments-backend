import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const URL = process.env.DATABASE_URL;

async function connectMongoDB() {
  try {
    const instance = await mongoose.connect(URL);
    console.log("connected Successfully", instance.connection.host);
  } catch (error) {
    console.log("Something went to wrong", error);
  }
}

export default connectMongoDB;
