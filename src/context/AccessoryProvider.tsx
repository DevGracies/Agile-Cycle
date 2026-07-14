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
  getAllAccessories,
  getAccessory,
} from "../services/accessory.service";
import { Accessories } from "../types/product";

interface LoadingState {
  accessory: boolean;
  accessories: boolean;
}

interface AccessoryContextType {
  accessory: Accessories | null;
  accessories: Accessories[];
  loading: LoadingState;
  error: string | null;
  discountPercentage: number;
  fetchAccessory: (accessoryId: string) => Promise<void>;
  fetchAccessories: () => Promise<void>;
}

const AccessoryContext =
  createContext<AccessoryContextType | null>(null);

export function AccessoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [accessory, setAccessory] =
    useState<Accessories | null>(null);

  const [accessories, setAccessories] =
    useState<Accessories[]>([]);

  const [loading, setLoading] =
    useState<LoadingState>({
      accessory: true,
      accessories: true,
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

  const fetchAccessories = useCallback(async () => {
    try {
      setLoadingState("accessories", true);
      setError(null);

      const response =
        await getAllAccessories();

      setAccessories(
        response?.accessories ?? [],
      );
    } catch (error) {
      console.error(error);

      setError(
        "Failed to fetch accessories",
      );
    } finally {
      setLoadingState(
        "accessories",
        false,
      );
    }
  }, [setLoadingState]);

  const fetchAccessory = useCallback(
    async (accessoryId: string) => {
      try {
        setLoadingState(
          "accessory",
          true,
        );

        setError(null);

        const response =
          await getAccessory(accessoryId);

        setAccessory(
          response.data ?? null,
        );
      } catch (error) {
        console.error(error);

        setError(
          "Failed to load accessory",
        );

      } finally {
        setLoadingState(
          "accessory",
          false,
        );
      }
    },
    [setLoadingState],
  );

  useEffect(() => {
    fetchAccessories();
  }, [fetchAccessories]);

  const discountPercentage =
    useMemo(() => {
      if (
        !accessory?.discountPrice ||
        accessory.discountPrice <= accessory.price
      ) {
        return 0;
      }

      return Math.round(
        (
          (accessory.price -
            accessory.discountPrice) /
          accessory.discountPrice
        ) * 100,
      );
    }, [accessory]);

  const value = useMemo(
    () => ({
      accessory,
      accessories,
      loading,
      error,
      fetchAccessory,
      fetchAccessories,
      discountPercentage,
    }),
    [
      accessory,
      accessories,
      loading,
      error,
      fetchAccessory,
      fetchAccessories,
      discountPercentage,
    ],
  );

  return (
    <AccessoryContext.Provider value={value}>
      {children}
    </AccessoryContext.Provider>
  );
}

export function useAccessory() {
  const context =
    useContext(AccessoryContext);

  if (!context) {
    throw new Error(
      "useAccessory must be used inside AccessoryProvider",
    );
  }

  return context;
}