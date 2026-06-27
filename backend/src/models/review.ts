import {
    Schema,
    model,
    InferSchemaType,
} from "mongoose";


const reviewSchema = new Schema(
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: ""
      },
      productType: {
        enum: ["ebike", "review", "enhancement"],
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    
      rating: Number,
      speedPerformanceRating: Number,
      rideComfortability: Number,
      buildQuality: Number,
      
      title: String,
      
      comment: String,      
      // image: String,
    }
)

export type ReviewDocument =
    InferSchemaType<typeof reviewSchema>;

export default model(
    "Review",
    reviewSchema
);