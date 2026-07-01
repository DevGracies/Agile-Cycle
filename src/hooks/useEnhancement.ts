"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Enhancement } from "../types/product";
import { getAllEnhancements, getEnhancement } from "../services/enhancement.service";

type LoadingState = {
  enhancement: boolean;
  enhancements: boolean;
};

export const useEnhancement = (
  enhancementId?: string,
) => {

  const [enhancement, setEnhancement] = useState<Enhancement | null>(null);
  const [loading, setLoading] = useState<LoadingState>({
    enhancement: true,
    enhancements: true,
  });

  const [error, setError] = useState<string | null>(null);
  const [enhancements, setEnhancements] = useState<Enhancement[]>([]);

  const setLoadingState = useCallback(
    (key: keyof LoadingState, value: boolean) => {
      setLoading((prev) => ({ ...prev, [key]: value }));
    }, []);

    const fetchEnhancements = useCallback(async () => {
    try {
      setLoadingState("enhancements", true);
      const data = await getAllEnhancements();
      console.log(data);
      setEnhancements(data?.enhancements);
    } catch {
      setError("Failed to fetch enhancements",);
      toast.error("Failed to load enhancement");
    } finally {
      setLoadingState("enhancements", false);
    }
  }, []);
  useEffect(() => {
    fetchEnhancements();
  }, []);
  
  const fetchEnhancement = useCallback(async () => {
    try {
      setLoadingState("enhancement", true);
      if (!enhancementId) return;
      const data = await getEnhancement(enhancementId);
      console.log("Enhancement details", data)
      setEnhancement(data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load enhancement");
      toast.error("Failed to load enhancement");
    } finally {
      setLoadingState("enhancement", false);
    }
  }, [enhancementId, setLoadingState]);

  useEffect(() => {
    if (!enhancementId) return;
    fetchEnhancement();
  }, [fetchEnhancement, enhancementId]);


  const discountPercentage = useMemo(() => {
    if (
      !enhancement?.discountPrice ||
      enhancement.discountPrice <= enhancement.price
    ) {
      return 0;
    }

    return Math.round(
      ((enhancement.price -
        enhancement.discountPrice) /
        enhancement.discountPrice) *
      100,
    );
  }, [enhancement]);

  return {
    enhancement,
    enhancements,
    loading,
    error,
    fetchEnhancement,
    fetchEnhancements,
    discountPercentage
  };
};