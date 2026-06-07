import React from "react";

const orderDetails = [
  { label: "Order ID", value: "123456789" },
  {
    label: "Product(s)",
    value: ["Agile Pro Rider (eBike)", "Smart Helmet", "Oversize Saddle"],
  },
  { label: "Units Ordered", value: 3 },
  { label: "Total Amount", value: 1500000 },
  { label: "Payment Method", value: "Card Payment" },
  { label: "Estimated Delivery", value: "3–5 business days" },
];

const OrderSummary = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
      <section className="w-full bg-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="space-y-4">
          {orderDetails.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-3 gap-4 items-start"
            >
              <p className="text-sm font-medium text-gray-600">{item.label}</p>

              <p className="col-span-2 text-sm text-primary">
                {Array.isArray(item.value)
                  ? item.value.join(", ")
                  : typeof item.value === "number"
                    ? item.label === "Total Amount"
                      ? `₦${item.value.toLocaleString()}`
                      : item.value.toString()
                    : item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrderSummary;
