import {
  LoginSchema,
  PasswordSchema,
  VerifySchema,
  AddressSchema,
  EditAddressSchema,
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
