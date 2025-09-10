import User from "../models/User.js";
import Address from "../models/Address.js";

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
    return res.status(200).json({
      user: { ...userDetail },
      address: addressDetail,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
