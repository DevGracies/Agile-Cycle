"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  ChevronRight,
} from "lucide-react";


import Container from "../../layout/Container";

import HomeDisplayBanner, { DisplayType } from "@/src/components/home/HomeDisplayBanner";

import PaginationFooter from "@/src/components/ebikes/main/Pagination";

import RecentlyViewed from "../../ebikes/ebike-details/RecentlyViewed";

import CategorySidebar from "@/src/components/ebikes/main/CategorySidebar";

import EbikeGrid from "@/src/components/ebikes/ebike-details/EbikeGrid";

import AccessoriesGrid from "../../ebikes/ebike-details/AccessoriesGrid";

import EnhancementsGrid from "../../ebikes/ebike-details/EnhancementGrid";


import {
  useEbike,
} from "@/src/context/EbikeProvider";


import {
  useAccessory,
} from "@/src/context/AccessoryProvider";


import {
  useEnhancement,
} from "@/src/context/EnhancementProvider";


import {
  accessoryDisplay,
  ebikesDisplay,
  enhancementDisplay,
} from "@/src/lib/product";
import { ProductType } from "@/src/services/cart.service";
import { ProductFilters } from "@/src/types/ebikes";
import EbikeCardSkeleton from "../../skeleton/EbikeCardSkeleton";


