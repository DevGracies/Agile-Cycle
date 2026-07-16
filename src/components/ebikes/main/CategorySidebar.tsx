"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import { accessoryFilters, ebikeFilters, enhancementFilters } from "@/src/lib/product";

export interface ProductFilters {
  productType:
  | "ebikes"
  | "accessories"
  | "enhancements";
  category: string;
  inventoryStatus:
  | "in-stock"
  | "out-of-stock"
  minPrice: number;
  maxPrice: number;
}

interface CategorySidebarProps {
  filters: ProductFilters;
  onApplyFilters:
  (filters: ProductFilters) => void;
  onClearFilters: () => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const productTypes = [
  {
    id: "ebikes",
    label: "Electric Bikes",
  },
  {
    id: "accessories",
    label: "Ebike Accessories",
  },
  {
    id: "enhancements",
    label: "Ebike Enhancements",
  },
] as const;

const filterConfigMap = {
  ebikes: ebikeFilters,
  accessories: accessoryFilters,
  enhancements: enhancementFilters,
};

export default function CategorySidebar({
  filters,
  onApplyFilters,
  onClearFilters,
  mobileOpen = false,
  onCloseMobile,
}: CategorySidebarProps) {


  const [draftFilters, setDraftFilters] = useState<ProductFilters>(filters);

  const [openSections, setOpenSections] =
  useState({
      productType: true,
      category: true,
      availability: true,
      price: true,
      more: false,
    });

  useEffect(() => {
    setDraftFilters(filters);
  }, [filters]);
  

  const activeFilterConfig = useMemo(() => {
    return filterConfigMap[
      draftFilters.productType
    ];
  }, [
    draftFilters.productType
  ]);

  function updateFilter(
    updates: Partial<ProductFilters>
  ) {
    setDraftFilters(prev => ({
      ...prev,
      ...updates,
    }));
  }

  function handleProductTypeChange(
    productType: ProductFilters["productType"]
  ) {
    updateFilter({
      productType,
      // reset category when switching products
      category: "all",
    });

  }

  function toggleSection(
    section: keyof typeof openSections
  ) {

    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));

  }

  function formatPrice(
    value: number
  ) {
    return new Intl.NumberFormat(
      "en-NG",
      {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      }
    ).format(value);
  }
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-[320px] bg-white border-r border-gray-200 overflow-y-auto transition-transform lg:static lg:translate-x-0 max-lg:py-20 
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Mobile Header */}
      <div
        className="flex items-center justify-between px-5 py-4 border-b border-gray-300 lg:hidden " >
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl text-secondary">Filters</h2>
        </div>
        <button
          onClick={onCloseMobile}
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-5 space-y-6 " >

        {/* Categories */}
        <FilterSection
          title={filters.productType.toUpperCase()}
          open={openSections.category}
          onToggle={() => toggleSection("category")}
        >
          <div
            className="space-y-3">
            {activeFilterConfig.category.length > 8 ? (
              activeFilterConfig.category.slice(0, 8).map(
                category => (
                  <button
                    key={category.id}
                    onClick={() => updateFilter({ category: category.id })}
                    className={`${draftFilters.category === category.id ? "text-primary" : "text-gray-600"} flex items-center justify-between gap-8 cursor-pointer text-sm`}
                  >

                    {category.name} <ChevronRight size={16} /> {category.count}
                  </button>
                )
              )
            ) : (
              activeFilterConfig.category.map(
                category => (
                  <button
                    key={category.id}
                    onClick={() => updateFilter({ category: category.id })}
                    className={`${draftFilters.category === category.id ? "text-primary" : "text-gray-600"} flex items-center justify-between gap-8 cursor-pointer text-sm`}
                  >

                    {category.name} <ChevronRight size={16} /> {category.count}
                  </button>
                )
              )
            )}
          </div>
        </FilterSection>

        {/* More Categories */}
        {activeFilterConfig.category.length > 8 && (
          <FilterSection
            title="More"
            open={openSections.more}
            onToggle={() => toggleSection("more")}
          >
            <div className="space-y-3">
              {activeFilterConfig.category.slice(8).map(category => (
                <button
                  key={category.id}
                  onClick={() => updateFilter({ category: category.id })}
                  className={`${draftFilters.category === category.id ? "text-primary" : "text-gray-600"} flex items-center justify-between gap-8 cursor-pointer text-sm`}
                >

                  {category.name} <ChevronRight size={16} /> {category.count}
                </button>
              )
              )}
            </div>
          </FilterSection>
        )}

        <h2 className="text-secondary text-xl font-bold">Filters</h2>

        {/* Price */}
        <FilterSection
          title="Price"
          open={
            openSections.price
          }
          onToggle={() =>
            toggleSection(
              "price"
            )
          }
        >
          <div className="space-y-4">
            <div
              className="flex justify-between text-sm text-gray-600 "
            >
              <span>
                {formatPrice(draftFilters.minPrice)}
              </span>
              <span>
                {formatPrice(draftFilters.maxPrice)}
              </span>
            </div>

            <input
              type="range"
              min={activeFilterConfig.minPrice}
              max={activeFilterConfig.maxPrice}
              value={draftFilters.maxPrice}
              onChange={(e) =>
                updateFilter({
                  maxPrice: Number(e.target.value)
                })
              }
              className="w-full accent-secondary" />
          </div>
        </FilterSection>

        <div className="flex gap-3 pt-4">
          <button
            onClick={() =>
              onApplyFilters(draftFilters)
            }
            className="flex-1 bg-secondary text-white rounded-lg py-3 px-14 text-sm font-medium" >
            Apply
          </button>
        </div>

        {/* Availability */}
        <FilterSection
          title="Availability"
          open={openSections.availability}
          onToggle={() =>
            toggleSection("availability")
          }
        >
          <div className="space-y-3">
            {
              activeFilterConfig.inventoryStatus.map(
                option => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      name="availability"
                      checked={
                        draftFilters.inventoryStatus === option.id
                      }
                      onChange={() =>
                        updateFilter({
                          inventoryStatus: option.id as ProductFilters["inventoryStatus"]
                        })
                      }
                      className="accent-primary"
                    />
                    <span>
                      {option.label}
                    </span>
                  </label>
                )
              )
            }
          </div>
        </FilterSection>

        {/* Product Type */}
        <FilterSection
          title="Product Type"
          open={openSections.productType}
          onToggle={() => toggleSection("productType")}
        >
          <div
            className="space-y-3">
            {
              productTypes.map(type => (
                <label
                  key={type.id}
                  className="flex items-center gap-3 cursor-pointer text-sm " >
                  <input
                    type="checkbox"
                    name="productType"
                    checked={
                      draftFilters.productType === type.id
                    }
                    onChange={() =>
                      handleProductTypeChange(type.id)
                    }
                    className="accent-primary"
                  />
                  <span>
                    {type.label}
                  </span>
                </label>
              ))
            }
          </div>
        </FilterSection>

        {/* Actions */}
        <div className="flex gap-3 pt-4" >
          <button
            onClick={() =>
              onClearFilters()
            }
            className="flex-1 border border-gray-300 rounded-lg py-3 text-sm text-secondary font-medium" >
            Clear
          </button>
        </div>


      </div>

    </aside>
  );
}

function FilterSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between mb-4 font-medium text-secondary"
      >
        <span>
          {title}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform${open ? "rotate-180" : ""}`}
        />

      </button>
      {open && children}
    </section>

  );

}