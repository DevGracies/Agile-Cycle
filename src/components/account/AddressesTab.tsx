// src/components/account/AddressesTab.tsx
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { setDefaultAddress, deleteAddress } from "@/src/lib/api";

interface Address {
  id: string;
  full_name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code?: string;
  phone?: string;
  is_default?: boolean;
}

interface AddressesTabProps {
  addresses?: Address[];
  loading?: boolean;
  onAddressUpdate?: () => void; // callback to refresh the list
}

export default function AddressesTab({
  addresses = [],
  loading = false,
  onAddressUpdate,
}: AddressesTabProps) {
  const [updatingDefault, setUpdatingDefault] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleSetDefault = async (addressId: string) => {
    setUpdatingDefault(addressId);
    try {
      await setDefaultAddress(addressId);
      toast.success("Default address updated");
      if (onAddressUpdate) onAddressUpdate();
    } catch (error) {
      toast.error("Failed to set default address");
    } finally {
      setUpdatingDefault(null);
    }
  };

  const handleDelete = async (addressId: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return;
    setDeleting(addressId);
    try {
      await deleteAddress(addressId);
      toast.success("Address deleted");
      if (onAddressUpdate) onAddressUpdate();
    } catch (error) {
      toast.error("Failed to delete address");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="rounded-2xl border border-[#E8E8E8] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#E8E8E8] px-4 py-3 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[1px] text-[#01430D]">Addresses</p>
        <button className="rounded-lg bg-[#519A09] px-4 py-2 text-xs font-medium text-white hover:bg-[#457f07]">
          Add a New Address
        </button>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4 p-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-40 rounded-xl bg-gray-200" />
          ))}
        </div>
      ) : addresses.length === 0 ? (
        <div className="p-12 text-center">
          <p className="font-semibold text-[#111827]">No addresses saved</p>
          <p className="text-sm text-[#5F6368]">Add an address to see it here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 divide-y divide-[#E8E8E8] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {addresses.map((addr) => (
            <div key={addr.id} className="flex flex-col gap-1 p-4 sm:p-6">
              <div className="mb-2 flex items-start justify-between">
                <p className="font-semibold text-[#111827]">{addr.full_name}</p>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!addr.is_default}
                    onChange={() => handleSetDefault(addr.id)}
                    disabled={updatingDefault === addr.id}
                    className="h-4 w-4 cursor-pointer accent-[#519A09] disabled:opacity-50"
                  />
                  <span className="text-xs text-[#5F6368]">Default</span>
                </label>
              </div>
              <p className="text-sm text-[#5F6368]">{addr.street}</p>
              <p className="text-sm text-[#5F6368]">{addr.city}</p>
              <p className="text-sm text-[#5F6368]">{addr.state}</p>
              <p className="text-sm text-[#5F6368]">{addr.country}</p>
              {addr.postal_code && <p className="text-sm text-[#5F6368]">Postal code: {addr.postal_code}</p>}
              {addr.phone && <p className="text-sm text-[#5F6368]">{addr.phone}</p>}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleDelete(addr.id)}
                  disabled={deleting === addr.id}
                  className="rounded-lg border border-[#E8E8E8] px-4 py-1.5 text-xs font-medium text-[#5F6368] hover:border-red-300 hover:text-red-500 disabled:opacity-50"
                >
                  {deleting === addr.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}