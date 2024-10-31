import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must Be at least 8 characters long" })
    .trim(),
});

export const signinFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must Be at least 8 characters long" })
    .trim(),
});

export const postSchema = z.object({
  content: z
    .string()
    .min(4, { message: "A Post must be at least 4 characters long." })
    .trim(),
});

export type SignInState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type PostState =
  | {
      errors?: {
        content?: string[];
      };
      message?: string;
    }
  | undefined;
