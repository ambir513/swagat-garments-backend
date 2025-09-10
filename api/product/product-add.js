import Product from "../../models/Product.js";

export async function ProductAdd(req, res) {
  try {
    const thumbnail = req.files.map((file) => file.path)[0];
    console.log(thumbnail);
    const thumbnailId = req.files.map((file) => file.path.split("-")[1])[0];
    console.log(thumbnailId);
    const images = req.files.map((file) => file.path).slice(1);
    console.log(images);
    const imageId = req.files.map((file) => file.path.split("-")[1]).slice(1);
    console.log(imageId);

    const isAddedProduct = await Product.create({
      ...req.body,
      imageId,
      thumbnailId,
      thumbnail,
      images,
    });
    return res.status(202).json({ message: "product add successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
