import mongoose, { model, Schema } from "mongoose";
import { createId } from "@paralleldrive/cuid2";
import validator from "validator";

const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => createId(),
      index: true,
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
      min: [3, "firstname must be have more than 3 character"],
    },
    lastName: {
      type: String,
      trim: true,
      min: [3, "lastname must be have more than 3 character"],
    },
    email: {
      unique: true,
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: [8, "password must be have 8 length"],
      validate: {
        validator: (value) => validator.isStrongPassword(value),
        message:
          "Create a strong password: include at least one [UpperCase, LowerCase, Special Character, Number]",
      },
    },
    avatar: {
      type: String,
      trim: true,
      validate: {
        validator: (value) => validator.isURL(value),
        message: "avatar must be in https",
      },
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
