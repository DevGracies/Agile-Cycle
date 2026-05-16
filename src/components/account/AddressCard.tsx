// src/components/account/AddressCard.tsx
"use client";

import Link from "next/link";

interface Address {
  full_name?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  phone?: string;
  is_default?: boolean;
}

interface AddressCardProps {
  addresses?: Address[];
  loading?: boolean;
}

export default function AddressCard({ addresses = [], loading = false }: AddressCardProps) {
  const defaultAddress = addresses.find((a) => a.is_default) || addresses[0];

  return (
    <div className="rounded-2xl border border-[#E8E8E8] bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[1px] text-[#01430D] sm:text-sm">Addresses</p>
        <Link
          href="/account"
          className="text-xs font-normal text-[#519A09] underline hover:no-underline sm:text-sm"
        >
          View Addresses ({addresses.length})
        </Link>
      </div>

      {loading ? (
        <div className="flex animate-pulse flex-col gap-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-4 w-3/4 rounded bg-gray-200" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            {defaultAddress?.full_name || "John Doe"}
          </p>
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            {defaultAddress?.street || "12 Adeola Odeku Street, Victoria Island"}
          </p>
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            {defaultAddress?.city || "Victoria Island"}
          </p>
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            {defaultAddress?.state || "Lagos State"}
          </p>
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            {defaultAddress?.country || "Nigeria"}
          </p>
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            Postal code: {defaultAddress?.postal_code || "101241"}
          </p>
          <p className="text-sm font-normal text-[#111827] sm:text-base">
            {defaultAddress?.phone || "+2348012345678"}
          </p>
        </div>
      )}
    </div>
  );
}