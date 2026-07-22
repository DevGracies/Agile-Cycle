import z from "zod";
import { createEnhancementSchema, updateEnhancementSchema } from "../validators/enhancement";


export const ENHANCEMENT_CATEGORIES = [
  "performance",
  "comfort",
  "safety",
  "technology",
  "utility",
  "style",
]

export type EnhancementCategory = typeof ENHANCEMENT_CATEGORIES[number];

export type CreateEnhancementInput = z.infer<typeof createEnhancementSchema>;

export type UpdateEnhancementInput = z.infer<typeof updateEnhancementSchema>;