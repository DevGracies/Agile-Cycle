import multer from "multer";
import { AppError } from "../utils/AppError";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const fileFilter: multer.Options["fileFilter"] = (
    req, file, cb
) => {
    if (!file.mimetype.startsWith("image/")) {
        return cb(new AppError("Only image uploads are allowed.", 400));
    }

    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

export default upload;