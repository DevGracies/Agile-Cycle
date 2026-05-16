import CurrencyPricingCard from "@/src/components/dashboard/settings/payment/CurrencyPricingCard";
import PaymentGatewayCard from "@/src/components/dashboard/settings/payment/PaymentGatewayCard";
import Transactions from "@/src/components/dashboard/settings/payment/Transactions";
import React from "react";

const PaymentPage = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 w-full">
        <PaymentGatewayCard />
        <CurrencyPricingCard />

        <div className="xl:col-span-2 w-full">
          <Transactions />
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
