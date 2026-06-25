import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT! || 5000,
    NODE_ENV: process.env.NODE_ENV! || "development",

    MONGO_URI: process.env.MONGO_URI!,

    CLIENT_URL: process.env.CLIENT_URL!,

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,

    ADMIN_EMAIL: process.env.ADMIN_EMAIL!,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!,
    ADMIN_NAME: process.env.ADMIN_NAME!,

    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,

    // CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    // CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    // CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
}

Object.entries(env).forEach(([key, value]) => {
    if (!value) {
        console.log(`Missing environment variable: ${key}`)
    }
})