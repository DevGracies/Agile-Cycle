import { Schema } from "mongoose";

export const mediaSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },

    alt: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    _id: true,
  }
);


export const productColorSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },

    color: {
      type: String,
      // required: true,
    },
  },
  {
    _id: true,
  }
);


export const productFeatureSchema = new Schema(
  {
    title: String,

    subtitle: String,

    description: String,

    image: String,

    specs: [
      {
        label: String,
        value: String,
      },
    ],
  },
  {
    _id: true,
  }
);


export const productVariantSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
  },
  {
    _id: true,
  }
);


export const productSpecSchema = new Schema(
  {
    range: String,
    material: String,
    weight: String,
    torque: String,
    motor: String,
    batterySize: String,
    batteryAh: String,
    extraBatteryAh: String,
    size: String,
    color: String,
    maxSpeed: String,
    chargingTime: String,
  },
  {
    _id: false,
  }
);