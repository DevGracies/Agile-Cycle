"use client";

import Select from "../ui/CustomSelect";
import { Input } from "../ui/Input";
import { CheckoutFormValues } from "@/src/schema/checkout";

interface CustomerInformationProps {
  formData: CheckoutFormValues;

  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;

  errors: Partial<Record<keyof CheckoutFormValues, string>>;
}

export default function CustomerInformation({
  formData,
  onChange,
  errors,
}: CustomerInformationProps) {
  return (
    <section className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* EMAIL */}

      <div className="space-y-2">
        <div
          className="
            flex items-center gap-4
            overflow-hidden
            rounded-lg
            border border-[#E7F4E4]
            bg-gray-100
          "
        >
          <div
            className="
              bg-secondary
              text-white
              text-sm
              p-4
            "
            style={{
              clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
              minWidth: "220px",
            }}
          >
            Email Address
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium">{formData.email}</p>
          </div>
        </div>
      </div>

      {/* COUNTRY */}

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-500">
          Country / Region
        </label>

        <Select
          value={formData.country ?? ""}
          onChange={(value) => {
            const event = {
              target: { name: "country", value },
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange(event);
          }}
          placeholder="Select Country"
          options={[
            {
              label: "Nigeria",
              value: "nigeria",
            },

            {
              label: "Ghana",
              value: "ghana",
            },

            {
              label: "Kenya",
              value: "kenya",
            },
            {
              label: "South Africa",
              value: "south-africa",
            },
          ]}
          className="w-full!"
        />

        {errors.country && (
          <p className="text-sm text-red-500">{errors.country}</p>
        )}
      </div>

      {/* NAME */}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>

          <Input
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            placeholder="John"
            className="h-12"
          />

          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>

          <Input
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder="Doe"
            className="h-12"
          />

          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* ADDRESS */}

      <div className="space-y-2">
        <label className="text-sm font-medium">Address</label>

        <Input
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="House number and street name"
          className="h-12"
        />

        {errors.address && (
          <p className="text-sm text-red-500">{errors.address}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          name="addressLine2"
          value={formData.addressLine2 ?? ""}
          onChange={onChange}
          className="h-12"
          placeholder="Apartment, suite, unit, etc. (optional)"
        />

        {errors.addressLine2 && (
          <p className="text-sm text-red-500">{errors.addressLine2}</p>
        )}
      </div>

      {/* LOCATION */}

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm font-medium">City</label>

          <Input
            name="city"
            value={formData.city}
            onChange={onChange}
            placeholder="Gwarinpa"
            className="h-12"
          />

          {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">State</label>

          <Input
            name="state"
            value={formData.state}
            onChange={onChange}
            placeholder="Abuja"
            className="h-12"
          />

          {errors.state && (
            <p className="text-sm text-red-500">{errors.state}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Zip Code</label>

          <Input
            name="zipCode"
            value={formData.zipCode}
            onChange={onChange}
            placeholder="1009823"
            className="h-12"
          />

          {errors.zipCode && (
            <p className="text-sm text-red-500">{errors.zipCode}</p>
          )}
        </div>
      </div>

      {/* PHONE */}

      <div className="space-y-2">
        <label className="text-sm font-medium">Phone</label>

        <Input
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="08012345678"
          className="h-12"
        />

        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}

        <p className="text-xs text-primary">
          In case we need to contact you about your order
        </p>
      </div>
    </section>
  );
}
