import { z } from "zod";

export const reviewSchema = z.object({
  title: z
    .string()
    .min(3, "Title must contain at least 3 characters")
    .max(100),

  description: z
    .string()
    .min(10, "Description is too short")
    .max(1000),

  name: z.string().min(1, "Name is required"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),

  speedPerformance: z.number().min(1).max(5),

  rideComfortability: z.number().min(1).max(5),

  buildQuality: z.number().min(1).max(5),

  media: z.array(z.any()).default([]),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;