"use client";

import { Box, IconButton } from "@mui/material";
import React, { useMemo, useState } from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Pagination, StatusBadge } from "../../common/Dashboard";
import PaymentModal from "./PaymentModal";

export type PaymentStatus = "Pending" | "Successful" | "Failed";

export interface PaymentItem {
  transactionId: string;
  orderId: string;
  paymentMethod: string;
  amount: string;
  status: PaymentStatus;
  date: string;
}

type PaymentStateType = {
  transactionId: string;
  orderId: string;
  paymentMethod: string;
  amount: string;
  status: PaymentStatus;
  date: string;
} | null;

const tabs = ["All payments", "Successful", "Pending", "Failed"];

const payments: PaymentItem[] = [
  {
    transactionId: "#CUST001",
    orderId: "CUST001",
    paymentMethod: "Card Payment",
    amount: "#2,400,000",
    status: "Successful",
    date: "12 April 2026",
  },
  {
    transactionId: "#CUST002",
    orderId: "CUST002",
    paymentMethod: "Card Payment",
    amount: "#2,400,000",
    status: "Pending",
    date: "12 April 2026",
  },
  {
    transactionId: "#CUST003",
    orderId: "CUST003",
    paymentMethod: "Card Payment",
    amount: "#2,400,000",
    status: "Failed",
    date: "12 April 2026",
  },
];

const Transactions = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedPayment, setSelectedPayment] =
    useState<PaymentStateType>(null);
  const [openModal, setOpenModal] = useState(false);

  const itemsPerPage = 10;

  const filteredPayments = useMemo(() => {
    const currentTab = tabs[selectedTab];

    if (currentTab === "Successful") {
      return payments.filter((item) => item.status === "Successful");
    }
    if (currentTab === "Pending") {
      return payments.filter((item) => item.status === "Pending");
    }
    if (currentTab === "Failed") {
      return payments.filter((item) => item.status === "Failed");
    }
    return payments;
  }, [payments, selectedTab]);

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <Box className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm`}>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[20px] font-semibold text-[#1F1F1F]">
          All payments
        </h2>

        <div className="overflow-x-auto">
          <div className="inline-flex min-w-full rounded-2xl bg-[#01430D14] p-1.5 sm:p-2 gap-1">
            {tabs.map((tab, index) => {
              const isActive = selectedTab === index;

              return (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedTab(index);
                    setCurrentPage(1);
                  }}
                  className={`relative whitespace-nowrap rounded-xl px-4 sm:px-5 lg:px-6 py-3 text-sm sm:text-[15px] font-medium transition-all duration-300
          ${
            isActive
              ? "bg-white text-[#52A30D] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              : "text-[#374151] hover:bg-white/60 hover:text-[#111827]"
          }`}
                >
                  <span className="flex items-center gap-2">
                    {tab}

                    {index === 0 && (
                      <span
                        className={`rounded-full px-2 py-[2px] text-xs font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-[#52A30D] text-white"
                    : "bg-white text-[#52A30D]"
                }`}
                      >
                        {payments.length}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-0">
          <thead>
            <tr className="bg-[#ECEFEC]">
              {[
                "Transaction ID",
                "Order ID",
                "Payment Method",
                "Amount (#)",
                "Status",
                "Date",
                "Action",
              ].map((header, idx) => (
                <th
                  key={header}
                  className={`px-4 py-5 text-left text-[16px] font-semibold text-[#52A30D]
                    ${idx === 0 ? "rounded-l-[14px]" : ""}
                    ${idx === 6 ? "rounded-r-[14px]" : ""}
                  `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedPayments.map((payment) => (
              <tr
                key={payment.transactionId}
                className="border-b border-[#DDE4DB]"
              >
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {payment.transactionId}
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {payment.orderId}
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {payment.paymentMethod}
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {payment.amount}
                </td>
                <td
                  className={`border-b border-[#DDE4DB] px-4 py-4 text-[16px]`}
                >
                  <StatusBadge status={payment.status} />
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {payment.date}
                </td>
                {/* Actions */}
                <td className="border-b border-[#DDE4DB] px-4 py-4">
                  <div className="flex items-center gap-2">
                    <IconButton
                      onClick={() => {
                        setSelectedPayment(payment);
                        setOpenModal(true);
                      }}
                    >
                      <OpenInNewRoundedIcon />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaymentModal
        open={openModal}
        setOpen={setOpenModal}
        selectedLog={selectedPayment}
      />

      {/* Footer */}
      <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div />

        {/* Pagination */}
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />

        {/* Count */}
        <p className="text-[16px] text-[#555]">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, filteredPayments.length)} of{" "}
          {filteredPayments.length}
        </p>
      </div>
    </Box>
  );
};

export default Transactions;
