import Product from "../../models/Product.js";

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

    const isUpdateProduct = await Product.findByIdAndDelete({ _id: id });
    return res
      .status(202)
      .json({ message: "product have deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
