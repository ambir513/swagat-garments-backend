import Product from "../../models/Product.js";

export async function ProductContentAdd(req, res) {
  try {
    const body = req.body; // only admin can add product content

    const isAddedProduct = await Product.create({
      ...body,
    });
    return res
      .status(202)
      .json({ message: "product content add successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
