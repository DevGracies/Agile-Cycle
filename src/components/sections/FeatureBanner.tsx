"use client";

import { ShoppingBag, Leaf, RotateCcw, Shield } from "lucide-react";

const features = [
  { icon: ShoppingBag, title: "Free shipping", desc: "Free shipping for order above ₦400,000" },
  { icon: Leaf, title: "Ride Green, Live Clean", desc: "Ride clean with eco‑smart tech" },
  { icon: RotateCcw, title: "14 Days Return", desc: "Return unopened items within 14 days" },
  { icon: Shield, title: "Trusted Warranty", desc: "1-year warranty + lifetime support" },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-start gap-3 rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#519A09]">
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-base font-bold text-[#111827]">{feat.title}</p>
                <p className="text-sm text-[#5F6368]">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}