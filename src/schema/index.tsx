import { z } from "zod";

export type IContactSchema = z.input<typeof contactSchema>;
export type IContactSchemaOutput = z.output<typeof contactSchema>;

export const contactSchema = z.object({
  name: z.string().min(1, { message: "required" }),
  email: z.string().email().min(1, { message: "required" }),
  phone: z.string().optional(),
  description: z.string().min(1, { message: "required" }),
});
