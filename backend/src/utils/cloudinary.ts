import { UploadApiResponse } from "cloudinary";
import { Readable } from "stream";
import cloudinary from "../config/cloudinary";
import { AppError } from "./AppError";

export const uploadImage = (
    file: Express.Multer.File,
    folder: string
): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
        if (!file.buffer) {
            return reject(
                new Error(
                    "File buffer missing. Check multer configuration"
                )
            );
        }
        const uploadStream =
            cloudinary.uploader.upload_stream(
                {
                    folder,
                    resource_type: "image"
                },
                (error, result) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(result!);
                });
        Readable
            .from(file.buffer)
            .pipe(uploadStream);
    });
};

export const deleteImage = async (
    publicId: string
) => {
    const response = await cloudinary.uploader.destroy(publicId);

    if (response.result !== "ok" && response.result !== "not found") {
        throw new AppError(`Failed to delete image with public ID: ${publicId}`);
    }
    return response;
};


export const replaceImage = async (
    file: Express.Multer.File,
    oldPublicId: string | undefined,
    folder: string
) => {

    if (oldPublicId) {
        await deleteImage(oldPublicId);
    }

    return uploadImage(file, folder);
};



export const uploadImages = async (
    files: Express.Multer.File[],
    folder: string
) => {
    return Promise.all(
        files.map(file => uploadImage(file, folder))
    );
};

export const deleteImages = async (
    publicIds: string[]
) => {
    return Promise.all(
        publicIds.map(deleteImage)
    );
};

export const formatCloudinaryMedia = (
    upload: UploadApiResponse
) => ({
    public_id: upload.public_id,
    secure_url: upload.secure_url,
});