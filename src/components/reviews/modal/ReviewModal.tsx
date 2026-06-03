"use client";

import { useEffect, useRef, useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewHeader } from "./ReviewHeader";
import { ReviewProduct } from "@/src/types/review";
import { useReview } from "@/src/hooks/useReview";

export interface ReviewModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: ReviewProduct | null;
}

export function ReviewModal({
  open,
  setOpen,
  product,
}: ReviewModalProps) {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { loading } = useReview();

  const isSubmitting = loading.create;

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 10);

      return () => clearTimeout(timer);
    }

    setShow(false);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, isSubmitting, setOpen]);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      !isSubmitting
    ) {
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 
      ${
        show
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-0 opacity-0"
      }`}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-title"
        className={`w-full max-w-3xl rounded-3xl bg-white shadow-2xl overflow-hidden transition-all duration-300 p-2
        ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="max-h-[90vh] overflow-y-auto px-4 md:px-6">
          <ReviewHeader
            title={product?.name ?? ""}
            subtitle="Write a Review"
            disabled={isSubmitting}
            onClose={() => setOpen(false)}
          />

          <div className="mt-8">
            <ReviewForm
              product={product}
              onSuccess={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}