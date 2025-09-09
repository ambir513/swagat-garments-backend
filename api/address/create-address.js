import { validateAddressFields } from "../../libs/validate.js";
import Address from "../../models/Address.js";

export async function CreateAddress(req, res) {
  try {
    const { _id } = req?.user;
    validateAddressFields(req.body);

    const addressLimit = await Address.find({ userId: _id });

    if (addressLimit.length >= 2) {
      return res.status(402).json({ message: "Address limit is over" });
    }

    const address = await Address.create({
      ...req.body,
      userId: _id,
    });

    return res.status(202).json({ message: "Address is added" });
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
