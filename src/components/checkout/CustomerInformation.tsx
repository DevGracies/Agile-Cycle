"use client";

import { Control, Controller } from "react-hook-form";
import { Input } from "../ui/Input";
import { Check } from "lucide-react";

export interface CheckoutFormValues {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

interface CustomerInformationProps {
  control: Control<CheckoutFormValues>;
}

export default function CustomerInformation({
  control,
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
            <p className="text-sm font-medium">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* COUNTRY */}

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-500">Country / Region</label>

        {/* <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Nigeria">
                  Nigeria
                </SelectItem>

                <SelectItem value="Ghana">
                  Ghana
                </SelectItem>

                <SelectItem value="Kenya">
                  Kenya
                </SelectItem>

                <SelectItem value="South Africa">
                  South Africa
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        /> */}
      </div>

      {/* NAME */}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>

          <Controller
            control={control}
            name="firstName"
            render={({ field }) => <Input {...field} placeholder="John"  className="h-12" />}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => <Input {...field} placeholder="Doe" className="h-12" />}
          />
        </div>
      </div>

      {/* ADDRESS */}

      <div className="space-y-2">
        <label className="text-sm font-medium">Address</label>

        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="House number and street name"
              className="h-12"
            />
          )}
        />
      </div>

      <Controller
        control={control}
        name="addressLine2"
        render={({ field }) => (
          <Input
            {...field}
            className="h-12"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        )}
      />

      {/* LOCATION */}

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm font-medium">City</label>

          <Controller
            control={control}
            name="city"
            render={({ field }) => <Input {...field} placeholder="Gwarinpa" className="h-12" />}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">State</label>

          <Controller
            control={control}
            name="state"
            render={({ field }) => <Input {...field} placeholder="Abuja" className="h-12" />}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Zip Code</label>

          <Controller
            control={control}
            name="zipCode"
            render={({ field }) => <Input {...field} placeholder="1009823" className="h-12" />}
          />
        </div>
      </div>

      {/* PHONE */}

      <div className="space-y-2">
        <label className="text-sm font-medium">Phone</label>

        <Controller
          control={control}
          name="phone"
          render={({ field }) => <Input {...field} placeholder="08012345678" className="h-12" />}
        />

        <p className="text-xs text-primary">
          In case we need to contact you about your order
        </p>
      </div>
    </section>
  );
}
