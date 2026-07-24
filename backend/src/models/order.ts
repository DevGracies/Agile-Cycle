import { model, Schema } from "mongoose";


const orderItemsSchema = new Schema({
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
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    image: {
        type: String,
        default: "",
    }
})

const shippingAddressSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
})
const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: [orderItemsSchema],
    subTotal: {
        type: Number,
        min: 0,
    },
    shippingAddress: {
        type: shippingAddressSchema,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
        default: "pending",
    },
    totalPrice: {
        types: Number,
        required: true,
        min: 0,
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending",
    },
    shippingMethod: {
        type: String,
        enum: ["local courier", "express", "pick-up"]
    },
    deliveredAt: Date,
    shippedAt: Date,

}, { timestamps: true }
);


export const Order = model("Order", orderSchema);