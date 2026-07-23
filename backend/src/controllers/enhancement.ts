import { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { archiveEnhancementService, createEnhancementService, getAllEnhancementsService, getEnhancementService, updateEnhancementService } from "../services/enhancement";
import { createEnhancementSchema, updateEnhancementSchema } from "../validators/enhancement";


export const createEnhancement = asyncHandler(
  async (req: Request, res: Response) => {
    const parsed = createEnhancementSchema.safeParse(req.body);

    if (!parsed.success) {
      throw new AppError(
        "Invalid request data",
        400,
        JSON.stringify(parsed.error.flatten()),
      );
    }

    const enhancement = await createEnhancementService(parsed.data, req?.files as Express.Multer.File[]);

    return res.status(201).json({
      success: true,
      message: "Enhancement created successfully",
      data: enhancement,
    });
  }
);


export const getEnhancement =
  asyncHandler(
    async (req: Request, res: Response) => {
      const enhancement = await getEnhancementService(req.params.id as string);

      return res.status(200).json({
        success: true,
        message: "Enhancement fetched successfully",
        data: enhancement,
      });
    }
  );


export const getAllEnhancements =
  asyncHandler(
    async (req: Request, res: Response) => {
      const result = await getAllEnhancementsService(req.query);

      return res.status(200).json({
        success: true,
        messsage: "Enhancements fetched successfully",
        ...result,
      });
    }
  );


export const updateEnhancement =
  asyncHandler(
    async (req: Request, res: Response) => {
      const body = {
      ...req.body,
      images: req.body.existingImages
        ? JSON.parse(req.body.existingImages)
        : [],
      // colors: req.body.colors
      //   ? JSON.parse(req.body.colors)
      //   : [],
      }
      const parsed = updateEnhancementSchema.safeParse(body);

      if (!parsed.success) {
        throw new AppError(
          "Invalid request data",
          400,
          parsed.error.flatten()
        );
      }

      const enhancement =
        await updateEnhancementService(
          req.params.id as string,
          parsed.data,
          req.files as Express.Multer.File[]
        );

      return res.status(200).json({
        success: true,
        message:
          "Enhancement updated successfully",
        data: enhancement,
      });
    }
  );


export const archiveEnhancement =
  asyncHandler(
    async (req: Request, res: Response) => {
      await archiveEnhancementService(req.params.id as string);

      return res.status(200).json({
        success: true,
        message:
          "Enhancement deleted successfully",
      });
    }
  );