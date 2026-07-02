import { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { archiveEbikeService, createEbikeService, deleteEbikeImageService, getEbikeService, getEbikesService, updateEbikeService, uploadEbikeImagesService } from "../services/ebike";
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

    if (!req?.files || !req?.files.length) {
      throw new AppError("At least one image is required", 400);
    }

    const ebike = await createEbikeService(parsed.data, req?.files as Express.Multer.File[]);

    return res.status(201).json({
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

      return res.status(200).json({
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

      return res.status(200).json({
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
          parsed.data,
        );

      return res.status(200).json({
        success: true,
        message:
          "Ebike updated successfully",
        data: ebike,
      });
    }
  );


export const uploadEbikeImages = asyncHandler(
  async (req, res) => {

    const images =
      await uploadEbikeImagesService(
        req.params.id as string,
        req.files as Express.Multer.File[]
      );

    res.status(200).json({
      success: true,
      message: "Images uploaded successfully.",
      data: images,
    });

  }
);

export const deleteEbikeImage = asyncHandler(
  async (req, res) => {

    await deleteEbikeImageService(
      req.params.id as string,
      req.params.publicId as string
    );

    res.status(200).json({
      success: true,
      message: "Image deleted successfully.",
    });

  }
);

export const archiveEbike =
  asyncHandler(
    async (req: Request, res: Response) => {
      await archiveEbikeService(req.params.id as string);

      return res.status(200).json({
        success: true,
        message:
          "Ebike deleted successfully",
      });
    }
  );