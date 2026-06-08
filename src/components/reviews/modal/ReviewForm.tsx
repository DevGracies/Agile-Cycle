"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";

import { ReviewProduct } from "@/src/types/review";
import { Input } from "../../ui/Input";
import { ReviewRatingStars } from "./ReviewRating";
import { ReviewScoreSelector } from "./ReviewScoreSelector";
import { ReviewSubmitButton } from "./ReviewSubmitButton";
import { useReview } from "@/src/hooks/useReview";

interface Props {
  product: ReviewProduct | null;
  onSuccess?: () => void;
}

type ReviewScoreKey =
  | "speedPerformance"
  | "rideComfortability"
  | "buildQuality";

export function ReviewForm({ product, onSuccess }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { createReviewForProduct, loading } = useReview();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    email: "",
  });

  const [reviewScore, setReviewScore] = useState({
    speedPerformance: 1,
    rideComfortability: 1,
    buildQuality: 1,
  });

  const handleScoreChange = (key: ReviewScoreKey, value: number) => {
    setReviewScore((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!product) return;

    await createReviewForProduct({
      productId: product.id,
      title: formData.title,
      description: formData.description,
      name: formData.name,
      email: formData.email,
      images: imagePreview ? [imagePreview] : [],
      reviewScore,
    });

    onSuccess?.();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  return (
    <div className="space-y-6">
      {/* PRODUCT HEADER */}
      <div className="flex items-center gap-4">
        <Image
          src={product?.images?.[0]?.url || "/placeholder.png"}
          width={100}
          height={100}
          alt={product?.images?.[0]?.alt || "Product image"}
          className="object-cover rounded-md"
        />

        <div className="space-y-2">
          <h2 className="text-xl font-medium">
            {product?.name || "Product Name"}
          </h2>

          <ReviewRatingStars rating={product?.rating || 0} className="size-4" />
        </div>
      </div>

      {/* TITLE */}
      <Input
        label="Review Title"
        placeholder="Enter review title"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />

      {/* DESCRIPTION */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Review Description
        </label>

        <textarea
          placeholder="Enter your description"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          className="w-full h-[150px] rounded-md p-4 border border-gray-200 bg-[#F7FCF7] text-sm outline-none focus:border-primary"
        />
      </div>

      {/* FILE UPLOAD */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center gap-4 cursor-pointer"
      >
        <div className="bg-gray-200 p-4 flex items-center justify-center rounded-md">
          <Camera size={20} className="text-primary" />
        </div>

        <div>
          <h2 className="font-medium">Add Photo or Video</h2>
          <p className="text-gray-400 text-sm">Click here or drag to upload</p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      </div>

      {/* PREVIEW */}
      {imagePreview && (
        <div className="w-fit">
          <Image
            src={imagePreview}
            alt="Preview"
            width={120}
            height={120}
            className="rounded-md object-cover"
          />
        </div>
      )}

      {/* NAME */}
      <Input
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />

      {/* EMAIL */}
      <Input
        label="Email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />

      <div className="mt-8 h-[2px] bg-primary" />

      {/* SCORES */}
      <ReviewScoreSelector
        label="Speed & Performance"
        leftLabel="Poor"
        rightLabel="Excellent"
        value={reviewScore.speedPerformance}
        onChange={(value) => handleScoreChange("speedPerformance", value)}
      />

      <ReviewScoreSelector
        label="Ride Comfortability"
        leftLabel="Uncomfortable"
        rightLabel="Very Comfortable"
        value={reviewScore.rideComfortability}
        onChange={(value) => handleScoreChange("rideComfortability", value)}
      />

      <ReviewScoreSelector
        label="Build Quality"
        leftLabel="Poor"
        rightLabel="Excellent"
        value={reviewScore.buildQuality}
        onChange={(value) => handleScoreChange("buildQuality", value)}
      />

      <ReviewSubmitButton isLoading={loading.create} onClick={handleSubmit} />
    </div>
  );
}