export default function ProductPage() {


  const router =
    useRouter();


  const pathname =
    usePathname();


  const searchParams =
    useSearchParams();


  const [
    mobileOpen,
    setMobileOpen
  ] = useState(false);




  const {
    ebikes,
    fetchEbikes,
    pagination: ebikePagination,
    loading: ebikeLoading,
    categoryCounts: ebikeCategoryCounts,

  } = useEbike();



  const {
    accessories,
    fetchAccessories,
    pagination: accessoryPagination,
    loading: accessoryLoading,
    categoryCounts: accessoryCategoryCounts,

  } = useAccessory();



  const {
    enhancements,
    fetchEnhancements,
    pagination: enhancementPagination,
    loading: enhancementLoading,
    categoryCounts: enhancementCategoryCounts,


  } = useEnhancement();
  // Read filters from URL

  const initialProductType: ProductType = (searchParams.get("productType") as ProductType) ?? "ebikes";

  const filters =
    useMemo<ProductFilters>(() => {


      return {
        productType: initialProductType,

        category:
          searchParams.get("category")
          ??
          "",

        inventoryStatus:
          (
            searchParams.get("inventoryStatus")
            ??
            ""
          ) as ProductFilters["inventoryStatus"],



        minPrice:
          Number(
            searchParams.get("minPrice")
            ??
            0
          ),



        maxPrice:
          Number(
            searchParams.get("maxPrice")
            ??
            5000000
          ),



        page:
          Number(
            searchParams.get("page")
            ??
            1
          ),



        limit:
          Number(
            searchParams.get("limit")
            ??
            10
          ),



      };


    }, [
      initialProductType,
      searchParams
    ]);






  /**
   * Update URL query
   */

  const updateFilters =
    useCallback(
      (
        newFilters: Partial<ProductFilters>
      ) => {


        const params =
          new URLSearchParams(
            searchParams.toString()
          );




        Object.entries(newFilters)
          .forEach(([key, value]) => {


            if (
              value === undefined ||
              value === ""
            ) {

              params.delete(key);

            }

            else {


              params.set(
                key,
                String(value)
              );


            }


          });





        /**
         * Any filter change resets pagination
         */

        if (
          !("page" in newFilters)
        ) {

          params.set(
            "page",
            "1"
          );

        }





        router.replace(
          `${pathname}?${params.toString()}`
        );



      },
      [
        pathname,
        router,
        searchParams
      ]
    );







  /**
   * Fetch products based on selected type
   */

  const loadProducts =
    useCallback(() => {

      if (filters.productType === "ebikes") {

        fetchEbikes(filters);

      }


      if (filters.productType === "accessories") {

        fetchAccessories(filters);

      }


      if (filters.productType === "enhancements") {

        fetchEnhancements(filters);

      }


    }, [
      filters,
      fetchEbikes,
      fetchAccessories,
      fetchEnhancements
    ]);






  useEffect(() => {


    loadProducts();


  }, [
    loadProducts
  ]);






  const clearFilters =
    () => {

      router.replace(
        pathname
      );

    };







  /**
   * Current product state
   */

  const productType: ProductType =
    filters.productType as ProductType;



  const display =
    useMemo(() => {


      switch (productType) {

        case "ebikes":

          return ebikesDisplay;


        case "accessories":

          return accessoryDisplay;


        case "enhancements":

          return enhancementDisplay;


      }


    }, [
      productType
    ]);







  const currentProducts =
    useMemo(() => {

      switch (productType) {

        case "ebikes":
          return ebikes ?? [];

        case "accessories":
          return accessories ?? [];

        case "enhancements":
          return enhancements ?? [];

      }

    }, [
      productType,
      ebikes,
      accessories,
      enhancements
    ]);







  const pagination =
    useMemo(() => {


      switch (productType) {


        case "ebikes":

          return ebikePagination;


        case "accessories":

          return accessoryPagination;


        case "enhancements":

          return enhancementPagination;


      }


    }, [
      productType,
      ebikePagination,
      accessoryPagination,
      enhancementPagination
    ]);
  const loading =
    productType === "ebikes"
      ? ebikeLoading.ebikes

      : productType === "accessories"
        ? accessoryLoading.accessories

        : enhancementLoading.enhancements;

  return (

    <Container
      className="py-24"
    >


      <div
        className="
grid
gap-10
lg:grid-cols-[280px_1fr]
"
      >



        <CategorySidebar

          filters={filters}
          categoryCounts={
            productType === "ebikes"
              ? ebikeCategoryCounts
              : productType === "accessories"
                ? accessoryCategoryCounts
                : enhancementCategoryCounts
          }

          pagination={
            productType === "ebikes"
              ? ebikePagination
              : productType === "accessories"
                ? accessoryPagination
                : enhancementPagination
          }
          onApplyFilters={updateFilters}

          onClearFilters={clearFilters}

          mobileOpen={mobileOpen}

          onCloseMobile={() =>
            setMobileOpen(false)
          }

        />






        <section
          className="
space-y-6
flex-1
p-5
lg:p-8
"
        >



          <HomeDisplayBanner

            display={display as DisplayType}

          />





          <button

            onClick={() =>
              setMobileOpen(true)
            }

            className="
lg:hidden
flex
items-center
gap-2
border
border-gray-200
shadow
rounded-lg
px-4
py-2
text-sm
"

          >

            Filter

            <ChevronRight
              size={16}
            />


          </button>







          <p
            className="
text-sm
text-gray-500
"
          >

            {
              pagination?.total
            }

            {
              pagination?.total === 1
                ?
                " item"
                :
                " items"
            }


          </p>







          {
            loading ? (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <EbikeCardSkeleton key={index} />
                ))}
              </div>


            )
              :

              currentProducts?.length === 0 ? (


                <div
                  className="
py-20
text-center
text-gray-500
"
                >

                  No products found.

                </div>


              )

                :

                <>


                  {
                    productType === "ebikes" && (

                      <EbikeGrid

                        products={ebikes}

                      />

                    )
                  }





                  {
                    productType === "accessories" && (

                      <AccessoriesGrid

                        products={accessories}

                      />

                    )
                  }





                  {
                    productType === "enhancements" && (

                      <EnhancementsGrid

                        products={enhancements}

                      />

                    )
                  }



                </>


          }







          <PaginationFooter

            currentPage={
              pagination?.page
            }

            totalPages={
              pagination?.totalPages
            }

            totalItems={
              pagination?.total
            }

            limit={
              pagination?.limit
            }


            onPageChange={(page) => {

              updateFilters({
                page,
              });

            }}

          />





        </section>


      </div>




      <RecentlyViewed />


    </Container>


  );


}