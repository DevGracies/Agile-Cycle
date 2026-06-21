"use client";

import { useState } from "react";
import { SidebarFilters } from "@/src/types/ebikes";
import { ChevronDown, ChevronRight } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";

interface Props {
  filters: SidebarFilters;
}

export default function CategorySidebar({ filters }: Props) {
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    [],
  );
  const [isAvailable, setIsAvailable] = useState(true);
  const [isProductOpen, setIsProductOpen] = useState(true);

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const [priceRange, setPriceRange] = useState({
    min: filters.price.min,
    max: filters.price.max,
  });

  const toggleSelection = (
    value: string,
    selected: string[],
    setter: (value: string[]) => void,
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value],
    );
  };

  const applyFilters = () => {
    console.log({
      priceRange,
      selectedAvailability,
      selectedProducts,
    });
  };

  const clearFilters = () => {
    setPriceRange({
      min: filters.price.min,
      max: filters.price.max,
    });
    setSelectedAvailability([]);
    setSelectedProducts([]);
  };

  return (
    <aside className="sticky top-0 rounded-xl border border-gray-200 bg-white p-3">
      <div className="mb-10">
        <h2 className="mb-6 text-lg font-semibold">{filters.name}</h2>

        <div className="space-y-4">
          {filters.categories.map((category) => (
            <button
              key={category.id}
              className="group flex w-full items-center gap-4 text-left transition hover:text-primary cursor-pointer"
            >
              <span>{category.name}</span>

              <ChevronRight size={12} />
              <span className="text-sm text-gray-400 group-hover:text-primary">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="py-6">
          <h3 className="mb-6 text-lg font-semibold tracking-wider">
            Filters
          </h3>

          <div className="space-y-4">
            {/* PRICE SLIDER */}
            <div className="mb-10">
              <h4 className="mb-4 font-medium">Price</h4>

              <PriceRangeSlider
                min={filters.price.min}
                max={filters.price.max}
                value={priceRange}
                onChange={setPriceRange}
                currencySymbol="₦"
              />
            </div>

            <button
              onClick={applyFilters}
              className="w-1/2 rounded-lg bg-secondary py-3 font-medium text-white hover:bg-secondary/90 cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-6">
            <div className="flex items-center justify-between pr-2">
              <h4 className="font-medium">Availability</h4>

              <button
                onClick={() => setIsAvailable((prev) => !prev)}
                className="transition-transform duration-300"
              >
                <div
                  className={`transform transition-transform duration-300 ${
                    isAvailable ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>
            </div>

            {/* Animated container */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
            ${isAvailable ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
          `}
            >
              <div className="space-y-3">
                {filters.availability.map((item: any) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAvailability.includes(item.id)}
                      onChange={() =>
                        toggleSelection(
                          item.id,
                          selectedAvailability,
                          setSelectedAvailability,
                        )
                      }
                      className="h-4 w-4 accent-primary"
                    />

                    <span className="text-sm">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-6">
            <div className="flex items-center justify-between pr-2">
              <h4 className="font-medium">Product</h4>

              <button
                onClick={() => setIsProductOpen((prev) => !prev)}
                className="transition-transform duration-300"
              >
                <div
                  className={`transform transition-transform duration-300 ${
                    isProductOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
            ${isProductOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
          `}
            >
              <div className="space-y-3">
                {filters.products.map((item: any) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(item.id)}
                      onChange={() =>
                        toggleSelection(
                          item.id,
                          selectedProducts,
                          setSelectedProducts,
                        )
                      }
                      className="h-4 w-4 accent-primary"
                    />

                    <span className="text-sm">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={clearFilters}
          className="text-sm w-1/2 rounded-lg border border-primary py-3 font-medium text-secondary hover:bg-gray-100 cursor-pointer"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
