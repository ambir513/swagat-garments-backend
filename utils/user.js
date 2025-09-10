import User from "../models/User.js";
import Address from "../models/Address.js";
import Product from "../models/Product.js";
import Review from "../models/Review.js";

export async function UserDetail(req, res) {
  const { _id } = req.user;
  try {
    const userDetail = await User.findById(_id)
      .select("_id firstName lastName avatar email role")
      .lean();
    const addressDetail = await Address.find({ userId: _id })
      .select(
        "_id addressLine1 addressLine2 addressLine3 city state country phoneNo"
      )
      .lean();

    const reviewProductId = await Review.findOne({ userId: _id }).lean();

    const reviewProductDetails = await Product.find({
      reviews: reviewProductId._id,
    })
      .populate({ path: "reviews", select: "rating comments" })
      .lean();
    return res.status(200).json({
      user: { ...userDetail },
      address: addressDetail,
      productReview: reviewProductDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
