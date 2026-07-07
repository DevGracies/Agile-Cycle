"use client";

import ProductPage from "@/src/components/shared/product/ProductPage";
import { useEnhancement } from "@/src/hooks/useEnhancement";
import { enhancementDisplay, enhancementFilters } from "@/src/lib/product";
import React from "react";

const EnhancementsPage = () => {
  const {enhancements} = useEnhancement();
  return (
    <div>
      <ProductPage
        filter={enhancementFilters}
        breadcrumb="ENHANCEMENTS"
        products={enhancements}
        display={enhancementDisplay}
      />
    </div>
  );
};

export default EnhancementsPage;
