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
      max: [150, "description must be 150 character only"],
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
    thumbnailId: {
      type: String,
      required: true,
    },
    imageId: {
      type: [String],
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("thumbnail is not a url");
        }
      },
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (value) => value.every((val) => validator.isURL(val)),
        message: "All images must be valid URLs",
      },
    },
    reviews: {
      type: String,
      ref: "Review",
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
