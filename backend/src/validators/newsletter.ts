import { z } from "zod";

export const newsletterSchema = z.object({
    email: z.email()
})

export const newsletterQuerySchema = z.object({
    page: z.coerce
    .number()
    .int()
    .positive()
    .default(1),

    limit: z.coerce
    .number()
    .int()
    .positive()
    .max(100)
    .default(10),

    search: z
    .string()
    .trim()
    .optional(),

    isSubscribed: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional(),
})