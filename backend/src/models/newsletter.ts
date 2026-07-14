import { model, Schema } from "mongoose"

const newsletterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
    isSubscribed: {
        type: Boolean,
        default: true,
    }

}, { timestamps: true });

export const Newsletter = model("Newsletter", newsletterSchema)