import { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { archiveEbikeService, createEbikeService, getEbikeService, getEbikesService, updateEbikeService } from "../services/ebike";
import { createEbikeSchema, updateEbikeSchema } from "../validators/ebike";


export const createEbike = asyncHandler(
  async (req: Request, res: Response) => {
    const parsed = createEbikeSchema.safeParse(req.body);

    if (!parsed.success) {
      throw new AppError(
        "Invalid request data",
        400,
        JSON.stringify(parsed.error.flatten()),
      );
    }

    const ebike = await createEbikeService(parsed.data);

    res.status(201).json({
      success: true,
      message:
        "Ebike created successfully",
      data: ebike,
    });
  }
);


export const getEbike =
  asyncHandler(
    async (req: Request, res: Response) => {
      const { ebike, compatibleAccessories, compatibleEnhancements, review } = await getEbikeService(req.params.id as string);

      res.status(200).json({
        success: true,
        data: {
          ebike,
          compatibleAccessories,
          compatibleEnhancements,
          review,
        },
        messsage: "Ebike fetched successfully",
      });
    }
  );


export const getAllEbikes =
  asyncHandler(
    async (req: Request, res: Response) => {
      const result = await getEbikesService(req.query);

      res.status(200).json({
        success: true,
        messsage: "Ebikes fetched successfully",
        ...result,
      });
    }
  );


export const updateEbike =
  asyncHandler(
    async (req: Request, res: Response) => {
      const parsed = updateEbikeSchema.safeParse(req.body);

      if (!parsed.success) {
        throw new AppError(
          "Invalid request data",
          400,
          parsed.error.flatten()
        );
      }

      const ebike =
        await updateEbikeService(
          req.params.id as string,
          parsed.data
        );

      res.status(200).json({
        success: true,
        message:
          "Ebike updated successfully",
        data: ebike,
      });
    }
  );


export const archiveEbike =
  asyncHandler(
    async (req: Request, res: Response) => {
      await archiveEbikeService(req.params.id as string);

      res.status(200).json({
        success: true,
        message:
          "Ebike deleted successfully",
      });
    }
  );