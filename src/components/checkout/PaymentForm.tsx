"use client";

import { Input } from "../ui/Input";
import Button from "../ui/Button";
import { CheckoutFormValues } from "@/src/schema/checkout";

export interface PaymentFormValues {
  cardNumber: string;
  expiry: string;
  cvv: string;
  saveCard: boolean;
}

interface PaymentFormProps {
  formData: CheckoutFormValues;

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => void;

  isSubmitting?: boolean;

  errors: Partial<
    Record<keyof CheckoutFormValues, string>
  >;
}

export default function PaymentForm({
  formData,
  onChange,
  isSubmitting,
  errors,
}: PaymentFormProps) {
  return (
    <section className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold">
          Payment
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          All transactions are secure and encrypted.
        </p>
      </div>

      {/* CARD NUMBER */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Card Number
        </label>

        <Input
          name="cardNumber"
          value={formData.cardNumber}
          onChange={onChange}
          placeholder="0000 0000 0000 0000"
          className="h-12"
        />

        {errors.cardNumber && (
          <p className="text-sm text-red-500">
            {errors.cardNumber}
          </p>
        )}
      </div>

      {/* EXPIRY + CVV */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Expiration Date
          </label>

          <Input
            name="expiry"
            value={formData.expiry}
            onChange={onChange}
            placeholder="MM/YY"
            className="h-12"
          />

          {errors.expiry && (
            <p className="text-sm text-red-500">
              {errors.expiry}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            CVV
          </label>

          <Input
            name="cvv"
            value={formData.cvv}
            onChange={onChange}
            placeholder="123"
            className="h-12"
          />

          {errors.cvv && (
            <p className="text-sm text-red-500">
              {errors.cvv}
            </p>
          )}
        </div>
      </div>

      {/* SAVE INFO */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="saveCard"
          checked={formData.saveCard}
          onChange={(e) =>
            onChange({
              target: {
                name: "saveCard",
                value: e.target.checked,
                type: "checkbox",
              },
            } as unknown as React.ChangeEvent<HTMLInputElement>)
          }
          className="h-4 w-4"
        />

        <label className="text-sm">
          Save my information for a faster checkout
        </label>
      </div>

      {/* CTA */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 w-full bg-secondary text-sm! font-medium hover:bg-secondary/90"
      >
        {isSubmitting
          ? "Processing..."
          : "Pay Now"}
      </Button>
    </section>
  );
}