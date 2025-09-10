import {
  LoginSchema,
  PasswordSchema,
  VerifySchema,
  AddressSchema,
  EditAddressSchema,
  addProductSchema,
  ReviewProductSchema,
} from "../Schema/index.js";

export const validateSignUpFields = (body) => {
  const result = VerifySchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
export const validateLoginFields = (body) => {
  const result = LoginSchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
export const validatePasswordFields = (body) => {
  const result = PasswordSchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
export const validateAddressFields = (body) => {
  const result = AddressSchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
export const validateEditAddressFields = (body) => {
  const result = EditAddressSchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
export const validateReviewProductFields = (body) => {
  const result = ReviewProductSchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};

/**
 * This is Vaildation for check the fields of products
 * This function is like a middlware the check it
 * @type function
 */
export const validateProductFieldsMiddleware = async (req, res, next) => {
  console.log(req.body);

  const result = addProductSchema.safeParse(req.body);
  try {
    if (result.error) {
      const errorMessage = result?.error?.issues?.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));
      throw { name: "ZodValidationError", errors: errorMessage };
    }
    next();
  } catch (error) {
    if (error?.name === "ZodValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
