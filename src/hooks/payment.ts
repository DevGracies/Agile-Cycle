"use client"

import { paymentSettingsService } from "@/src/services/payment.service";
import { CurrencyType, Payment, PaymentGateway, PaymentSettingsState } from "@/src/types";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { paymentTabs } from "../constants";


export const usePayment = () => {
    const [settings, setSettings] = useState<PaymentSettingsState | null>(null);
    const [loading, setLoading] = useState(true);
    const [gatewayLoading, setGatewayLoading] = useState<PaymentGateway | null>(
        null,
    );
    const [currencyLoading, setCurrencyLoading] = useState(false);


    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
    const [payments, setPayments] = useState<Payment[]>([]);
    const [paymentLoading, setPaymentLoading] = useState<boolean>(false);
    const [FetchingPaymentDetails, setFetchingPaymentDetails] =
        useState<boolean>(false);

    const gateways: PaymentGateway[] = ["Paystack", "Flutter"];
    const currencies: CurrencyType[] = ["Naira", "USD", "Euro", "Pounds"];

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await paymentSettingsService.getPaymentSettings();
                setSettings(data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch settings");
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    useEffect(() => {
        const fetchPayments = async () => {
          try {
            setPaymentLoading(true);
            const data = await paymentSettingsService.getPayments();
            setPayments(data);
          } catch (error) {
            console.error("Error fetching payments:", error);
          } finally {
            setPaymentLoading(false);
          }
        };
    
        fetchPayments();
      }, []);

    const handleGatewayChange = async (gateway: PaymentGateway) => {
        if (!settings) return;
        const previousGateway = settings.activeGateway;

        // OPTIMISTIC UPDATE
        setSettings((prev) => (prev ? { ...prev, activeGateway: gateway } : prev));
        setGatewayLoading(gateway);

        try {
            const updated = await paymentSettingsService.updateGateway(gateway);
            setSettings(updated);
            toast.success(`${gateway} activated successfully`);
        } catch (error) {
            // ROLLBACK
            console.error(error);
            setSettings((prev) =>
                prev ? { ...prev, activeGateway: previousGateway } : prev,
            );
            toast.error("Failed to update gateway");
        } finally {
            setGatewayLoading(null);
        }
    };


    const handleCurrencyChange = async (currency: CurrencyType) => {
        if (!settings) return;
        const previousCurrency = settings.defaultCurrency;

        // OPTIMISTIC UPDATE
        setSettings((prev) =>
            prev ? { ...prev, defaultCurrency: currency } : prev,
        );
        setCurrencyLoading(true);

        try {
            const updated = await paymentSettingsService.updateCurrency(currency);
            setSettings(updated);
            toast.success("Currency updated successfully");
        } catch (error) {
            // ROLLBACK
            setSettings((prev) =>
                prev ? { ...prev, defaultCurrency: previousCurrency } : prev,
            );
            console.error(error);
            toast.error("Failed to update currency");
        } finally {
            setCurrencyLoading(false);
        }
    };

    const fetchSeletedPaymentDetails = async (id: string) => {
        try {
          setFetchingPaymentDetails(true);
          const data = await paymentSettingsService.getPaymentLog(id);
          setSelectedPayment(data);
          setOpenModal(true);
        } catch (error) {
          console.error(error);
        } finally {
          setFetchingPaymentDetails(false);
        }
      };
    
      const itemsPerPage = 10;
    
      const filteredPayments = useMemo(() => {
        const safePaymentLogs = payments ?? [];
        const currentTab = paymentTabs[selectedTab];
    
        if (currentTab.key === "all") return safePaymentLogs;
    
        return safePaymentLogs.filter((log) => log.status === currentTab.key);
      }, [payments, selectedTab]);
    
      const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
    
      const paginatedPayments = useMemo(() => {
        return filteredPayments.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage,
        );
      }, [filteredPayments, currentPage]);

    return {
        gateways,
        settings,
        gatewayLoading,
        handleGatewayChange,
        loading,
        currencyLoading,
        handleCurrencyChange,
        currencies,
        paymentLoading,
        selectedTab,
        setSelectedTab,
        currentPage,
        setCurrentPage,
        payments,
        paginatedPayments,
        fetchSeletedPaymentDetails,
        FetchingPaymentDetails,
        openModal,
        setOpenModal,
        selectedPayment,
        totalPages,
        itemsPerPage,
        filteredPayments,
    }
}