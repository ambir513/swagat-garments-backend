import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => createId(),
      index: true,
      unique: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comments: {
      type: String,
      required: true,
      min: [5, "comments must be more than 5 character"],
      min: [200, "comments must be 200 character only"],
    },
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Review = model("Review", reviewSchema);
export default Review;
