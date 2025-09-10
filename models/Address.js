import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";
import validator from "validator";

const addressSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => createId(),
      index: true,
      unique: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    addressLine3: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      enum: ["India"],
      default: "India",
    },
    phoneNo: {
      type: String,
      required: true,
      validate: {
        validator: (value) => validator.isMobilePhone(value, "en-IN"),
        message: "Invalid Indian mobile number",
      },
    },
    userId: {
      type: String,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Address = model("Address", addressSchema);
export default Address;
