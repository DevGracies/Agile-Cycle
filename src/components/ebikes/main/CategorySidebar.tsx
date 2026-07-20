"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";

import {
  accessoryFilters,
  ebikeFilters,
  enhancementFilters,
} from "@/src/lib/product";

import PriceRangeSlider from "./PriceRangeSlider";
import { ProductFilters } from "@/src/types/ebikes";
import { ProductType } from "@/src/services/cart.service";



interface CategorySidebarProps {

  filters: ProductFilters;

  categoryCounts: {
    _id: string;
    count: number;
  }[];

  onApplyFilters:
  (filters: ProductFilters) => void;
  pagination: any;

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
  categoryCounts,
  onApplyFilters,
  onClearFilters,
  pagination,
  mobileOpen = false,
  onCloseMobile,
}: CategorySidebarProps) {


  const [
    draftFilters,
    setDraftFilters
  ] = useState<ProductFilters>(filters);



  const [
    openSections,
    setOpenSections
  ] = useState({

    productType: true,

    category: true,

    availability: true,

    price: true,

    more: false,

  });



  useEffect(() => {

    setDraftFilters(filters);

  }, [filters]);



  const getCategoryCount = (
    id: string
  ) => {

    if (id === "") {
      return categoryCounts.reduce((acc, item) => acc + item.count, 0);
    }

    const item =
      categoryCounts.find(
        item => item._id === id
      );

    return item?.count ?? 0;
  };

  const activeFilterConfig =
    useMemo(() => {

      return filterConfigMap[
        draftFilters.productType as keyof typeof filterConfigMap
      ];

    }, [
      draftFilters.productType
    ]);




  const updateFilter = (
    updates: Partial<ProductFilters>
  ) => {

    setDraftFilters((prev: any) => ({

      ...prev,

      ...updates,

    }));

  };



  const handleProductTypeChange = (
    type: ProductFilters["productType"]
  ) => {


    updateFilter({

      productType: type,

      category: "",

    });
  };



  const toggleSection = (
    section: keyof typeof openSections
  ) => {

    setOpenSections(prev => ({

      ...prev,

      [section]: !prev[section],

    }));

  };

  return (

    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="
          fixed
          inset-0
          z-40
          bg-black/40
          lg:hidden
        "
        />
      )}


      <aside
        onClick={(e) => e.stopPropagation()}
        className={`
        fixed
        inset-y-0
        left-0
        z-50
        w-[320px]
        bg-white
        border-r
        border-gray-200
        overflow-y-auto
        transition-transform
        duration-300
        lg:static
        lg:translate-x-0

        ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }
      `}
      >


        <div
          className="
flex items-center justify-between
px-5 py-4
border-b border-gray-200
lg:hidden
"
        >

          <h2 className="
font-bold
text-xl
text-secondary
">
            Filters
          </h2>


          <button
            onClick={onCloseMobile}
          >

            <X size={20} />

          </button>


        </div>



        <div
          className="
p-5
space-y-6
"
        >



          <FilterSection
            title="Product Type"
            open={openSections.productType}
            onToggle={() => toggleSection("productType")}
          >


            <div
              className="
space-y-3
"
            >


              {
                productTypes.map(type => (

                  <label
                    key={type.id}
                    className="
flex items-center gap-3
cursor-pointer
text-sm
"
                  >


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





          <FilterSection
            title={
              draftFilters.productType
                ? (draftFilters.productType.toUpperCase() as ProductType)
                : "Category"
            }
            open={openSections.category}
            onToggle={() => toggleSection("category")}
          >


            <div
              className="
space-y-3
"
            >


              {
                activeFilterConfig.category
                  .slice(0, 8)
                  .map(category => (


                    <button

                      key={category.id}

                      onClick={() =>
                        updateFilter({
                          category: category.id
                        })
                      }

                      className={`
flex
items-center
justify-between
w-full
text-sm

${draftFilters.category === category.id
                          ?
                          "text-primary"
                          :
                          "text-gray-600"
                        }

`}
                    >


                      <span>
                        {category.name}
                      </span>


                      <div className="
flex items-center gap-1
">

                        <ChevronRight size={15} />

                        <span>
                          {getCategoryCount(category.id)}
                        </span>


                      </div>


                    </button>


                  ))


              }


            </div>



          </FilterSection>





          {
            activeFilterConfig.category.length > 8 &&

            <FilterSection

              title="More"

              open={openSections.more}

              onToggle={() => toggleSection("more")}

            >


              <div
                className="
space-y-3
"
              >


                {
                  activeFilterConfig.category
                    .slice(8)
                    .map(category => (


                      <button

                        key={category.id}

                        onClick={() =>
                          updateFilter({
                            category: category.id
                          })
                        }

                        className={`
flex
justify-between
items-center
w-full
text-sm

${draftFilters.category === category.id
                            ?
                            "text-primary"
                            :
                            "text-gray-600"
                          }

`}
                      >


                        <span>
                          {category.name}
                        </span>


                        <span>
                          {getCategoryCount(category.id)}
                        </span>


                      </button>


                    ))

                }



              </div>


            </FilterSection>

          }





          <FilterSection

            title="Price"

            open={openSections.price}

            onToggle={() => toggleSection("price")}

          >


            <PriceRangeSlider

              min={
                activeFilterConfig.minPrice
              }

              max={
                activeFilterConfig.maxPrice
              }

              minValue={
                draftFilters.minPrice ?? activeFilterConfig.minPrice
              }

              maxValue={
                draftFilters.maxPrice ?? activeFilterConfig.maxPrice
              }

              onChange={(values) => {

                updateFilter({

                  minPrice: values.min,

                  maxPrice: values.max,

                });

              }}

            />


          </FilterSection>





          <FilterSection

            title="Availability"

            open={openSections.availability}

            onToggle={() => toggleSection("availability")}

          >


            <div className="space-y-3">


              {
                activeFilterConfig.inventoryStatus.map(option => (


                  <label
                    key={option.id}
                    className="
flex gap-3
items-center
text-sm
cursor-pointer
"
                  >


                    <input

                      type="radio"

                      name="availability"

                      checked={
                        draftFilters.inventoryStatus === option.id
                      }

                      onChange={() =>
                        updateFilter({

                          inventoryStatus:
                            option.id as ProductFilters["inventoryStatus"]

                        })
                      }

                    />


                    <span>
                      {option.label}
                    </span>


                  </label>


                ))

              }



            </div>


          </FilterSection>





          <button

            onClick={() =>
              onApplyFilters(draftFilters)
            }

            className="
w-full
bg-secondary
text-white
rounded-lg
py-3
font-medium
text-sm
"

          >

            Apply Filters

          </button>



          <button

            onClick={onClearFilters}

            className="
w-full
border
border-gray-300
rounded-lg
py-3
text-secondary
font-medium
text-sm
"

          >

            Clear Filters

          </button>



        </div>



      </aside>
    </>


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

        className="
w-full
flex
justify-between
items-center
mb-4
font-medium
text-secondary
"

      >

        <span>
          {title}
        </span>


        <ChevronDown

          size={18}

          className={
            `
transition-transform
${open ? "rotate-180" : ""}
`
          }

        />


      </button>


      {
        open &&
        children
      }


    </section>

  );


}