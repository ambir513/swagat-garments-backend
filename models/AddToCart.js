import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";

const addToCartSchema = new Schema({
  _id: {
    type: String,
    default: () => createId(),
    index: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

const AddToCart = model("AddToCart", addToCartSchema);
export default AddToCart;
