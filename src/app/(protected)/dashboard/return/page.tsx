"use client";

import { useState } from "react";

import RequestDetailsModal from "@/src/components/dashboard/return/RequestDetailsModal";
import ReturnRefundTable, { ReturnRefundItem } from "@/src/components/dashboard/return/ReturnRefundTable ";

const dummyRefundData: ReturnRefundItem[] = [
  {
    requestId: "RRF-001",
    orderId: "#10231",
    product: "Agile Pro Rider",
    reason: "Brake issue",
    totalSpend: 2400000,
    status: "Pending",
  },
  {
    requestId: "RRF-002",
    orderId: "#10232",
    product: "Agile City Lite",
    reason: "Wrong color delivered",
    totalSpend: 1200000,
    status: "Approved",
  },
  {
    requestId: "RRF-003",
    orderId: "#10233",
    product: "Smart Helmet",
    reason: "Size mismatch",
    totalSpend: 2850000,
    status: "Refunded",
  },
  {
    requestId: "RRF-004",
    orderId: "#10234",
    product: "Fast Charger",
    reason: "Not charging properly",
    totalSpend: 300000,
    status: "Declined",
  },
  {
    requestId: "RRF-005",
    orderId: "#10235",
    product: "Oversize Saddle",
    reason: "Size mismatch",
    totalSpend: 1000000,
    status: "Pending",
  },
];

const OrderPage = () => {
  const [openModal, setOpenModal] =
    useState(false);

  const [selectedRequest, setSelectedRequest] =
    useState<ReturnRefundItem | null>(
      null
    );

  const handleViewRequest = (
    item: ReturnRefundItem
  ) => {
    setSelectedRequest(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRequest(null);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <ReturnRefundTable
        data={dummyRefundData}
        onView={handleViewRequest}
      />

      <RequestDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        requestData={selectedRequest}
      />
    </div>
  );
};

export default OrderPage;