import { createId } from "@paralleldrive/cuid2";
import mongoose, { model, Schema } from "mongoose";

const favProductSchema = new Schema({
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

const FavProduct = model("FavProduct", favProductSchema);
export default FavProduct;
