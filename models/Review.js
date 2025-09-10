import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";

const reviewSchema = new Schema({
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
    minLength: [5, "comments must be more than 5 character"],
    minLength: [200, "comments must be 200 character only"],
  },
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
});

const Review = model("Review", reviewSchema);
export default Review;
