import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(30),
  username: z
    .string()
    .min(3, "Username must have min 3 characters")
    .max(64, "Username must be less then 64 characters")
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "Username can only contain lowercase letters, numbers and hyphens."
    )
    .refine(
      (val) => !val.includes("--"),
      "Username cannot contain consecutive hypes"
    )
    .transform((val) => val.toLowerCase()),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
