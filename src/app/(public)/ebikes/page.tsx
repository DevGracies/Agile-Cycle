"use client";

import ProductPage from "@/src/components/shared/product/ProductPage";
import { useEbike } from "@/src/context/EbikeProvider";
import { ebikesDisplay, ebikeFilters } from "@/src/lib/product";
import React from "react";

const EbikesPage = () => {
  const { ebikes } = useEbike();
  return (
    <div>
      <ProductPage
        filter={ebikeFilters}
        breadcrumb="EBIKES"
        products={ebikes}
        display={ebikesDisplay}
      />
    </div>
  );
};

export default EbikesPage;
