"use client";

import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const PaymentGatewayCard = () => {
  const [isActive, setIsActive] = useState<string | null>("Paystack");

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm space-y-6 w-full">
      <h2 className="text-base sm:text-lg font-bold">
        Payment Gateways
      </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {["Paystack", "Flutter"].map((gateway) => (
          <div
            key={gateway}
            className="flex flex-col items-center w-full"
          >
            <button
              onClick={() => setIsActive(gateway)}
              className={`w-full px-4 sm:px-6 lg:px-12 py-4 rounded-lg text-sm font-medium transition-all duration-300
              ${
                isActive === gateway
                  ? "bg-[#01430D] hover:bg-[#0b4f13] text-white shadow-md"
                  : "border border-[#0b4f13] text-[#6b7280] bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {gateway}
            </button>

            {isActive === gateway && (
              <div className="flex flex-col items-center text-sm mt-2">
                <ChevronUp className="text-[#519A09] w-4 h-4" />
                <p className="text-[#519A09] font-medium">
                  Active
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentGatewayCard;