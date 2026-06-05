"use client";

import {
  Control,
  Controller,
} from "react-hook-form";
import { Input } from "../ui/Input";
import { Checkbox } from "@mui/material";
import Button from "../ui/Button";


interface PaymentFormProps {
  control: Control<any>;
  isSubmitting?: boolean;
}

export default function PaymentForm({
  control,
  isSubmitting,
}: PaymentFormProps) {
  return (
    <section className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold">
          Payment
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          All transactions are secure and
          encrypted.
        </p>
      </div>

      {/* CARD NUMBER */}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Card Number
        </label>

        <Controller
          control={control}
          name="cardNumber"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="0000 0000 0000 0000"
              className="h-12"
            />
          )}
        />
      </div>

      {/* EXPIRY + CVV */}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Expiration Date
          </label>

          <Controller
            control={control}
            name="expiry"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="MM/YY"
                className="h-12"
              />
            )}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            CVV
          </label>

          <Controller
            control={control}
            name="cvv"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="123"
                className="h-12"
              />
            )}
          />
        </div>
      </div>

      {/* SAVE INFO */}

      <div className="flex items-center gap-3">
        <Controller
          control={control}
          name="saveCard"
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />

        <label className="text-sm">
          Save my information for a faster
          checkout
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