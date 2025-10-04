import mongoose, { model, Schema } from "mongoose";
import { createId } from "@paralleldrive/cuid2";

const colorProductSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => createId(),
      index: true,
      unique: true,
    },
    colorName: {
      type: [String],
      required: true,
    },
    offer: {
      type: String,
    },
    amount: {
      type: String,
      required: true,
      min: [4, "amount must be have more than 4 character"],
      max: [20, "amount must be 20 character only"],
    },
    price: {
      type: String,
      required: true,
      min: [4, "price must be have more than 4 character"],
      max: [20, "price must be 20 character only"],
    },
    size: {
      type: [String],
      required: true,
      minLength: [1, "size must be have more than 1 character"],
      maxLength: [10, "size must be 20 character only"],
      validate: {
        validator: (val) => {
          return val.length > 0 && val.length <= 10;
        },
        message: "Size array must have between 1 and 10 items",
      },
    },
    stock: {
      type: Number,
      required: true,
      max: [200, "stock must be 200 character only"],
    },
    imageId: {
      type: [String],
    },
  },
  { timestamps: true }
);

const ColorProduct = model("ColorProduct", colorProductSchema);
export default ColorProduct;
