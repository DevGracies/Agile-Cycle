"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { getAllAccessories, getAccessory } from "../services/accessory.service";
import { Accessories } from "../types/product";

type LoadingState = {
  accessory: boolean;
  accessories: boolean;
};

export const useAccessory = (
  accessoryId?: string,
) => {

  const [accessory, setAccessory] = useState<Accessories | null>(null);
  const [loading, setLoading] = useState<LoadingState>({
    accessory: true,
    accessories: true,
  });

  const [error, setError] = useState<string | null>(null);
  const [accessories, setAccessories] = useState<Accessories[]>([]);

  const setLoadingState = useCallback(
    (key: keyof LoadingState, value: boolean) => {
      setLoading((prev) => ({ ...prev, [key]: value }));
    }, []);

    const fetchAccessories = useCallback(async () => {
    try {
      setLoadingState("accessories", true);
      const data = await getAllAccessories();
      console.log(data);
      setAccessories(data?.accessories);
    } catch {
      setError("Failed to fetch accessories",);
      toast.error("Failed to load accessory");
    } finally {
      setLoadingState("accessories", false);
    }
  }, []);
  useEffect(() => {
    fetchAccessories();
  }, []);
  
  const fetchAccessory = useCallback(async () => {
    try {
      setLoadingState("accessory", true);
      if (!accessoryId) return;
      const data = await getAccessory(accessoryId);
      console.log("Accessory details", data)
      setAccessory(data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load accessory");
      toast.error("Failed to load accessory");
    } finally {
      setLoadingState("accessory", false);
    }
  }, [accessoryId, setLoadingState]);

  useEffect(() => {
    if (!accessoryId) return;
    fetchAccessory();
  }, [fetchAccessory, accessoryId]);


  const discountPercentage = useMemo(() => {
    if (
      !accessory?.discountPrice ||
      accessory.discountPrice <= accessory.price
    ) {
      return 0;
    }

    return Math.round(
      ((accessory.price -
        accessory.discountPrice) /
        accessory.discountPrice) *
      100,
    );
  }, [accessory]);

  return {
    accessory,
    accessories,
    loading,
    error,
    fetchAccessory,
    fetchAccessories,
    discountPercentage
  };
};