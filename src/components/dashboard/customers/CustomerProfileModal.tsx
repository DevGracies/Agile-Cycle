"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Box, Typography, Button } from "@mui/material";
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


interface OrderItem {
  id: string;
  productName: string;
  qty: number;
  date: string;
  total: number;
}

interface RefundData {
  requests: number;
  lastRefund: string | null;
  totalRefunded: number;
}

export function CustomerProfileModal({ onDeleted }: { onDeleted?: () => void }) {
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

  // Orders and refunds (dynamic, from selectedCustomer)
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [refund, setRefund] = useState<RefundData>({
    requests: 0,
    lastRefund: null,
    totalRefunded: 0,
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
      // Populate dynamic order history and refund data if available
      setOrders((selectedCustomer as any).orders || []);
      setRefund({
        requests: Number((selectedCustomer as any).refundRequests ?? 0),
        lastRefund: selectedCustomer.lastRefund ?? null,
        totalRefunded: Number(selectedCustomer.totalRefunded ?? 0),
      });
    }
  }, [selectedCustomer]);

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleDelete = async () => {
    if (!form.id) return toast.error("Missing customer id");
    const ok = window.confirm(
      "Delete this customer? This action cannot be undone."
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
      <Box
        className="fixed inset-0 z-40 bg-black/50"
        onClick={handleClose}
      />

      {/* Modal */}
      <Box className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Box className="w-full max-w-[1000px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
          <Box className="p-4 sm:p-6">
            {/* Header */}
            <Box className="mb-4 flex items-center justify-between sm:mb-6">
              <Typography variant="h6" className="font-semibold text-[#111827]">
                Customer Profile
              </Typography>
              <button
                onClick={handleClose}
                className="rounded-full p-2 transition-colors hover:bg-[#F5F5F5]"
                aria-label="Close modal"
              >
                <CloseIcon className="text-[#585858]" />
              </button>
            </Box>

            {/* Top row: Basic Info and Address Details side by side */}
            <Box className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {/* Basic Info */}
              <Box>
                <Typography
                  variant="subtitle2"
                  className="mb-3 font-semibold text-[#519A09] sm:mb-4"
                >
                  Basic Info
                </Typography>
                <Box className="space-y-2.5 sm:space-y-3">
                  {[
                    { label: "Order ID", value: form.id },
                    { label: "Customer Name", value: form.name },
                    { label: "Email", value: form.email },
                    { label: "Phone No", value: form.phone },
                    { label: "Joined Date", value: form.joinedDate },
                    {
                      label: "Status",
                      value: form.status === "active" ? "Active" : "Inactive",
                      className: form.status === "active" ? "text-[#519A09]" : "text-[#FFA000]",
                    },
                  ].map((field) => (
                    <Box key={field.label} className="flex justify-between">
                      <Typography variant="body2" className="text-[#519A09]">
                        {field.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        className={cn("font-medium text-[#585858]", field.className)}
                      >
                        {field.value || "—"}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Address Details */}
              <Box>
                <Typography
                  variant="subtitle2"
                  className="mb-3 font-semibold text-[#519A09] sm:mb-4"
                >
                  Address Details
                </Typography>
                <Box className="space-y-2.5 sm:space-y-3">
                  <Box className="flex justify-between">
                    <Typography variant="body2" className="text-[#519A09]">
                      Primary Address
                    </Typography>
                    <Typography
                      variant="body2"
                      className="max-w-[180px] text-right font-medium text-[#585858]"
                    >
                      {form.primaryAddress || "—"}
                    </Typography>
                  </Box>
                  <Box className="flex justify-between">
                    <Typography variant="body2" className="text-[#519A09]">
                      Secondary Address
                    </Typography>
                    <Typography
                      variant="body2"
                      className="max-w-[180px] text-right font-medium text-[#585858]"
                    >
                      {form.secondaryAddress || "None"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Order History (full width) */}
            <Box className="mt-6">
              <Typography
                variant="subtitle2"
                className="mb-3 font-semibold text-[#519A09] sm:mb-4"
              >
                Order History
              </Typography>
              <Box className="overflow-hidden rounded-lg border border-[#E8E8E8]">
                <Box className="overflow-x-auto">
                  <table className="w-full min-w-[350px]">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        {["Order ID", "Products", "QTY", "Date", "Order Total"].map((h) => (
                          <th
                            key={h}
                            className="px-3 py-2 text-left text-xs font-medium text-[#519A09] sm:px-4 sm:py-3 sm:text-sm"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length > 0 ? (
                        orders.map((order) => (
                          <tr key={order.id} className="border-t border-[#E8E8E8]">
                            <td className="px-3 py-2 text-xs text-[#585858] sm:px-4 sm:py-3 sm:text-sm">
                              {order.id}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#585858] sm:px-4 sm:py-3 sm:text-sm">
                              {order.productName}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#585858] sm:px-4 sm:py-3 sm:text-sm">
                              x{order.qty}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#585858] sm:px-4 sm:py-3 sm:text-sm">
                              {order.date}
                            </td>
                            <td className="px-3 py-2 text-xs text-[#585858] sm:px-4 sm:py-3 sm:text-sm">
                              ₦{order.total.toLocaleString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="border-t border-[#E8E8E8]">
                          <td colSpan={5} className="px-4 py-4 text-center text-sm text-[#585858]">
                            No order history
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </Box>
              </Box>
            </Box>

            {/* Bottom row: Refund & Return (left) and Company (right) */}
            <Box className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <Box>
                <Typography
                  variant="subtitle2"
                  className="mb-3 font-semibold text-[#519A09] sm:mb-4"
                >
                  Refund & Return History
                </Typography>
                <Box className="space-y-2.5 sm:space-y-3">
                  <Box className="flex justify-between">
                    <Typography variant="body2" className="text-[#519A09]">
                      Refund Requests
                    </Typography>
                    <Typography variant="body2" className="font-medium text-[#585858]">
                      {refund.requests}
                    </Typography>
                  </Box>
                  <Box className="flex justify-between">
                    <Typography variant="body2" className="text-[#519A09]">
                      Last Refund
                    </Typography>
                    <Typography variant="body2" className="font-medium text-[#585858]">
                      {refund.lastRefund || "—"}
                    </Typography>
                  </Box>
                  <Box className="flex justify-between">
                    <Typography variant="body2" className="text-[#519A09]">
                      Total Refunded
                    </Typography>
                    <Typography variant="body2" className="font-medium text-[#585858]">
                      ₦{refund.totalRefunded.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  className="mb-3 font-semibold text-[#519A09] sm:mb-4"
                >
                  Company / Organization
                </Typography>
                <Box className="flex justify-between">
                  <Typography variant="body2" className="text-[#519A09]">
                    Company
                  </Typography>
                  <Typography variant="body2" className="font-medium text-[#585858]">
                    {form.company || "—"}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box className="mt-6 flex items-center justify-end gap-3">
              <Button
                onClick={handleClose}
                variant="outlined"
                className="rounded-xl border-[#E8E8E8] px-4 py-2 text-sm font-normal text-[#585858] normal-case hover:bg-[#FAFAFA]"
              >
                Close
              </Button>
              <Button
                onClick={handleSendEmail}
                disabled={sendingEmail}
                variant="outlined"
                className="rounded-xl border-[#519A09] px-4 py-2 text-sm font-normal text-[#519A09] normal-case hover:bg-[#F2FFF3] disabled:opacity-50"
              >
                {sendingEmail ? "Sending..." : "Send email"}
              </Button>
              <Button
                onClick={handleDelete}
                variant="contained"
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-normal text-white normal-case shadow-none hover:bg-red-700"
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}