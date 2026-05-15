"use client";

import { X, BellRing, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { StatusBadge } from "../../common/Dashboard";
import { PaymentStatus } from "./Transactions";

type PaymentModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLog: {
    transactionId: string;
    orderId: string;
    paymentMethod: string;
    amount: string;
    status: PaymentStatus;
    date: string;
  } | null;
};

const PaymentModal = ({ open, setOpen, selectedLog }: PaymentModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShow(true);
      }, 10);
    } else {
      setShow(false);
    }
  }, [open]);

  if (!open || !selectedLog) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300
      ${
        show
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-0 opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden transition-all duration-300
        ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EEF1EC] px-6 py-5">
          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Payment Details
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Full payment activity information.
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-xl border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-[#F8FAF7] border border-[#EEF1EC] p-5">
              <p className="text-sm text-gray-500 mb-2">Transaction ID</p>

              <h3 className="font-semibold text-[#111827]">
                {selectedLog.transactionId}
              </h3>
            </div>
            <div className="rounded-2xl bg-[#F8FAF7] border border-[#EEF1EC] p-5">
              <p className="text-sm text-gray-500 mb-2">Order ID</p>

              <h3 className="font-semibold text-[#111827]">
                {selectedLog.orderId}
              </h3>
            </div>

            <div className="rounded-2xl bg-[#F8FAF7] border border-[#EEF1EC] p-5">
              <p className="text-sm text-gray-500 mb-2">Status</p>

              <h3 className={`font-semibold`}>
                <StatusBadge status={selectedLog.status} />
              </h3>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F8FAF7] border border-[#EEF1EC] p-5">
            <div className="flex items-center gap-3 mb-3">
              <BellRing className="text-[#52A30D]" size={20} />

              <p className="font-medium text-[#111827]">PaymentMethod</p>
            </div>

            <p className="text-gray-600">{selectedLog.paymentMethod}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            <div className="rounded-2xl bg-[#F8FAF7] border border-[#EEF1EC] p-5">
              <div className="flex items-center gap-3 mb-3">
                <CalendarDays className="text-[#52A30D]" size={20} />

                <p className="font-medium text-[#111827]">Date</p>
              </div>

              <p className="text-gray-600">{selectedLog.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
