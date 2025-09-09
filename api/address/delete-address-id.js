import Address from "../../models/Address.js";

export async function DeleteAddressById(req, res) {
  const user = req.user;
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(404).json({ message: "Id is Invalid" });
    }

    const deleteAddress = await Address.findByIdAndDelete({ _id: id });
    console.log(deleteAddress);

    if (!deleteAddress) {
      return res.status(404).json({ message: "Address Id is not found" });
    }
    return res.status(200).json({ message: "address deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.statu(500).json({ message: "Something want wrong" });
  }
}
