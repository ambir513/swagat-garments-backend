import { validateEditAddressFields } from "../../libs/validate.js";
import Address from "../../models/Address.js";

export async function EditAddressById(req, res) {
  try {
    const user = req?.user;
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "Id is Invalid" });
    }

    validateEditAddressFields(req.body);

    const editAddress = await Address.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!editAddress) {
      return res.status(404).json({ message: "address Id is not found" });
    }

    return res.status(201).json({ message: "address edit successfully" });
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
