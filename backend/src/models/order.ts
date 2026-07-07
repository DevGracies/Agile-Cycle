import { model, Schema } from "mongoose";


const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ebikeId: {
        type: Schema.Types.ObjectId,
        ref: "Ebike",
    },
    accessoryId: {
        type: Schema.Types.ObjectId,
        ref: "Accessory",
    },
    enhancementId: {
        type: Schema.Types.ObjectId,
        ref: "Enhancement",
    },

    productType: {
        type: String,
        enum: ["ebike", "accessory", "enhancement"],
    },
    subTotal: {
        type: Number,
    },
    shipping: {
        type: Number,
    },
    total: {
        types: Number,
    },
    shippingMethod: {
        type: String,
        enum: ["local courier", "express", "pick-up"]
    }

}, { timestamps: true }
);


export default model("Order", orderSchema);