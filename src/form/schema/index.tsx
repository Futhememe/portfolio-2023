import { z } from "zod";

export type IContactSchema = z.input<typeof contactSchema>;

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  description: z.string(),
});
