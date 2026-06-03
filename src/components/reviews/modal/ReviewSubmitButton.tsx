"use client";

import Loader from "../../ui/Loader";
interface ReviewSubmitButtonProps {
  isLoading: boolean;
  onClick?: () => void;
}

export function ReviewSubmitButton({
  isLoading,
  onClick,
}: ReviewSubmitButtonProps) {
  return (
    <div className="sticky bottom-0 bg-white py-6">
      <button
        type="submit"
        onClick={onClick}
        disabled={isLoading}
        className="h-12 w-full bg-secondary rounded-md text-white hover:bg-secondary/90"
      >
        {isLoading ? (
            <Loader text="Submitting..." />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
}