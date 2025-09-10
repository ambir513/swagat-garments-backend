import z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase()
    .max(50, { message: "email must be in 50 character only" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    })
    .max(16, { message: "email must be in 16 character only" }),
});
export const PasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase()
    .max(50, { message: "email must be in 50 character only" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    })
    .max(16, { message: "email must be in 16 character only" }),
  code: z
    .string()
    .min(6, { message: "Otp must be 6 digit" })
    .max(6, { message: "Otp must be 6 digit" }),
});
export const SignUpSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstName is required" })
    .max(20, { message: "firstName must be in 20 character only" }),
  lastName: z
    .string()
    .min(3, { message: "lastname is required" })
    .max(20, { message: "lastname must be in 20 character only" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase()
    .max(50, { message: "email must be in 50 character only" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    })
    .max(16, { message: "email must be in 16 character only" }),
});
export const VerifySchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstName is required" })
    .max(20, { message: "firstName must be in 20 character only" }),
  lastName: z
    .string()
    .min(3, { message: "lastname is required" })
    .max(20, { message: "lastname must be in 20 character only" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .toLowerCase()
    .max(50, { message: "email must be in 50 character only" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must include a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include a special character",
    })
    .max(16, { message: "email must be in 16 character only" }),
  code: z
    .string()
    .min(6, { message: "Otp must be 6 digit" })
    .max(6, { message: "Otp must be 6 digit" })
    .optional(),
});
export const AddressSchema = z.object({
  addressLine1: z
    .string()
    .min(10, { message: "addhresLine1 must be more than 10 character" })
    .max(100, { message: "addhresLine1 must be in 100 character only" }),
  addressLine2: z
    .string()
    .min(10, { message: "addhresLine2 must be more than 10 character" })
    .max(100, { message: "addhresLine2 must be in 100 character only" }),
  addressLine3: z
    .string()
    .min(10, { message: "addhresLine3 must be more than 10 character" })
    .max(100, { message: "addhresLine3 must be in 100 character only" }),
  city: z
    .string()
    .min(3, { message: "City must be more than 3 character" })
    .max(20, { message: "City must be in 20 character only" }),
  state: z
    .string()
    .min(3, { message: "State must be more than 3 character" })
    .max(20, { message: "State must be in 20 character only" }),
  country: z.enum(["India"]),
  phoneNo: z
    .string()
    .min(10, { message: "phone no must be 10 digit" })
    .max(10, { message: "phone no must be 10 digit only" }),
});
export const EditAddressSchema = z.object({
  addressLine1: z
    .string()
    .min(10, { message: "addhresLine1 must be more than 10 character" })
    .max(100, { message: "addhresLine1 must be in 100 character only" }),
  addressLine2: z
    .string()
    .min(10, { message: "addhresLine2 must be more than 10 character" })
    .max(100, { message: "addhresLine2 must be in 100 character only" }),
  addressLine3: z
    .string()
    .min(10, { message: "addhresLine3 must be more than 10 character" })
    .max(100, { message: "addhresLine3 must be in 100 character only" }),
  city: z
    .string()
    .min(3, { message: "City must be more than 3 character" })
    .max(20, { message: "City must be in 20 character only" }),
  state: z
    .string()
    .min(3, { message: "State must be more than 3 character" })
    .max(20, { message: "State must be in 20 character only" }),
  country: z.enum(["India"]),
  phoneNo: z
    .string()
    .min(10, { message: "phone no must be 10 digit" })
    .max(10, { message: "phone no must be 10 digit only" })
    .optional(),
});
export const addProductSchema = z.object({
  name: z
    .string()
    .min(5, { message: "name must have more than 5 characters" })
    .max(100, { message: "name must be 100 characters only" }),

  description: z
    .string()
    .min(10, { message: "description must have more than 10 characters" })
    .max(150, { message: "description must be 150 characters only" }),

  amount: z
    .string()
    .min(4, { message: "amount must have more than 4 characters" })
    .max(20, { message: "amount must be 20 characters only" }),

  price: z
    .string()
    .min(4, { message: "price must have more than 4 characters" })
    .max(20, { message: "price must be 20 characters only" }),

  categories: z.enum(["Man", "Woman", "Kids"], {
    required_error: "categories is required",
  }),

  subCategories: z
    .string()
    .min(2, { message: "subCategories must have more than 2 characters" })
    .max(20, { message: "subCategories must be 20 characters only" }),

  bandName: z
    .string()
    .min(2, { message: "bandName must have more than 2 characters" })
    .max(20, { message: "bandName must be 20 characters only" }),

  size: z
    .array(z.string())
    .min(1, { message: "size must have at least 1 item" })
    .max(10, { message: "size must have at most 10 items" }),

  stock: z.number().max(200, { message: "stock must be 200 only" }),
});
export const ReviewProductSchema = z.object({
  rating: z.number(),
  comments: z
    .string()
    .min(5, { message: "comments must be more than 5 character" })
    .max(200, { message: "comments must be 200 character only" }),
});
