import z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    }),
});
export const PasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase(),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    }),
  code: z.string().min(6, { message: "Otp must be 6 digit" }),
});

export const SignUpSchema = z.object({
  firstName: z.string().min(3, { message: "firstName is required" }),
  lastName: z.string().min(3, { message: "lastname is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    }),
});
export const VerifySchema = z.object({
  firstName: z.string().min(3, { message: "firstName is required" }),
  lastName: z.string().min(3, { message: "lastname is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    }),
  code: z.string().min(6, { message: "Otp must be 6 digit" }),
});
