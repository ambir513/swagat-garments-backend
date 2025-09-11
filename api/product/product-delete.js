import ColorProduct from "../../models/ColorProduct.js";
import Product from "../../models/Product.js";
import Review from "../../models/Review.js";

export async function ProductDelete(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "id is not found" });
    }

    const isPrductExist = await Product.findById({ _id: id });

    if (!isPrductExist) {
      return res.status(404).json({ message: "id is invalid" });
    }

    const isDeleteProduct = await Product.findByIdAndDelete({ _id: id }).lean();
    const isDeleteReview = await Review.findByIdAndDelete({
      _id: isDeleteProduct.reviews,
    });
    const isDeleteProductColors = await ColorProduct.findByIdAndDelete({
      _id: isDeleteProduct.colorsId,
    });

    return res
      .status(202)
      .json({ message: "product have deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
