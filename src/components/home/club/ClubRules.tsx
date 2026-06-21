"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const rules = [
  {
    title: "Energetic but Respectful Discussion",
    content:
      "Be respectful and constructive when engaging with other riders.",
  },
  {
    title: "Respect All Riders",
    content:
      "Everyone is welcome regardless of experience level.",
  },
  {
    title: "Stay On Topic",
    content:
      "Keep discussions related to cycling and club activities.",
  },
  {
    title: "No Spam or Ads",
    content:
      "Promotional content is not allowed without approval.",
  },
  {
    title: "Share Your Truths",
    content:
      "Share experiences honestly and support fellow riders.",
  },
];

export default function ClubRules() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <div className="rounded-lg bg-[#005E11] p-6 text-white">
      <h2 className="mb-6 text-2xl font-semibold">
        Club Rules
      </h2>

      <div className="space-y-4">
        {rules.map((rule, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-white/20 pb-4"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
                className="flex w-full items-center justify-between text-left"
              >
                <span>
                  {index + 1}. {rule.title}
                </span>

                {isOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {isOpen && (
                <p className="mt-3 text-sm text-white/80">
                  {rule.content}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}