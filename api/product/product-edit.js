import Product from "../../models/Product.js";

export async function ProductEdit(req, res) {
  try { 
    const { id } = req.params;

    if (!id) {
      return res.statu(404).json({ message: "id is not found" });
    }

    const isPrductExist = await Product.findById({ _id: id });

    if (!isPrductExist) {
      return res.status(404).json({ message: "id is invalid" });
    }

    const isUpdateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    return res
      .status(202)
      .json({ message: "product have updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
