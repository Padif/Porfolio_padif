import { z } from "zod";

export const TOPICS = [
  "web-project",
  "collaboration",
  "cybersecurity",
  "just-saying-hi",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^[+0-9()\s-]{8,20}$/.test(v), "invalid_phone"),
  topic: z.enum(TOPICS),
  message: z.string().trim().min(10).max(500),
});

export type ContactInput = z.infer<typeof contactSchema>;
