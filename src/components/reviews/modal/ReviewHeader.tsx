"use client";

import { X } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  onClose: () => void;
  disabled?: boolean;
}

export function ReviewHeader({ title, subtitle, onClose, disabled }: Props) {
  return (
    <div className="sticky top-0 bg-white text-center py-6">
      <button
        onClick={onClose}
        disabled={disabled}
        className="absolute right-5 top-5 w-10 h-10 cursor-pointer rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <X size={18} className="text-primary" />
      </button>

      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

      <div className="mt-8 h-[2px] bg-primary" />
    </div>
  );
}
