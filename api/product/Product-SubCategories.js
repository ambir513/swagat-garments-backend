import Product from "../../models/Product.js";

export async function ProductSubCategories(req, res) {
  try {
    const Category = req.params.subCategories;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;
    console.log(Category);

    const products = await Product.find({
      subCategories: Category,
    })
      .skip(skip)
      .limit(limit)
      .select("_id name description categories subCategories bandName colorsId")
      .populate(
        "colorsId",
        "_id colorName amount price size stock imageId offer"
      );
    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}
