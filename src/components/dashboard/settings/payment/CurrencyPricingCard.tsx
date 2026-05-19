"use client";
import React, { useState } from "react";

const CurrencyPricingCard = () => {
  const [currency, setCurrency] = useState<string>("Naira");
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm space-y-6 w-full">
      {/* HEADER */}
      <h2 className="text-base sm:text-lg font-bold">Currency & Pricing</h2>

      <p className="text-sm sm:text-base text-gray-500">Default currency</p>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full bg-[#ECFDF3] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
      >
        {["Naira", "USD", "Euro", "Pounds"].map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyPricingCard;
