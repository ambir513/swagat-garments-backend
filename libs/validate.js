import { LoginSchema, PasswordSchema, VerifySchema } from "../Schema/index.js";

export const validateSignUpFields = (body) => {
  const result = VerifySchema.safeParse(body);

  console.log(result.error);
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

  console.log(result.error);
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

  console.log(result.error);
  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
