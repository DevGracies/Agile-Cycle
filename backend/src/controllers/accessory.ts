import { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { archiveAccessoryService, createAccessoryService, getAccessoriesService, getAccessoryService, updateAccessoryService } from "../services/accessory";
import { createAccessorySchema, updateAccessorySchema } from "../validators/accessory";


export const createAccessory = asyncHandler(
  async (req: Request, res: Response) => {
    const parsed = createAccessorySchema.safeParse(req.body);

    if (!parsed.success) {
      throw new AppError(
        "Invalid request data",
        400,
        JSON.stringify(parsed.error.flatten()),
      );
    }
    console.log("files", req.files);

    if (!req?.files || !req?.files.length) {
      throw new AppError("At least one image is required", 400);
    }



    const accessory = await createAccessoryService(parsed.data, req?.files as Express.Multer.File[]);

    return res.status(201).json({
      success: true,
      message:
        "Accessory created successfully",
      data: accessory,
    });
  }
);


export const getAccessory =
  asyncHandler(
    async (req: Request, res: Response) => {
      const accessory = await getAccessoryService(req.params.id as string);

      return res.status(200).json({
        success: true,
        data: accessory,
      });
    }
  );


export const getAllAccessories =
  asyncHandler(
    async (req: Request, res: Response) => {
      const result = await getAccessoriesService(req.query);

      return res.status(200).json({
        success: true,
        messsage: "Accessories fetched successfully",
        ...result,
      });
    }
  );


export const updateAccessory = asyncHandler(
  async (req: Request, res: Response) => {

    const existingImages =
      req.body.existingImages
        ? JSON.parse(req.body.existingImages)
        : [];

    const removedImages =
      req.body.removedImages
        ? JSON.parse(req.body.removedImages)
        : [];


    const parsed =
      updateAccessorySchema.safeParse(req.body);


    if (!parsed.success) {
      throw new AppError(
        "Invalid request data",
        400,
        parsed.error.flatten()
      );
    }


    const accessory =
      await updateAccessoryService(
        req.params.id as string,
        parsed.data,
        req.files as Express.Multer.File[],
        existingImages,
        removedImages
      );


    return res.status(200).json({
      success: true,
      message: "Accessory updated successfully",
      data: accessory,
    });

  }
);



export const archiveAccessory =
  asyncHandler(
    async (req: Request, res: Response) => {
      await archiveAccessoryService(req.params.id as string);

      return res.status(200).json({
        success: true,
        message:
          "Accessory deleted successfully",
      });
    }
  );