import Link from "next/link";
import React from "react";

const OrderNextSteps = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Next Steps</h3>
      <section className="w-full bg-gray-100 rounded-2xl p-6 shadow-sm">
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="leading-relaxed">
            ✔ Confirmation email sent with order details and tracking number
          </li>

          <li className="leading-relaxed">
            ✔ You can view this order under{" "}
            <Link href="/orders" className="text-primary font-medium underline">
              My Orders
            </Link>
          </li>

          <li className="leading-relaxed">
            ✔ Tracking is done externally via the courier/shipping method using the provided tracking number
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OrderNextSteps;
