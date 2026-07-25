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
  getAllEnhancements,
  getEnhancement,
} from "../services/enhancement.service";
import { Enhancement } from "../types/product";
import { CategoryCount, ProductFilters } from "../types/ebikes";

interface LoadingState {
  enhancement: boolean;
  enhancements: boolean;
}

interface PaginationState {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface EnhancementContextType {
  enhancement: Enhancement | null;
  enhancements: Enhancement[];
  loading: LoadingState;
  pagination: PaginationState;
  error: string | null;
  discountPercentage: number;
  categoryCounts: CategoryCount[];
  fetchEnhancement: (
    enhancementId: string
  ) => Promise<void>;
  fetchEnhancements: (filters?: Partial<ProductFilters>) => Promise<void>;
}

const EnhancementContext =
  createContext<EnhancementContextType | null>(null);

export function EnhancementProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [enhancement, setEnhancement] = useState<Enhancement | null>(null);

  const [enhancements, setEnhancements] = useState<Enhancement[]>([]);

  const [pagination, setPagination] =
    useState<PaginationState>({
      total: 0,
      page: 1,
      limit: 6,
      totalPages: 1,
    });

  const [loading, setLoading] = useState<LoadingState>({
    enhancement: true,
    enhancements: true,
  });
  const [error, setError] = useState<string | null>(null);

  const [
    categoryCounts,
    setCategoryCounts
  ] = useState<CategoryCount[]>([]);

  const setLoadingState = useCallback(
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

  const fetchEnhancements = useCallback(
    async (filters?: Partial<ProductFilters>) => {
      try {
        setLoadingState(
          "enhancements",
          true,
        );

        setError(null);

        const response =
          await getAllEnhancements(filters);

        setEnhancements(
          response?.enhancements,
        );

        setCategoryCounts(response.categoryCounts)

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
          "Failed to fetch enhancements",
        );

      } finally {
        setLoadingState(
          "enhancements",
          false,
        );
      }
    },
    [setLoadingState],
  );


  const fetchEnhancement = useCallback(
    async (enhancementId: string) => {
      console.log("Fetching enhancement:", enhancementId);
      try {
        setLoadingState(
          "enhancement",
          true,
        );

        setError(null);

        const response =
          await getEnhancement(
            enhancementId,
          );

        setEnhancement(
          response?.data ?? null,
        );

      } catch (error) {
        console.error(error);

        setError(
          "Failed to load enhancement",
        );

      } finally {
        setLoadingState(
          "enhancement",
          false,
        );
      }
    },
    [setLoadingState],
  );


  const discountPercentage =
    useMemo(() => {
      if (
        !enhancement?.discountPrice ||
        enhancement.discountPrice <= enhancement.price
      ) {
        return 0;
      }

      return Math.round(
        (
          (enhancement.price -
            enhancement.discountPrice) /
          enhancement.discountPrice
        ) * 100,
      );
    }, [enhancement]);


  const value = useMemo(
    () => ({
      enhancement,
      enhancements,
      loading,
      error,
      pagination,
      fetchEnhancement,
      fetchEnhancements,
      discountPercentage,
      categoryCounts,
    }),
    [
      enhancement,
      enhancements,
      loading,
      error,
      pagination,
      fetchEnhancement,
      fetchEnhancements,
      discountPercentage,
      categoryCounts
    ],
  );


  return (
    <EnhancementContext.Provider value={value}>
      {children}
    </EnhancementContext.Provider>
  );
}


export function useEnhancement() {
  const context =
    useContext(EnhancementContext);

  if (!context) {
    throw new Error(
      "useEnhancement must be used inside EnhancementProvider",
    );
  }

  return context;
}