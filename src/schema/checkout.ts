import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().email(),

  country: z.string().min(1),

  firstName: z.string().min(2),

  lastName: z.string().min(2),

  address: z.string().min(5),

  addressLine2: z.string().optional(),

  city: z.string().min(2),

  state: z.string().min(2),

  zipCode: z.string().min(2),

  phone: z.string().min(7),

  cardNumber: z.string().min(16),

  expiry: z.string().min(4),

  cvv: z.string().min(3),

  saveCard: z.boolean().optional(),
});

export type CheckoutFormValues =
  z.infer<typeof checkoutSchema>;