"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useCustomerStore } from "@/src/store/useCustomerStore";
import { cn } from "@/src/lib/utils";
import { deleteCustomer, sendCustomerEmail } from "@/src/lib/api";

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function CustomerProfileModal({
  onDeleted,
}: {
  onDeleted?: () => void;
}) {
  const { selectedCustomer, isModalOpen, setIsModalOpen, setSelectedCustomer } =
    useCustomerStore();

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    joinedDate: "",
    status: "active",
    primaryAddress: "",
    secondaryAddress: "",
    company: "",
  });

  useEffect(() => {
    if (selectedCustomer) {
      setForm({
        id: selectedCustomer.id || "",
        name: selectedCustomer.name || "",
        email: selectedCustomer.email || "",
        phone: selectedCustomer.phone || "",
        joinedDate: selectedCustomer.joinedDate || "",
        status: selectedCustomer.status || "active",
        primaryAddress: selectedCustomer.primaryAddress || "",
        secondaryAddress: selectedCustomer.secondaryAddress || "",
        company: selectedCustomer.company || "",
      });
    }
  }, [selectedCustomer]);

  // Modal is read-only: we only show selected customer data and allow deletion.

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleDelete = async () => {
    if (!form.id) return toast.error("Missing customer id");
    const ok = window.confirm(
      "Delete this customer? This action cannot be undone.",
    );
    if (!ok) return;
    try {
      await deleteCustomer(form.id);
      toast.success("Customer deleted");
      handleClose();
      if (onDeleted) onDeleted();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed");
    }
  };

  const [sendingEmail, setSendingEmail] = useState(false);

  const handleSendEmail = async () => {
    if (!form.id) return toast.error("Missing customer id");
    setSendingEmail(true);
    try {
      await sendCustomerEmail(form.id);
      toast.success("Email sent");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Send failed");
    } finally {
      setSendingEmail(false);
    }
  };

  if (!selectedCustomer || !isModalOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-250 max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
          <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <h2 className="text-lg font-semibold text-[#1A1A1A] sm:text-xl">
                Customer Profile
              </h2>
              <button
                onClick={handleClose}
                className="rounded-full p-2 transition-colors hover:bg-[#F5F5F5]"
                aria-label="Close modal"
              >
                <CloseIcon className="text-[#585858]" />
              </button>
            </div>

            {/* Top row: Basic Info and Address Details side by side */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {/* Basic Info */}
              <div>
                <h3 className="mb-3 text-xs font-semibold text-[#519A09] sm:mb-4 sm:text-sm">
                  Basic Info
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Order ID
                    </label>
                    <input
                      aria-label="Order ID"
                      value={form.id}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      placeholder="Auto-generated"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Customer Name
                    </label>
                    <input
                      aria-label="Customer Name"
                      value={form.name}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Email
                    </label>
                    <input
                      aria-label="Email"
                      value={form.email}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Phone No
                    </label>
                    <input
                      aria-label="Phone No"
                      value={form.phone}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Joined Date
                    </label>
                    <input
                      aria-label="Joined Date"
                      value={form.joinedDate}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      placeholder="YYYY-MM-DD"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Status
                    </label>
                    <select
                      aria-label="Status"
                      value={form.status}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      disabled
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div>
                <h3 className="mb-3 text-xs font-semibold text-[#519A09] sm:mb-4 sm:text-sm">
                  Address Details
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Primary Address
                    </label>
                    <input
                      aria-label="Primary Address"
                      value={form.primaryAddress}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-[#519A09] sm:text-sm">
                      Secondary Address
                    </label>
                    <input
                      aria-label="Secondary Address"
                      value={form.secondaryAddress}
                      className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                      readOnly
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order History (full width, below the top row) */}
            <div className="mt-6">
              <h3 className="mb-3 text-xs font-semibold text-[#519A09] sm:mb-4 sm:text-sm">
                Order History
              </h3>
              <div className="overflow-hidden rounded-lg border border-[#E8E8E8]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-87.5">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        <th className="px-2 py-2 text-left text-[10px] font-medium text-[#519A09] sm:px-3 sm:py-2.5 sm:text-xs">
                          Order ID
                        </th>
                        <th className="px-2 py-2 text-left text-[10px] font-medium text-[#519A09] sm:px-3 sm:py-2.5 sm:text-xs">
                          Products
                        </th>
                        <th className="px-2 py-2 text-left text-[10px] font-medium text-[#519A09] sm:px-3 sm:py-2.5 sm:text-xs">
                          QTY
                        </th>
                        <th className="px-2 py-2 text-left text-[10px] font-medium text-[#519A09] sm:px-3 sm:py-2.5 sm:text-xs">
                          Date
                        </th>
                        <th className="px-2 py-2 text-left text-[10px] font-medium text-[#519A09] sm:px-3 sm:py-2.5 sm:text-xs">
                          Order Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E8E8E8]">
                        <td className="px-2 py-2 text-[10px] text-[#585858] sm:px-3 sm:py-2.5 sm:text-xs">
                          &nbsp;
                        </td>
                        <td className="px-2 py-2 text-[10px] text-[#585858] sm:px-3 sm:py-2.5 sm:text-xs">
                          &nbsp;
                        </td>
                        <td className="px-2 py-2 text-[10px] text-[#585858] sm:px-3 sm:py-2.5 sm:text-xs">
                          &nbsp;
                        </td>
                        <td className="px-2 py-2 text-[10px] text-[#585858] sm:px-3 sm:py-2.5 sm:text-xs">
                          &nbsp;
                        </td>
                        <td className="px-2 py-2 text-[10px] text-[#585858] sm:px-3 sm:py-2.5 sm:text-xs">
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom row: Company (left) and Refund & Return History (right) */}
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {/* Refund & Return History */}
              <div>
                <h3 className="mb-3 text-xs font-semibold text-[#519A09] sm:mb-4 sm:text-sm">
                  Refund & Return History
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-[#519A09] sm:text-sm">
                      Refund Requests
                    </span>
                    <span className="text-xs font-medium text-[#585858] sm:text-sm" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#519A09] sm:text-sm">
                      Last Refund
                    </span>
                    <span className="text-xs font-medium text-[#585858] sm:text-sm" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#519A09] sm:text-sm">
                      Total Refunded
                    </span>
                    <span className="text-xs font-medium text-[#585858] sm:text-sm" />
                  </div>
                </div>
              </div>

              {/* Company / Organization */}
              <div>
                <h3 className="mb-3 text-xs font-semibold text-[#519A09] sm:mb-4 sm:text-sm">
                  Company / Organization
                </h3>
                <div className="flex flex-col">
                  <label className="text-xs text-[#519A09] sm:text-sm">
                    Company
                  </label>
                  <input
                    aria-label="Company"
                    value={form.company}
                    className="mt-1 w-full rounded border border-[#E8E8E8] px-2 py-1 text-xs sm:text-sm bg-gray-50"
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={handleClose}
                className="px-3 py-2 text-xs sm:text-sm rounded border border-[#E8E8E8] text-[#585858]"
              >
                Close
              </button>
              <button
                onClick={handleSendEmail}
                aria-label="Send email"
                disabled={sendingEmail}
                className="px-3 py-2 text-xs sm:text-sm rounded border border-[#519A09] text-[#519A09] disabled:opacity-50"
              >
                {sendingEmail ? "Sending..." : "Send email"}
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-2 text-xs sm:text-sm rounded bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
