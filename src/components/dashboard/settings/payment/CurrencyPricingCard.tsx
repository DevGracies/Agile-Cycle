"use client";

import Select from "@/src/components/ui/CustomSelect";
import Loader from "@/src/components/ui/Loader";
import { usePayment } from "@/src/hooks/payment";
import { CurrencyType } from "@/src/types/index";

const CurrencyPricingCard = () => {
  const { settings, currencyLoading, handleCurrencyChange, currencies } =
    usePayment();

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm space-y-6 w-full">
      <h2 className="text-base sm:text-lg">Currency & Pricing</h2>

      <p className="text-sm sm:text-base text-gray-500">Default currency</p>

      <Select
        disabled={currencyLoading}
        value={settings?.defaultCurrency as CurrencyType}
        onChange={(val) => handleCurrencyChange(val as CurrencyType)}
        options={currencies.map((cur) => ({
          label: cur,
          value: cur,
        }))}
      />

      {currencyLoading && <Loader size={18} text="Updating currency..." />}
    </div>
  );
};

export default CurrencyPricingCard;
