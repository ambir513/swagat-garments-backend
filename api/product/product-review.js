import { validateReviewProductFields } from "../../libs/validate.js";
import Product from "../../models/Product.js";
import Review from "../../models/Review.js";

export async function ProductReview(req, res) {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    if (!id) {
      return res.status(404).json({ message: "Id is not found" });
    }
    validateReviewProductFields(req.body);

    if (Math.floor(req.body?.rating) > 5) {
      return res
        .status(404)
        .json({ message: "rating must be in 1 between 5 only" });
    }
    const isProductExist = await Product.findById({ _id: id });

    if (!isProductExist) {
      return res.status(404).json({ message: "Id is invalid" });
    }

    const isReviewed = await Review.create({
      ...req.body,
      userId: _id,
    });

    const isProductReviewed = await Product.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        reviews: isReviewed._id,
      }
    );

    return res.status(202).json({ message: "Thanks for Reveiw" });
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
