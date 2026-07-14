import { Schema } from "mongoose";
import { BIKE_TYPES } from "../../types/user";

export const riderProfileSchema =
  new Schema(
    {
      phone: String,

      country: String,

      state: String,

      ridingPurpose: String,

      bikeType: {
        type: String,
        enum: BIKE_TYPES,
        default: "",
      },

      bikeBrand: String,

      belongsToClub: {
        type: Boolean,
        default: false,
      },

      clubName: String,
    },
    {
      _id: false,
    }
  );