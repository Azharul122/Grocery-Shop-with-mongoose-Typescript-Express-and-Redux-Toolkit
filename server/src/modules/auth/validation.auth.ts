import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const registerValidation = z.object({
  fullName: z.string().optional(),
  email: z.string().regex(emailRegex, "Invalid email address format"),
  password: z.string().min(8, "Password at least 8 characters"),
  userName: z.string().optional(),
  role: z.string().optional().default("USER"),
  profileImage: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.string().optional(),
});

const loginValidation = z.object({
  email: z.string().regex(emailRegex, "Invalid email address format"),
  password: z.string().min(8, "Password at least 8 characters"),
});
export const userValidations = {
  registerValidation,
  loginValidation,
};
