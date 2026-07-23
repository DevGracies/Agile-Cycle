"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export const Pagination = ({
  setCurrentPage,
  totalPages,
  currentPage,
}: {
  setCurrentPage?: any;
  totalPages: number;
  currentPage: number;
}) => {
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pages = getVisiblePages();

  return (
    <div className="flex items-center gap-4">
      {/* PREV */}
      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-primary cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        <ArrowLeft size={20} />
      </button>

      {/* PAGES (max 3 visible) */}
      <div className="flex items-center gap-3">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentPage === page
              ? "w-6 bg-secondary"
              : "w-3 bg-[#B7C7B0] hover:bg-[#9fb49a]"
              }`}
          />
        ))}
      </div>

      {/* NEXT */}
      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-primary cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={`font-semibold ${status === "Failed" || status === "Inactive"
        ? "text-[#F04438]"
        : status === "Delivered" || status === "Successful" || status === "Active"
          ? "text-primary"
          : "text-[#FFA000]"
        }`}
    >
      {status}
    </span>
  );
};

export const ToggleSwitch = ({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      onClick={onToggle}
      className={`relative w-[42px] h-[24px] rounded-full cursor-pointer transition-all duration-300 ${enabled ? "bg-primary" : "bg-[#A8A8A8]"
        }`}
    >
      <div
        className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all duration-300 ${enabled ? "left-[20px]" : "left-[3px]"
          }`}
      />
    </div>
  );
};
