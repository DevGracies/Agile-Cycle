"use client";

import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Box, Typography } from "@mui/material";
import { StatCard } from "@/src/components/dashboard/customers/StatCard";
import { OrdersUpdateChart } from "@/src/components/dashboard/customers/OrdersUpdateChart";
import { CustomersTable } from "@/src/components/dashboard/customers/CustomersTable";
import { Pagination } from "@/src/components/dashboard/customers/Pagination";
import { CustomerProfileModal } from "@/src/components/dashboard/customers/CustomerProfileModal";
import {
  fetchCustomerSection,
  type CustomerSectionResponse,
} from "@/src/lib/api";
import type { Customer } from "@/src/store/useCustomerStore";

const statCardLabels = ["Total Customers", "New Customers", "Visitors"];

export default function CustomersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sectionData, setSectionData] = useState<CustomerSectionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        error instanceof Error ? error.message : "Failed to load customer section"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadCustomerSection(currentPage);
  }, [currentPage, loadCustomerSection]);

  return (
    <Box className="min-h-screen bg-[#F5F5F5] font-sans">
      <Toaster position="top-right" />
      <CustomerProfileModal onDeleted={() => void loadCustomerSection(currentPage)} />

      <Box component="main" className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8">
        {/* Stat Cards */}
        <Box className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-3 sm:gap-6">
          {statCardLabels.map((title, index) => (
            <StatCard
              key={title}
              title={title}
              value={statsToShow[index]?.value ?? 0}
              change={statsToShow[index]?.change ?? "N/A"}
            />
          ))}
        </Box>

        {/* Customer Overview Chart */}
        <Box className="mb-6 sm:mb-8">
          <OrdersUpdateChart overview={overviewToShow} />
        </Box>

        {/* Customers Table */}
        <Box className="mb-0">
          <CustomersTable
            customers={customers}
            isLoading={isLoading}
            onCustomerDeleted={() => void loadCustomerSection(currentPage)}
          />
        </Box>

        {/* Pagination */}
        {sectionData?.pagination && (
          <Box className="rounded-b-lg border border-t-0 border-[#E8E8E8] bg-white">
            <Pagination
              currentPage={currentPage}
              totalPages={sectionData.pagination.totalPages}
              onPageChange={setCurrentPage}
              totalItems={sectionData.pagination.totalItems}
              itemsPerPage={sectionData.pagination.itemsPerPage}
            />
          </Box>
        )}

        {/* Footer */}
        <Box className="mt-6 py-6 text-center sm:mt-8 sm:py-8">
          <Typography variant="body2" className="text-[#717378]">
            © 2026 AgileCycle. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}