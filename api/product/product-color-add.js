import Product from "../../models/Product.js";
import ColorProduct from "../../models/ColorProduct.js";

export async function ProductColorAdd(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "Id is not found" });
    }
    const isProductExist = await Product.findById({ _id: id });

    if (!isProductExist) {
      return res.status(404).json({ message: "Id is invalid" });
    }
    const imageId = req.files.map((file) => file.path.split("-")[1]);
    console.log(imageId);

    const ProductColors = await ColorProduct.create({
      ...req.body,
      imageId,
    });
    const productUpdated = await Product.findByIdAndUpdate(
      { _id: id },
      { $push: { colorsId: ProductColors._id } },
      { new: true }
    ).populate("colorproduct");
    return res
      .status(202)
      .json({ message: "add color successfully", data: productUpdated });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
