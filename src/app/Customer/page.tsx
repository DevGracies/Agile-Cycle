"use client";

import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { StatCard } from "@/src/components/StatCard";
import { OrdersUpdateChart } from "@/src/components/OrdersUpdateChart";
import { CustomersTable } from "@/src/components/CustomersTable";
import { Pagination } from "@/src/components/Pagination";
import { CustomerProfileModal } from "@/src/components/CustomerProfileModal";
import {
  fetchCustomerSection,
  type CustomerSectionResponse,
} from "@/src/lib/api";
import type { Customer } from "@/src/store/useCustomerStore";

const statCardLabels = ["Total Customers", "New Customers", "Visitors"];

// Table shows only headers until the client/back-end supplies `sectionData.customers`.

export default function CustomersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sectionData, setSectionData] =
    useState<CustomerSectionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // No local fallback data — keep labels/headers local and show empty values until backend/client supplies them.
  const customers = sectionData?.customers ?? [];
  const statsToShow = sectionData?.stats ?? [];
  const overviewToShow = sectionData?.overview ?? {
    metrics: [],
    thisWeekData: [],
    lastWeekData: [],
  };

  const loadCustomerSection = useCallback(async (page: number) => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const response = await fetchCustomerSection(page, 10);
      setSectionData(response);
    } catch (error) {
      setSectionData(null);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to load customer section",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadCustomerSection(currentPage);
  }, [currentPage, loadCustomerSection]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Toaster position="top-right" />
      <CustomerProfileModal
        onDeleted={() => void loadCustomerSection(currentPage)}
      />

      {/* Page Content */}
      <main className="p-4 sm:p-6 lg:p-8 max-w-350 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="sr-only">Customer Dashboard</h1>
          <div />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {statCardLabels.map((title, index) => (
            <StatCard
              key={title}
              title={title}
              value={statsToShow[index]?.value ?? 0}
              change={statsToShow[index]?.change ?? "N/A"}
            />
          ))}
        </div>

        {/* Customer Overview Chart */}
        <div className="mb-6 sm:mb-8">
          <OrdersUpdateChart overview={overviewToShow} />
        </div>

        {/* Customers Table */}
        <div className="mb-0">
          <CustomersTable
            customers={customers}
            isLoading={isLoading}
            onCustomerDeleted={() => void loadCustomerSection(currentPage)}
          />
        </div>

        {/* Pagination */}
        <div className="bg-white border border-[#E8E8E8] border-t-0 rounded-b-lg">
          <Pagination
            currentPage={currentPage}
            totalPages={sectionData?.pagination.totalPages ?? 1}
            onPageChange={setCurrentPage}
            totalItems={sectionData?.pagination.totalItems ?? 0}
            itemsPerPage={sectionData?.pagination.itemsPerPage ?? 10}
          />
        </div>

        {/* Footer */}
        <div className="text-center py-6 sm:py-8 mt-4 sm:mt-6">
          <span className="text-xs sm:text-sm text-[#717378]">
            © 2026 AgileCycle. All Rights Reserved.
          </span>
        </div>
      </main>
    </div>
  );
}
