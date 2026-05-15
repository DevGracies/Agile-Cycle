"use client";

import toast from "react-hot-toast";
import { Box, Typography } from "@mui/material";
import { cn } from "@/src/lib/utils";
import { deleteCustomer } from "@/src/lib/api";
import { useCustomerStore, type Customer } from "@/src/store/useCustomerStore";

// Custom SVG Icons (as in your original code)
const OpenInNewIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const DeleteOutlineIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

interface CustomersTableProps {
  customers: Customer[];
  onCustomerDeleted?: (customerId: string) => void;
  isLoading?: boolean;
}

const formatCurrency = (amount: number) => `₦${amount.toLocaleString()}`;

export function CustomersTable({
  customers,
  onCustomerDeleted,
  isLoading,
}: CustomersTableProps) {
  const { setSelectedCustomer, setIsModalOpen } = useCustomerStore();

  const handleViewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleDeleteCustomer = async (customerId: string) => {
    try {
      await deleteCustomer(customerId);
      onCustomerDeleted?.(customerId);
      toast.success(`Deleted customer ${customerId}`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete customer"
      );
    }
  };

  return (
    <Box className="overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white shadow-sm">
      {/* Header */}
      <Box className="border-b border-[#E8E8E8] px-4 py-4 sm:px-6 sm:py-5">
        <Typography variant="h6" className="font-semibold text-[#111827]">
          All Customers
        </Typography>
      </Box>

      {/* Table */}
      <Box className="w-full overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="h-12 bg-[#FAFAFA] sm:h-14">
              {[
                "Customer ID",
                "Name",
                "Phone No",
                "QTY",
                "Total Spend",
                "Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-left text-xs font-medium text-[#519A09] sm:px-6 sm:py-3 sm:text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={cn(
                    "border-b border-[#E8E8E8] transition-colors hover:bg-[#FAFAFA]",
                    index === customers.length - 1 && "border-b-0"
                  )}
                >
                  <td className="px-4 py-2 text-xs text-[#585858] sm:px-6 sm:py-3 sm:text-sm">
                    {customer.id}
                  </td>
                  <td className="px-4 py-2 text-xs text-[#585858] sm:px-6 sm:py-3 sm:text-sm">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 text-xs text-[#585858] sm:px-6 sm:py-3 sm:text-sm">
                    {customer.phone}
                  </td>
                  <td className="px-4 py-2 text-xs text-[#585858] sm:px-6 sm:py-3 sm:text-sm">
                    {customer.qty}
                  </td>
                  <td className="px-4 py-2 text-xs text-[#585858] sm:px-6 sm:py-3 sm:text-sm">
                    {formatCurrency(customer.totalSpend)}
                  </td>
                  <td className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm">
                    <Typography
                      variant="body2"
                      className={cn(
                        "font-medium",
                        customer.status === "active"
                          ? "text-[#279F51]"
                          : "text-[#FFA000]"
                      )}
                    >
                      {customer.status === "active" ? "Active" : "Inactive"}
                    </Typography>
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button
                        onClick={() => handleViewCustomer(customer)}
                        className="text-[#585858] transition-colors hover:text-[#519A09]"
                        aria-label={`View ${customer.name}`}
                      >
                        <OpenInNewIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteCustomer(customer.id)}
                        className="text-[#585858] transition-colors hover:text-[#FF392B]"
                        aria-label={`Delete ${customer.name}`}
                      >
                        <DeleteOutlineIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-[#E8E8E8]">
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-sm text-[#585858]"
                >
                  {isLoading ? "Loading customers..." : "No customers found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}