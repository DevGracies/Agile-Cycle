"use client";

import Loader from "@/src/components/ui/Loader";
import { usePayment } from "@/src/hooks/payment";
import { ChevronUp } from "lucide-react";


const PaymentGatewayCard = () => {
  const {gateways, settings, gatewayLoading, handleGatewayChange} = usePayment();

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm space-y-6 w-full">
      <h2 className="text-base sm:text-lg font-medium">Payment Gateways</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {gateways.map((gateway) => {
          const isActive = settings?.activeGateway === gateway;
          const isLoadingGateway = gatewayLoading === gateway;
          return (
            <div key={gateway} className="flex flex-col items-center w-full">
              <button
                disabled={isLoadingGateway}
                onClick={() => handleGatewayChange(gateway)}
                className={`w-full px-4 sm:px-6 lg:px-12 py-4 rounded-lg text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-secondary text-white shadow-md"
                  : "border border-secondary text-gray-500 bg-gray-100 hover:bg-gray-200"
              }`}
              >
                {isLoadingGateway ? (
                  <Loader size={18} />
                ) : (
                  gateway
                )}
              </button>

              {isActive && (
                <div className="flex flex-col items-center text-sm mt-2">
                  <ChevronUp className="text-secondary w-4 h-4" />
                  <p className="text-secondary font-medium">Active</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentGatewayCard;
