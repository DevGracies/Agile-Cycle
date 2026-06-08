"use client";

import { useState } from "react";
import { z } from "zod";

import CheckoutLayout from "@/src/components/checkout/CheckoutLayout";
import OrderSummary from "@/src/components/checkout/OrderSummary";
import CustomerInformation from "@/src/components/checkout/CustomerInformation";
import ShippingMethod from "@/src/components/checkout/ShippingMethod";
import PaymentForm from "@/src/components/checkout/PaymentForm";
import CheckoutFooter from "@/src/components/checkout/CheckoutFooter";

import Select from "@/src/components/ui/CustomSelect";

import { checkoutItems } from "@/src/mocks/checkout.mock";

import { checkoutSchema, CheckoutFormValues } from "@/src/schema/checkout";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Container from "@/src/components/layout/Container";
import Link from "next/link";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState<
    "local" | "express" | "pickup"
  >("local");

  const [carrier, setCarrier] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutFormValues, string>>
  >({});

  const [formData, setFormData] = useState<CheckoutFormValues>({
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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,

      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof CheckoutFormValues]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const result = checkoutSchema.safeParse(formData);

    if (result.success) {
      setErrors({});
      return true;
    }

    const formattedErrors: Partial<Record<keyof CheckoutFormValues, string>> =
      {};

    result.error.issues.forEach((error) => {
      const field = error.path[0] as keyof CheckoutFormValues;

      formattedErrors[field] = error.message;
    });

    setErrors(formattedErrors);

    return false;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    try {
      setIsSubmitting(true);

      console.log({
        ...formData,
        shippingMethod,
        carrier,
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      /*
      success actions here:
      - redirect
      - clear cart
      - toast success
      */
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HEADER */}

      <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 bg-white p-2">
        <Container className="items-center flex justify-between">
          <Link href="/">
            <Image
              src="/Agile-Cycle-Logo.png"
              alt="Agile Cycle"
              width={60}
              height={60}
              priority
            />
          </Link>

          <button className="rounded-xl p-2 transition hover:bg-neutral-100">
            <ShoppingCart size={22} className="text-[#5BAE2E]" />
          </button>
        </Container>
      </header>
      <CheckoutLayout summary={<OrderSummary items={checkoutItems} />}>
        <form onSubmit={onSubmit} className="space-y-6">
          <CustomerInformation
            formData={formData}
            onChange={handleChange}
            errors={errors}
          />

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
                  value={carrier ?? ""}
                  onChange={(value) => setCarrier(value as string)}
                  placeholder="Select Carrier"
                  options={[
                    {
                      label: "GIG Logistics",
                      value: "gigLogistics",
                    },

                    {
                      label: "DHL",
                      value: "dhl",
                    },

                    {
                      label: "FedEx",
                      value: "fedex",
                    },
                  ]}
                  className="w-full!"
                />
              </div>
            )}
          </section>

          <PaymentForm
            formData={formData}
            onChange={handleChange}
            errors={errors}
            isSubmitting={isSubmitting}
          />

          <CheckoutFooter />
        </form>
      </CheckoutLayout>
    </>
  );
}
