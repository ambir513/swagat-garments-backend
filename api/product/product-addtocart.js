import AddToCart from "../../models/AddToCart.js";
import Product from "../../models/Product.js";

export async function ProductAddToCart(req, res) {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    if (!id) {
      return res.status(404).json({ message: "id is not found" });
    }

    const isPrductExist = await Product.findById({ _id: id });

    if (!isPrductExist) {
      return res.status(404).json({ message: "id is invalid" });
    }

    const isAddToCart = await AddToCart.create({
      userId: _id,
      productId: id,
    });
    return res.status(202).json({ message: "add cart item successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
