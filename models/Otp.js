import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";

const otpSchema = new Schema({
  _id: {
    type: String,
    default: () => createId(),
    index: true,
    unique: true,
  },
  email: {
    unique: true,
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    trim: true,
    min: [6, "OTP must have 6 length"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
});

const Otp = model("Otp", otpSchema);

export default Otp;
