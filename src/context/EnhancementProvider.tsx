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
import { Filters } from "../types/ebikes";
import { useRouter, useSearchParams } from "next/navigation";

interface LoadingState {
  enhancement: boolean;
  enhancements: boolean;
}

interface EnhancementContextType {
  enhancement: Enhancement | null;
  enhancements: Enhancement[];
  loading: LoadingState;
  error: string | null;
  discountPercentage: number;
  fetchEnhancement: (
    enhancementId: string
  ) => Promise<void>;
  fetchEnhancements: () => Promise<void>;
  applyFilters: (filters: Partial<Filters>) => void;
  filters: Filters;
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
  const [loading, setLoading] = useState<LoadingState>({
    enhancement: true,
    enhancements: true,
  });
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const router = useRouter();

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

  const filters = useMemo<Filters>(() => ({
    total: searchParams.get("total") ? Number(searchParams.get("total")) : undefined,

    page: searchParams.get("page") ? Number(searchParams.get("page")) : undefined,

    limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined,

    totalPages: searchParams.get("totalPages") ? Number(searchParams.get("totalPages")) : undefined,

  }), [searchParams])

  const applyFilters = useCallback(
    (filters: Partial<Filters>) => {
      const params = new URLSearchParams(query);

      Object.entries(filters).forEach(([key, value]) => {
        if (value === undefined || value === "") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      const nextQuery = params.toString();

      if (nextQuery === query) return;

      router.replace(
        nextQuery
          ? `/enhancements?${nextQuery}`
          : "/enhancements",
        { scroll: false }
      );
    },
    [router, query]
  );

  const fetchEnhancements = useCallback(
    async (queryFilters?: Filters) => {
      try {
        setLoadingState(
          "enhancements",
          true,
        );

        setError(null);

        const response =
          await getAllEnhancements(queryFilters);

        setEnhancements(
          response?.enhancements ?? [],
        );


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


  useEffect(() => {
    fetchEnhancements(filters);
  }, [fetchEnhancements, filters]);


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
      fetchEnhancement,
      fetchEnhancements,
      applyFilters,
      filters,
      discountPercentage,
    }),
    [
      enhancement,
      enhancements,
      loading,
      error,
      fetchEnhancement,
      fetchEnhancements,
      applyFilters,
      filters,
      discountPercentage,
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