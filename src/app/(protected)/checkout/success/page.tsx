import Container from "@/src/components/layout/Container";
import OrderButton from "@/src/components/order-success/OrderButton";
import OrderNextSteps from "@/src/components/order-success/OrderNextSteps";
import OrderSuccessHeader from "@/src/components/order-success/OrderSuccessHeader";
import OrderSummary from "@/src/components/order-success/OrderSummary";
import React from "react";

const OrderSuccessPage = () => {
  return (
    <Container className="py-12 space-y-4">
      <div className="space-y-24">
        <OrderSuccessHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <OrderSummary />
          <OrderNextSteps />
        </div>
      </div>
      <div className="flex gap-4">
        <OrderButton text="View My Orders" href="/orders" />
        <OrderButton text="Continue Shopping" href="/ebikes" />
      </div>
    </Container>
  );
};

export default OrderSuccessPage;
