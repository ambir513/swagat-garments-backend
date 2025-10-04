import Product from "../../models/Product.js";
import ColorProduct from "../../models/ColorProduct.js";

export async function ProductColorAdd(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const isProductExist = await Product.findById(id);
    if (!isProductExist) {
      return res.status(404).json({ message: "Invalid Product ID" });
    }

    // Handle images (if uploaded)
    let imageId = [];
    if (req.files && req.files.length > 0) {
      imageId = req.files.map((file) => file.path.split("-")[1]);
    }

    // Create new color product
    const ProductColors = await ColorProduct.create({
      colorsName: req.body.colorsName,
      size: req.body.size,
      amount: req.body.amount,
      price: req.body.price,
      stock: req.body.stock,
      offer: req.body.offer,
      imagesId: imageId,
    });

    // Push color ref into Product
    const productUpdated = await Product.findByIdAndUpdate(
      id,
      { $push: { colorsId: ProductColors._id } },
      { new: true }
    ).populate("colorsId");

    return res.status(201).json({
      message: "Color variant added successfully",
      data: productUpdated,
    });
  } catch (error) {
    console.error("Error adding product color:", error);
    return res.status(500).json({ message: error?.message });
  }
}
