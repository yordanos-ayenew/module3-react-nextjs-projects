import z from "zod";

export const orderSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+251|0)9\d{8}$/, "Enter a valid Ethiopian phone number"),
  area: z.string().trim().min(1, "Please select a delivery area"),
  notes: z.string().trim().max(500, "Notes must be 500 characters or fewer"),
});
export type OrderInput = z.infer<typeof orderSchema>;