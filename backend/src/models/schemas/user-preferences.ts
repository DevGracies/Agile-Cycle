import { Schema } from "mongoose";

export const userPreferencesSchema =
  new Schema(
    {
      isSubscribed: {
        type: Boolean,
        default: false,
      },

      isTipsEnabled: {
        type: Boolean,
        default: false,
      },
    },
    {
      _id: false,
    }
  );