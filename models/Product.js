import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";
import validator from "validator";

const productSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => createId(),
      index: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      min: [5, "name must be have more than 5 character"],
      max: [100, "name must be 100 character only"],
    },
    description: {
      type: String,
      required: true,
      min: [10, "description must be have more than 10 character"],
      max: [250, "description must be 250 character only"],
    },
    categories: {
      type: String,
      required: true,
      enum: ["Man", "Woman", "Kids"],
    },
    subCategories: {
      type: String,
      required: true,
      min: [2, "subCategories must be have more than 2 character"],
      max: [20, "subCategories must be 20 character only"],
    },
    bandName: {
      type: String,
      required: true,
      min: [2, "bandName must be have more than 2 character"],
      max: [20, "bandName must be 20 character only"],
    },
    reviews: {
      type: String,
      ref: "Review",
    },
    colorsId: {
      type: [String],
      ref: "ColorProduct",
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
