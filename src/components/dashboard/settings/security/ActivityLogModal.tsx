"use client";

import { X, BellRing, CalendarDays, User2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { StatusBadge } from "../../common/Dashboard";

type ActivityLogModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLog: {
    id: string;
    adminUser: string;
    action: string;
    status: string;
    date: string;
  } | null;
};

const ActivityLogModal = ({
  open,
  setOpen,
  selectedLog,
}: ActivityLogModalProps) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShow(true);
      }, 10);
    } else {
      setShow(false);
    }
  }, [open]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  if (!open || !selectedLog) return null;

  return (
    <div
      onClick={handleOutsideClick}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300
      ${
        show
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-0 opacity-0"
      }`}
    >
      <div
        ref={modalRef}
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
              Activity Details
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Full activity activity information.
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
              <p className="text-sm text-gray-500 mb-2">Log ID</p>

              <h3 className="font-semibold text-[#111827]">{selectedLog.id}</h3>
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

              <p className="font-medium text-[#111827]">Action</p>
            </div>

            <p className="text-gray-600">{selectedLog.action}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-[#F8FAF7] border border-[#EEF1EC] p-5">
              <div className="flex items-center gap-3 mb-3">
                <User2 className="text-[#52A30D]" size={20} />

                <p className="font-medium text-[#111827]">Admin User</p>
              </div>

              <p className="text-gray-600">{selectedLog.adminUser}</p>
            </div>

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

export default ActivityLogModal;
