import React from "react";
import Container from "../layout/Container";
import { BadgeCheckIcon } from "lucide-react";

const OrderSuccessHeader = () => {
  return (
      <Container className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
        
        <BadgeCheckIcon
          size={90}
          className="text-secondary shrink-0"
        />

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Your order has been placed successfully!
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            We&apos;ve received your order and it&apos;s being processed.
          </p>
        </div>
      </Container>
  );
};

export default OrderSuccessHeader;