import { z } from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name is too long" }),
  familyName: z
    .string()
    .min(1, { message: "Family name is required" })
    .max(100, { message: "Family name is too long" }),
  nicOrPassport: z.union([
    z
      .string()
      .min(1, { message: "NIC or Passport number is required" })
      .length(10, { message: "NIC or Passport is in an invalid format" })
      .toLowerCase()
      .regex(
        /^\d{9}v$/,
        "An NIC with 10 characters must have a trailing 'v' and other characters must be all numbers",
      ),

    z
      .string()
      .min(1, { message: "NIC or Passport number is required" })
      .length(12, { message: "NIC or Passport is in an invalid format" })
      .regex(/^\d+$/, "An NIC with 12 characters must only contain numbers"),
  ]),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" }),
  confirmPassword: z.string().min(1, {
    message: "Confirm password is required",
  }),
});
