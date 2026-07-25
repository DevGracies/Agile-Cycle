"use client";

import { useEffect, useState } from "react";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../ebikes/ebike-details/ProductSectionLayout";
import EnhancementsGrid from "../ebikes/ebike-details/EnhancementGrid";
import { useFeaturedProducts } from "@/src/hooks/useFeaturedProducts";
import CardSkeleton from "../skeleton/CardSkeleton";

const LIMIT = 6;

const EnhancementSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    enhancements,
    pagination,
    fetchFeaturedProducts,
    isLoading,
  } = useFeaturedProducts();


  useEffect(() => {
    fetchFeaturedProducts({
      page: currentPage.toString(),
      limit: LIMIT.toString(),
    });
  }, [currentPage]);


  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: LIMIT }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );


  const renderEmptyState = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: LIMIT }).map((_, index) => (
        <div
          key={index}
          className="h-60 flex items-center justify-center border rounded-xl text-gray-500"
        >
          No products found
        </div>
      ))}
    </div>
  );


  return (
    <Container>
      <ProductSectionLayout
        subtitle="Enhancements & Essentials"
        description="Helmets, smart locks, chargers, panniers, and other premium enhancements to enhance every journey."
        rightContent={
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.enhancements.totalPages}
            setCurrentPage={setCurrentPage}
          />
        }
      >
        {isLoading ? (
          renderSkeletons()
        ) : enhancements.length === 0 ? (
          renderEmptyState()
        ) : (
          <EnhancementsGrid products={enhancements} loading={isLoading} />
        )}

      </ProductSectionLayout>
    </Container>
  );
};

export default EnhancementSection;