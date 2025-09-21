import Product from "../../models/Product.js";

export async function getProduct(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .select("_id name description categories subCategories bandName colorsId")
      .populate(
        "colorsId",
        "_id colorName amount price size stock imageId offer"
      )
      .exec();

    const total = await Product.countDocuments();
    return res.json({
      page,
      total,
      totalPages: Math.ceil(total / limit),
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}
