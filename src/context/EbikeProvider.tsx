"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getAllEbikes,
  getEbike,
} from "../services/ebike.service";

import {
  Accessories,
  Ebike,
  Enhancement,
} from "../types/product";

import {
  CategoryCount,
  ProductFilters,
} from "../types/ebikes";

interface LoadingState {
  ebike: boolean;
  ebikes: boolean;
}

interface PaginationState {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface EbikeContextType {
  ebike: Ebike | null;

  ebikes: Ebike[];

  loading: LoadingState;

  error: string | null;

  pagination: PaginationState;

  compatibleAccessories: Accessories[];

  compatibleEnhancements: Enhancement[];
  categoryCounts:CategoryCount[];

  fetchEbike: (
    ebikeId: string,
  ) => Promise<void>;

  fetchEbikes: (
    filters?: Partial<ProductFilters>,
  ) => Promise<void>;

  discountPercentage: number;
}

const EbikeContext =
  createContext<EbikeContextType | null>(
    null,
  );

export function EbikeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [ebike, setEbike] =
    useState<Ebike | null>(null);

  const [ebikes, setEbikes] =
    useState<Ebike[]>([]);

  const [
    compatibleAccessories,
    setCompatibleAccessories,
  ] = useState<Accessories[]>([]);

  const [
    compatibleEnhancements,
    setCompatibleEnhancements,
  ] = useState<Enhancement[]>([]);

  const [pagination, setPagination] =
    useState<PaginationState>({
      total: 0,
      page: 1,
      limit: 6,
      totalPages: 1,
    });

  const [loading, setLoading] =
    useState<LoadingState>({
      ebike: true,
      ebikes: true,
    });

  const [error, setError] =
    useState<string | null>(null);
  const [
    categoryCounts,
    setCategoryCounts
  ] = useState<CategoryCount[]>([]);

  const setLoadingState =
    useCallback(
      (
        key: keyof LoadingState,
        value: boolean,
      ) => {
        setLoading((prev) => ({
          ...prev,
          [key]: value,
        }));
      },
      [],
    );

  // Fetch list
  const fetchEbikes =
    useCallback(
      async (filters?: Partial<ProductFilters>) => {
        try {
          setLoadingState(
            "ebikes",
            true,
          );

          setError(null);

          const response =
            await getAllEbikes(
              filters,
            );

          setEbikes(
            response.ebikes,
          );

          setCategoryCounts(
            response.categoryCounts
          );

          setPagination({
            total: response.total,
            page: response.page,
            limit: response.limit,
            totalPages:
              response.totalPages,
          });
        } catch (error) {
          console.error(error);

          setError(
            "Failed to fetch ebikes",
          );
        } finally {
          setLoadingState(
            "ebikes",
            false,
          );
        }
      },
      [setLoadingState],
    );


  // Fetch single product
  const fetchEbike =
    useCallback(async (ebikeId: string) => {
      try {
        setLoadingState(
          "ebike",
          true,
        );

        setEbikes([]);
        setError(null);

        const response =
          await getEbike(
            ebikeId,
          );

        const data =
          response.data;

        setEbike(
          data?.ebike ??
          null,
        );

        setCompatibleAccessories(
          data?.compatibleAccessories ??
          [],
        );

        setCompatibleEnhancements(
          data?.compatibleEnhancements ??
          [],
        );
      } catch (error) {
        console.error(error);

        setError(
          "Failed to load ebike",
        );
      } finally {
        setLoadingState(
          "ebike",
          true,
        );
      }
    },
      [setLoadingState],
    );

    useEffect(() => {
      fetchEbikes()
    }, [fetchEbikes])

  const discountPercentage =
    useMemo(() => {
      if (
        !ebike?.discountPrice ||
        ebike.discountPrice <=
        ebike.price
      ) {
        return 0;
      }

      return Math.round(
        ((ebike.price -
          ebike.discountPrice) /
          ebike.price) *
        100,
      );
    }, [ebike]);

  const value = useMemo(
    () => ({
      ebike,

      ebikes,

      loading,

      error,

      pagination,

      compatibleAccessories,

      compatibleEnhancements,

      fetchEbike,

      fetchEbikes,

      discountPercentage,
      categoryCounts,
    }),
    [
      ebike,
      ebikes,
      loading,
      error,
      pagination,
      compatibleAccessories,
      compatibleEnhancements,
      fetchEbike,
      fetchEbikes,
      discountPercentage,
      categoryCounts
    ],
  );

  return (
    <EbikeContext.Provider
      value={value}
    >
      {children}
    </EbikeContext.Provider>
  );
}

export function useEbike() {
  const context =
    useContext(EbikeContext);

  if (!context) {
    throw new Error(
      "useEbike must be used inside EbikeProvider",
    );
  }

  return context;
}