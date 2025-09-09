import { SignUpSchema } from "../Schema/index.js";

export const validateSignUpFields = (body) => {
  const result = SignUpSchema.safeParse(body);

  if (result.error) {
    const errorMessage = result?.error?.issues?.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    throw { name: "ZodValidationError", errors: errorMessage };
  }
};
