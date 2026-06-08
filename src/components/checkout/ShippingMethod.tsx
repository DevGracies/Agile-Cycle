"use client";

interface ShippingMethodProps {
  value: string;
  onChange: (
    value: "local" | "express" | "pickup",
  ) => void;
}

export default function ShippingMethod({
  value,
  onChange,
}: ShippingMethodProps) {
  const methods = [
    {
      label: "Local Courier Delivery",
      value: "local",
    },
    {
      label: "Express Delivery",
      value: "express",
    },
    {
      label: "Pickup (In-Store)",
      value: "pickup",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">
        Shipping Method
      </h3>

      <div className="grid gap-3 md:grid-cols-3">
        {methods.map((method) => (
          <button
            key={method.value}
            type="button"
            onClick={() =>
              onChange(
                method.value as
                  | "local"
                  | "express"
                  | "pickup",
              )
            }
            className={`
              rounded-xl border px-4 py-3 text-sm font-medium transition-all
              ${value === method.value
                ? "border-primary bg-primary text-white"
                : "border-neutral-200 bg-white hover:border-primary"}
            `}
          >
            {method.label}
          </button>
        ))}
      </div>
    </div>
  );
}