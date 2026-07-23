import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import multer from "multer";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });

    return;
  }

  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({
        success: false,
        message:
          "Each image must not exceed 5MB."
      });
      return;
    }
  }

  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message || "Something went wrong. Please try again later",
  });
};