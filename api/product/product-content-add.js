import Product from "../../models/Product.js";

export async function ProductContentAdd(req, res) {
  try {
    const body = req.body;

    console.log("Request Body:", body);

    const isAddedProduct = await Product.create({
      name: body.name,
      description: body.description,
      categories: body.categories,
      subCategories: body.subCategory,
      bandName: body.bandName,
      colorsId: [],
    });

    return res.status(201).json({
      message: "Product content added successfully",
      data: isAddedProduct?._id,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: error?.message });
  }
}
