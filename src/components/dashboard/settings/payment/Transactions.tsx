"use client";

import { Box, IconButton } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Pagination, StatusBadge } from "../../common/Dashboard";
import PaymentModal from "./PaymentModal";
import Loader from "@/src/components/ui/Loader";
import { usePayment } from "@/src/hooks/payment";

const tabs = ["All payments", "Successful", "Pending", "Failed"];

const Transactions = () => {
  const {
    paymentLoading, 
    selectedTab, 
    setSelectedTab, 
    currentPage, 
    setCurrentPage, 
    payments, 
    paginatedPayments, 
    fetchSeletedPaymentDetails, 
    FetchingPaymentDetails, 
    openModal, 
    setOpenModal, 
    selectedPayment, 
    totalPages, 
    itemsPerPage, 
    filteredPayments } = usePayment();
    
  if (paymentLoading) {
    return (
      <Box
        className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm flex items-center justify-center`}
      >
        <Loader text="Loading Payments..." />
      </Box>
    );
  }

  return (
    <Box className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm`}>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[20px] text-[#1F1F1F]">All payments</h2>

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
                        className={`rounded-full px-2 py-[2px] text-xs transition-all duration-300
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
                  className={`px-4 py-5 text-left text-[#52A30D]
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
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                  {payment.transactionId}
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                  {payment.orderId}
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                  {payment.paymentMethod}
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                  {payment.amount}
                </td>
                <td className={`border-b border-[#DDE4DB] px-4 py-4`}>
                  <StatusBadge status={payment.status} />
                </td>
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                  {payment.date}
                </td>
                {/* Actions */}
                <td className="border-b border-[#DDE4DB] px-4 py-4">
                  <div className="flex items-center gap-2">
                    <IconButton
                      onClick={() =>
                        fetchSeletedPaymentDetails(payment.transactionId)
                      }
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

      {FetchingPaymentDetails ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 space-x-6">
          <Loader text="Loading Payment details..." />
        </div>
      ) : (
        <PaymentModal
          open={openModal}
          setOpen={setOpenModal}
          selectedLog={selectedPayment}
        />
      )}

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
        <p className="text-[#555]">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, filteredPayments.length)} of{" "}
          {filteredPayments.length}
        </p>
      </div>
    </Box>
  );
};

export default Transactions;
