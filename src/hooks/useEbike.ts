"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { getAllEbikes, getEbike } from "../services/ebike.service";
import { Accessories, Ebike, Enhancement } from "../types/product";

type LoadingState = {
  ebike: boolean;
  ebikes: boolean;
};

export const useEbike = (
  ebikeId?: string,
) => {

  const [ebike, setEbike] = useState<Ebike | null>(null);
  const [loading, setLoading] = useState<LoadingState>({
    ebike: true,
    ebikes: true,
  });

  const [error, setError] = useState<string | null>(null);
  const [ebikes, setEbikes] = useState<Ebike[]>([]);
  const [compatibleAccessories, setCompatibleAccessories] = useState<Accessories[]>([]);
  const [compatibleEnhancements, setCompatibleEnhancements] = useState<Enhancement[]>([]);

  const setLoadingState = useCallback(
    (key: keyof LoadingState, value: boolean) => {
      setLoading((prev) => ({ ...prev, [key]: value }));
    }, []);

    const fetchEbikes = useCallback(async () => {
    try {
      setLoadingState("ebikes", true);
      const data = await getAllEbikes();
      // console.log(data);
      setEbikes(data?.ebikes);
    } catch {
      setError("Failed to fetch ebikes",);
      toast.error("Failed to load ebike");
    } finally {
      setLoadingState("ebikes", false);
    }
  }, []);
  useEffect(() => {
    fetchEbikes();
  }, []);
  
  const fetchEbike = useCallback(async () => {
    try {
      setLoadingState("ebike", true);
      if (!ebikeId) return;
      const res = await getEbike(ebikeId);
      const data = res.data;
      console.log("Ebike details", res)
      setEbike(data.ebike);
      setCompatibleAccessories(data.compatibleAccessories);
      setCompatibleEnhancements(data.compatibleEnhancements);
    } catch (err) {
      console.error(err);
      setError("Failed to load ebike");
      toast.error("Failed to load ebike");
    } finally {
      setLoadingState("ebike", false);
    }
  }, [ebikeId, setLoadingState]);

  useEffect(() => {
    if (!ebikeId) return;
    fetchEbike();
  }, [fetchEbike, ebikeId]);


  const discountPercentage = useMemo(() => {
    if (
      !ebike?.discountPrice ||
      ebike.discountPrice <= ebike.price
    ) {
      return 0;
    }

    return Math.round(
      ((ebike.price -
        ebike.discountPrice) /
        ebike.discountPrice) *
      100,
    );
  }, [ebike]);

  return {
    ebike,
    ebikes,
    loading,
    error,
    fetchEbike,
    fetchEbikes,
    discountPercentage,
    compatibleAccessories,
    compatibleEnhancements,
  };
};