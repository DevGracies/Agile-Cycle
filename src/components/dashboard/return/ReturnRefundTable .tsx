"use client";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";


import React, { useMemo, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";

export type ReturnRefundStatus =
  | "Pending"
  | "Approved"
  | "Refunded"
  | "Declined";

export interface ReturnRefundItem {
  requestId: string;
  orderId: string;
  product: string;
  reason: string;
  totalSpend: number;
  status: ReturnRefundStatus;
}

interface ReturnRefundTableProps {
  title?: string;
  data: ReturnRefundItem[];
  itemsPerPage?: number;
  className?: string;
  onApprove?: (
    item: ReturnRefundItem
  ) => void;
  onDecline?: (
    item: ReturnRefundItem
  ) => void;
  onView?: (
    item: ReturnRefundItem
  ) => void;
}

const statusColors: Record<
  ReturnRefundStatus,
  string
> = {
  Pending: "#F59E0B",
  Approved: "#65A30D",
  Refunded: "#111111",
  Declined: "#EF4444",
};

const formatCurrency = (
  amount: number
) => {
  return `₦${amount.toLocaleString()}`;
};

const truncateText = (
  text: string,
  limit: number
) => {
  if (text.length <= limit) return text;

  return `${text.slice(0, limit)}...`;
};

const ReturnRefundTable: React.FC<
  ReturnRefundTableProps
> = ({
  title = "Return & Refund",
  data = [],
  itemsPerPage = 10,
  className = "",
  onApprove,
  onDecline,
  onView,
}) => {
  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = Math.ceil(
    data.length / itemsPerPage
  );

  const paginatedData = useMemo(() => {
    return data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [
    currentPage,
    data,
    itemsPerPage,
  ]);

  return (
    <Box
      className={`rounded-lg bg-[#F8F9F7] p-6 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="mb-8">
        <Typography className="!text-[24px] !font-semibold !text-[#111827]">
          {title}
        </Typography>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-0">
          <thead>
            <tr className="bg-[#ECEFEC]">
              {[
                "Request ID",
                "Order ID",
                "Product",
                "Reason for Return",
                "Total Spend",
                "Status",
                "Actions",
              ].map((header, idx) => (
                <th
                  key={header}
                  className={`px-4 py-5 text-left text-[15px] font-semibold text-[#52A30D]
                    ${
                      idx === 0
                        ? "rounded-l-[14px]"
                        : ""
                    }
                    ${
                      idx === 6
                        ? "rounded-r-[14px]"
                        : ""
                    }
                  `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map(
              (item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DDE4DB]"
                >
                  {/* Request ID */}
                  <td className="border-b border-[#DDE4DB] px-4 py-6 text-[15px] text-[#555]">
                    {item.requestId}
                  </td>

                  {/* Order ID */}
                  <td className="border-b border-[#DDE4DB] px-4 py-6 text-[15px] text-[#555]">
                    {item.orderId}
                  </td>

                  {/* Product */}
                  <td className="border-b border-[#DDE4DB] px-4 py-6 text-[15px] text-[#555]">
                    {item.product}
                  </td>

                  {/* Reason */}
                  <td className="border-b border-[#DDE4DB] px-4 py-6 text-[15px] text-[#555]">
                    {truncateText(
                      item.reason,
                      20
                    )}
                  </td>

                  {/* Total Spend */}
                  <td className="border-b border-[#DDE4DB] px-4 py-6 text-[15px] text-[#555]">
                    {formatCurrency(
                      item.totalSpend
                    )}
                  </td>

                  {/* Status */}
                  <td
                    className="border-b border-[#DDE4DB] px-4 py-6 text-[15px] font-medium"
                    style={{
                      color:
                        statusColors[
                          item.status
                        ],
                    }}
                  >
                    {item.status}
                  </td>

                  {/* Actions */}
                  <td className="border-b border-[#DDE4DB] px-4 py-6">
                    <div className="flex items-center gap-3">
                      {/* View */}
                      <IconButton
                        onClick={() =>
                          onView?.(item)
                        }
                      >
                         <OpenInNewRoundedIcon />
                      </IconButton>

                      {/* Approve */}
                      <IconButton
                        onClick={() =>
                          onApprove?.(item)
                        }
                      >
                        <Check
                          size={18}
                          className="text-[#65A30D]"
                        />
                      </IconButton>

                      {/* Decline */}
                      <IconButton
                        onClick={() =>
                          onDecline?.(item)
                        }
                      >
                        <X
                          size={18}
                          className="text-[#EF4444]"
                        />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div />

        {/* Pagination */}
        <div className="flex items-center gap-4">
          {/* Previous */}
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[#52A30D] text-white"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  currentPage ===
                  index + 1
                    ? "w-6 bg-[#0F3D0F]"
                    : "w-3 bg-[#B7C7B0]"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  totalPages
                )
              )
            }
            className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[#52A30D] text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Count */}
        <Typography className="!text-[15px] !text-[#555]">
          Showing{" "}
          {(currentPage - 1) *
            itemsPerPage +
            1}
          -
          {Math.min(
            currentPage *
              itemsPerPage,
            data.length
          )}{" "}
          of {data.length}
        </Typography>
      </div>
    </Box>
  );
};

export default ReturnRefundTable;