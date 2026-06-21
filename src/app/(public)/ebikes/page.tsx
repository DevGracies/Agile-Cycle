"use client";

import ProductPage from "@/src/components/shared/product/ProductPage";
import { useProduct } from "@/src/hooks/useProduct";
import { ebikesDisplay, ebikeFilters } from "@/src/lib/product";
import React from "react";

const EbikesPage = () => {
  const { products } = useProduct();
  return (
    <div>
      <ProductPage
        filter={ebikeFilters}
        breadcrumb="EBIKES"
        products={products}
        display={ebikesDisplay}
      />
    </div>
  );
};

export default EbikesPage;
