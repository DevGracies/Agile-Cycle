"use client";

import ProductPage from "@/src/components/shared/product/ProductPage";
import { enhancements } from "@/src/lib/data";
import { enhancementDisplay, enhancementFilters } from "@/src/lib/product";
import React from "react";

const EnhancementsPage = () => {
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
