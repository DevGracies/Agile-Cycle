import {
  Schema,
  model,
  InferSchemaType,
} from "mongoose";

export const PRODUCT_TYPES = [
  "ebikes",
  "accessories",
  "enhancements",
] as const;

export type ProductType = (typeof PRODUCT_TYPES)[number];

const MODEL_MAP: Record<ProductType, string> = {
  ebikes: "Ebike",
  accessories: "Accessory",
  enhancements: "Enhancement",
};

const cartItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "items.productModel",
    },

    productType: {
      type: String,
      enum: PRODUCT_TYPES,
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },
  },
  {
    _id: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

cartItemSchema.virtual("productModel").get(function () {
  return MODEL_MAP[this.productType as ProductType];
});

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    items: {
      type: [cartItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export type CartDocument = InferSchemaType<typeof cartSchema>;

export const Cart = model<CartDocument>("Cart", cartSchema);