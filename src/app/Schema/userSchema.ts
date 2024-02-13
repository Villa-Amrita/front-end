import { z } from "zod";

const invalidNicOrPassportMessage = "NIC or Passport is in an invalid format";

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
      .length(10, { message: invalidNicOrPassportMessage })
      .toLowerCase()
      .regex(/^\d{9}v$/, invalidNicOrPassportMessage),

    z
      .string()
      .min(1, { message: "NIC or Passport number is required" })
      .length(12, { message: invalidNicOrPassportMessage })
      .regex(/^\d+$/, invalidNicOrPassportMessage),
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

export type User = z.infer<typeof userSchema>;

export const validateUser = (user: User) => {
  const validation = userSchema.safeParse(user);
  if (validation.success === false) {
    console.error("Validation error: ", validation.error);
    const errors = validation.error.issues;
    // Identify the first error
    const firstError = errors[0];
    if (firstError) {
      alert(firstError.message);
    } else {
      alert("An unknown error occurred");
    }
    return false;
  }

  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
};
