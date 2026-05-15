"use client";

import toast from "react-hot-toast";
import { cn } from "@/src/lib/utils";
import { deleteCustomer } from "@/src/lib/api";
import { useCustomerStore, type Customer } from "@/src/store/useCustomerStore";

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

  const handleDeleteCustomer = (customerId: string) => {
    void (async () => {
      try {
        await deleteCustomer(customerId);
        onCustomerDeleted?.(customerId);
        toast.success(`Deleted customer ${customerId}`);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to delete customer",
        );
      }
    })();
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-lg overflow-hidden w-full min-w-0">
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#E8E8E8]">
        <h2 className="text-base sm:text-lg font-semibold text-[#1A1A1A]">
          All Customers
        </h2>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-175">
          <thead>
            <tr className="h-12 sm:h-14 bg-[#FAFAFA]">
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 text-xs sm:text-sm">
                Customer ID
              </th>
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 text-xs sm:text-sm">
                Name
              </th>
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 text-xs sm:text-sm">
                Phone No
              </th>
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 text-xs sm:text-sm">
                QTY
              </th>
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 text-xs sm:text-sm">
                Total Spend
              </th>
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 text-xs sm:text-sm">
                Status
              </th>
              <th className="text-[#519A09] font-medium text-left pl-4 sm:pl-6 pr-4 sm:pr-6 text-xs sm:text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={cn(
                    "h-12 sm:h-14 border-b border-[#E8E8E8] transition-colors hover:bg-[#FAFAFA]",
                    index === customers.length - 1 && "border-b-0",
                  )}
                >
                  <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                    {customer.id}
                  </td>
                  <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                    {customer.name}
                  </td>
                  <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                    {customer.phone}
                  </td>
                  <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                    {customer.qty}
                  </td>
                  <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                    {formatCurrency(customer.totalSpend)}
                  </td>
                  <td className="pl-4 sm:pl-6 text-xs sm:text-sm">
                    <span
                      className={cn(
                        "font-medium",
                        customer.status === "active"
                          ? "text-[#519A09]"
                          : "text-[#C9A227]",
                      )}
                    >
                      {customer.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="pl-4 sm:pl-6 pr-4 sm:pr-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button
                        onClick={() => handleViewCustomer(customer)}
                        className="text-[#585858] hover:text-[#519A09] transition-colors"
                        aria-label={`View ${customer.name}`}
                      >
                        <OpenInNewIcon />
                      </button>
                      <button
                        onClick={() => handleDeleteCustomer(customer.id)}
                        className="text-[#585858] hover:text-[#FF392B] transition-colors"
                        aria-label={`Delete ${customer.name}`}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="h-12 sm:h-14 border-b border-[#E8E8E8]">
                <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                  N/A
                </td>
                <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                  N/A
                </td>
                <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                  N/A
                </td>
                <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                  0
                </td>
                <td className="text-[#585858] pl-4 sm:pl-6 text-xs sm:text-sm">
                  ₦0
                </td>
                <td className="pl-4 sm:pl-6 text-xs sm:text-sm text-[#585858]">
                  N/A
                </td>
                <td className="pl-4 sm:pl-6 pr-4 sm:pr-6 text-xs sm:text-sm text-[#585858]">
                  N/A
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
