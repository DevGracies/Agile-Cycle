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
import toast from "react-hot-toast";

import {
  getAllEbikes,
  getEbike,
} from "../services/ebike.service";

import {
  Accessories,
  Ebike,
  Enhancement,
} from "../types/product";

interface LoadingState {
  ebike: boolean;
  ebikes: boolean;
}

interface EbikeContextType {
  ebike: Ebike | null;
  ebikes: Ebike[];
  compatibleAccessories: Accessories[];
  compatibleEnhancements: Enhancement[];
  loading: LoadingState;
  error: string | null;
  discountPercentage: number;
  fetchEbike: (ebikeId: string) => Promise<void>;
  fetchEbikes: () => Promise<void>;
}

const EbikeContext =
  createContext<EbikeContextType | null>(null);


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

  const [loading, setLoading] =
    useState<LoadingState>({
      ebike: true,
      ebikes: true,
    });

  const [error, setError] =
    useState<string | null>(null);


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


  const fetchEbikes = useCallback(async () => {
    try {
      setLoadingState("ebikes", true);
      setError(null);

      const response =
        await getAllEbikes();

      setEbikes(
        response?.ebikes ?? [],
      );

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
  }, [setLoadingState]);


  const fetchEbike = useCallback(
    async (ebikeId: string) => {
      try {
        setLoadingState(
          "ebike",
          true,
        );

        setError(null);

        const response = await getEbike(ebikeId);

        const data = response.data;

        setEbike(
          data?.ebike ?? null,
        );

        setCompatibleAccessories(
          data?.compatibleAccessories ?? [],
        );

        setCompatibleEnhancements(
          data?.compatibleEnhancements ?? [],
        );

      } catch (error) {
        console.error(error);

        setError(
          "Failed to load ebike",
        );

      } finally {
        setLoadingState(
          "ebike",
          false,
        );
      }
    },
    [setLoadingState],
  );


  useEffect(() => {
    fetchEbikes();
  }, [fetchEbikes]);


  const discountPercentage =
    useMemo(() => {
      if (
        !ebike?.discountPrice ||
        ebike.discountPrice <= ebike.price
      ) {
        return 0;
      }

      return Math.round(
        (
          (ebike.price -
            ebike.discountPrice) /
          ebike.discountPrice
        ) * 100,
      );
    }, [ebike]);


  const value = useMemo(
    () => ({
      ebike,
      ebikes,
      loading,
      error,
      fetchEbike,
      fetchEbikes,
      discountPercentage,
      compatibleAccessories,
      compatibleEnhancements,
    }),
    [
      ebike,
      ebikes,
      loading,
      error,
      fetchEbike,
      fetchEbikes,
      discountPercentage,
      compatibleAccessories,
      compatibleEnhancements,
    ],
  );


  return (
    <EbikeContext.Provider value={value}>
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