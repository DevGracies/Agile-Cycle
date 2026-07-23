import { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { archiveEbikeService, createEbikeService, getEbikeService, getEbikesService, updateEbikeService } from "../services/ebike";
import { createEbikeSchema, updateEbikeSchema } from "../validators/ebike";


export const createEbike = asyncHandler(
  async (req: Request, res: Response) => {
    const parsed = createEbikeSchema.safeParse(req.body);

    if (!parsed.success) {
      console.log("parsed Error", JSON.stringify(parsed.error.flatten()))
      throw new AppError(
        "Invalid request data",
        400,
        JSON.stringify(parsed.error.flatten()),
      );
    }

    if (!req?.files || !req?.files.length) {
      throw new AppError("At least one image is required", 400);
    }

    console.log("files", req.files);
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
      const {
        ebike,
        compatibleAccessories,
        compatibleEnhancements,
        reviews
      } = await getEbikeService(req.params.id as string);

      return res.status(200).json({
        success: true,
        data: {
          ebike,
          compatibleAccessories,
          compatibleEnhancements,
          reviews
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
        message: "Ebikes fetched successfully",
        ...result,
      });
    }
  );


export const updateEbike = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("body", req.body)
    console.log("files", req.files)
    const body = {
      ...req.body,
      images: req.body.existingImages
        ? JSON.parse(req.body.existingImages)
        : [],
      colors: req.body.colors
        ? JSON.parse(req.body.colors)
        : [],
      // variants: req.body.variants
      //   ? JSON.parse(req.body.variants)
      //   : [],
      // features: req.body.features
      //   ? JSON.parse(req.body.features)
      //   : [],
      // specs: req.body.specs
      //   ? JSON.parse(req.body.specs)
      //   : [],
    };
    const parsed = updateEbikeSchema.safeParse(body);

    if (!parsed.success) {
      throw new AppError(
        "Invalid request data",
        400,
        parsed.error.flatten()
      );
    }

    const ebike = await updateEbikeService(
      req.params.id as string,
      parsed.data,
      req.files as Express.Multer.File[]
    );

    return res.status(200).json({
      success: true,
      message: "Ebike updated successfully",
      data: ebike,
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