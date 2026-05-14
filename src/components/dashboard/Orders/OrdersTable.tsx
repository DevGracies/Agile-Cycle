"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export type OrderStatus =
  | "Pending"
  | "Shipping"
  | "Refund"
  | "Completed";

export interface OrderItem {
  id: number | string;
  productName: string;
  image: string;
  qty: number;
  date: string;
  price: number;
  total: number;
  status: OrderStatus;
}

interface OrdersTableProps {
  title?: string;
  orders: OrderItem[];
  itemsPerPage?: number;
  className?: string;
  onDelete?: (order: OrderItem) => void;
  onOpen?: (order: OrderItem) => void;
}

const statusColors: Record<OrderStatus, string> = {
  Pending: "#FF392B",
  Shipping: "#000000",
  Refund: "#FFA000",
  Completed: "#279F51",
};

const tabs = [
  "All order",
  "Completed",
  "Pending",
  "Canceled",
];

const formatCurrency = (amount: number) => {
  return `₦${amount.toLocaleString()}`;
};

const OrdersTable: React.FC<OrdersTableProps> = ({
  title = "All Orders",
  orders,
  itemsPerPage = 10,
  className = "",
  onDelete,
  onOpen,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    const currentTab = tabs[selectedTab];

    if (currentTab === "Completed") {
      return orders.filter(
        (item) => item.status === "Completed"
      );
    }

    if (currentTab === "Pending") {
      return orders.filter(
        (item) => item.status === "Pending"
      );
    }

    return orders;
  }, [orders, selectedTab]);

  const totalPages = Math.ceil(
    filteredOrders.length / itemsPerPage
  );

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box
      className={`rounded-lg bg-[#F8F9F7] p-6 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Typography
          className="text-[20px] font-semibold text-[#111827]"
        >
          {title}
        </Typography>

        <div className="rounded-[12px] bg-[#01430D33] p-2">
          <Tabs
            value={selectedTab}
            onChange={(_, value) => {
                setSelectedTab(value);
                setCurrentPage(1);
            }}
            sx={{
                "& .MuiTabs-indicator": {
                display: "none",
                },
            }}
            >
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                label={
                  index === 0
                    ? `${tab} (${orders.length})`
                    : tab
                }
                className={`!min-h-[44px] !rounded-[10px] !px-5 !text-[15px] !font-medium !normal-case ${
                  selectedTab === index
                    ? "!bg-white !text-[#52A30D]"
                    : "text-[#111827]"
                }`}
              />
            ))}
          </Tabs>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-0">
          <thead>
            <tr className="bg-[#ECEFEC]">
              {[
                "Products",
                "QTY",
                "Date",
                "Price",
                "Order Total",
                "Status",
                "Actions",
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
            {paginatedOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-[#DDE4DB]"
              >
                {/* Product */}
                <td className="border-b border-[#DDE4DB] px-4 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={order.image}
                      alt={order.productName}
                      className="h-11.5 w-11.5 rounded-[10px] object-cover"
                    />

                    <p className="text-[16px] font-medium text-[#555]">
                      {order.productName}
                    </p>
                  </div>
                </td>

                {/* Qty */}
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  x{order.qty}
                </td>

                {/* Date */}
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {order.date}
                </td>

                {/* Price */}
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {formatCurrency(order.price)}
                </td>

                {/* Total */}
                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                  {formatCurrency(order.total)}
                </td>

                {/* Status */}
                <td
                  className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] font-medium"
                  style={{
                    color: statusColors[order.status],
                  }}
                >
                  {order.status}
                </td>

                {/* Actions */}
                <td className="border-b border-[#DDE4DB] px-4 py-4">
                  <div className="flex items-center gap-2">
                    <IconButton
                      onClick={() => onOpen?.(order)}
                    >
                      <OpenInNewRoundedIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => onDelete?.(order)}
                    >
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div />

        {/* Pagination */}
        <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[#52A30D] text-white"
            >
              <ArrowBackRoundedIcon />
            </button>

          <div className="flex items-center gap-3">
            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <div
                key={index}
                className={`h-1.25 rounded-full transition-all ${
                  currentPage === index + 1
                    ? "w-6 bg-[#0F3D0F]"
                    : "w-3 bg-[#B7C7B0]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[#52A30D] text-white"
          >
            <ArrowForwardRoundedIcon />
          </button>
        </div>

        {/* Count */}
        <Typography className="text-[16px] text-[#555]">
          Showing{" "}
          {(currentPage - 1) * itemsPerPage + 1}
          -
          {Math.min(
            currentPage * itemsPerPage,
            filteredOrders.length
          )}{" "}
          of {filteredOrders.length}
        </Typography>
      </div>
    </Box>
  );
};

export default OrdersTable;