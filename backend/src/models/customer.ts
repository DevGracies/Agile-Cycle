import { model, Schema } from "mongoose";


enum CustomerStatus {
    active = "active",
    inactive = "inactive",
    blocked = "blocked"
};

const CustomerSchema = new Schema({
    customerId: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        sparse: true,
    },
    phone: {
        type: String,
        required: true,
        index: true,
    },

    avatar: String,

    totalOrders: {
        type: Number,
        default: 0,
    },
    totalSpend: {
        type: Number,
        default: 0,
    },
    totalQuantityPurchased: {
        type: Number,
        default: 0,
    },
    firstOrderDate: Date,
    lastOrderDate: Date,

    status: {
        type: String,
        enum: Object.values(CustomerStatus)
    },

    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true });

CustomerSchema.index({ createdAt: -1 });
CustomerSchema.index({ totalSpend: -1 });
CustomerSchema.index({ totalOrders: -1 });

const Customer = model("Customer", CustomerSchema);

export default Customer;