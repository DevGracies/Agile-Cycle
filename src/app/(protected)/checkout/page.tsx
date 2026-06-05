"use client";

import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormValues, checkoutSchema } from "@/src/schema/checkout";
import CheckoutLayout from "@/src/components/checkout/CheckoutLayout";
import OrderSummary from "@/src/components/checkout/OrderSummary";
import CustomerInformation from "@/src/components/checkout/CustomerInformation";
import { checkoutItems } from "@/src/mocks/checkout.mock";
import ShippingMethod from "@/src/components/checkout/ShippingMethod";
import PaymentForm from "@/src/components/checkout/PaymentForm";
import CheckoutFooter from "@/src/components/checkout/CheckoutFooter";
import Container from "@/src/components/layout/Container";
import Select from "@/src/components/ui/CustomSelect";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState<
    "local" | "express" | "pickup"
  >("local");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [carrier, setCarrier] = useState<string | null>(null);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),

    defaultValues: {
      email: "example@gmail.com",
      country: "Nigeria",

      firstName: "",
      lastName: "",

      address: "",
      addressLine2: "",

      city: "",
      state: "",
      zipCode: "",

      phone: "",

      cardNumber: "",
      expiry: "",
      cvv: "",

      saveCard: false,
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setIsSubmitting(true);

      console.log({
        ...data,
        shippingMethod,
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white p-2">
        <Container className="items-center flex justify-between">
          <Image
            src="/Agile-Cycle-Logo.png"
            alt="Agile Cycle"
            width={80}
            height={60}
            priority
          />

          <button className="rounded-xl p-2 transition hover:bg-neutral-100">
            <ShoppingBasket size={22} className="text-[#5BAE2E]" />
          </button>
        </Container>
      </header>

      <CheckoutLayout summary={<OrderSummary items={checkoutItems} />}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* CUSTOMER INFO */}

          <CustomerInformation control={form.control} />

          {/* SHIPPING */}

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <ShippingMethod
              value={shippingMethod}
              onChange={setShippingMethod}
            />

            {shippingMethod === "local" && (
              <div className="mt-6 space-y-2">
                <label className="text-sm font-medium">
                  Select Local Carrier
                </label>

                <Select
                  value={carrier as string}
                  onChange={(val) => setCarrier(val as string)}
                  placeholder="Select Carrier"
                  options={[
                    { label: "GIG Logistics", value: "gigLogistics" },
                    { label: "DHL", value: "dhl" },
                    { label: "FedEx", value: "fedex" },
                  ]}
                  className="w-full"
                />
              </div>
            )}
          </section>

          {/* PAYMENT */}

          <PaymentForm control={form.control} isSubmitting={isSubmitting} />

          {/* FOOTER */}

          <CheckoutFooter />
        </form>
      </CheckoutLayout>

      {/* MOBILE STICKY CTA */}

      <div className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] lg:hidden">
        <button
          type="button"
          className="h-14 w-full rounded-xl bg-secondary/90 font-medium text-white"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
