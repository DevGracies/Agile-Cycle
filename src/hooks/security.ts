"use client"

import { useEffect, useMemo, useState } from "react";
import {
    SecurityActivityLog,
    SecurityConfigurations,
    SecuritySettingsState,
} from "@/src/types";
import { securityService } from "@/src/services/security.service";
import toast from "react-hot-toast";
import { defaultSecuritySettings, securityTabs } from "../mocks/index.mock";

export const useSecurity = () => {
    const [enabled, setEnabled] = useState<SecuritySettingsState>(
        defaultSecuritySettings,
    );
    const [configurations, setConfigurations] = useState<SecurityConfigurations>({
        passwordLength: 8,
        methodSupported: "Email",
        loginAttempts: 3,
        timeDuration: 15,
    });

    const [selectedTab, setSelectedTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [logs, setLogs] = useState<SecurityActivityLog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedLog, setSelectedLog] = useState<SecurityActivityLog | null>(
        null,
    );
    const [isFetchingLogDetails, setFetchingLogDetails] =
        useState<boolean>(false);

    useEffect(() => {
        const initializeSecurityPage = async () => {
            try {
                setLoading(true);

                const [logsData, settingsData, configurationsData] = await Promise.all([
                    securityService.getActivityLogs(),
                    securityService.getSecuritySettings(),
                    securityService.getConfigurations(),
                ]);

                setLogs(logsData);
                setEnabled(settingsData);
                setConfigurations(configurationsData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        initializeSecurityPage();
    }, []);

    const fetchSelectedLogDetails = async (id: string) => {
        try {
            setFetchingLogDetails(true);

            const data = await securityService.getActivityLog(id);

            if (!data) return;

            setSelectedLog(data);
            setOpenModal(true);
        } catch (error) {
            console.error(error);
        } finally {
            setFetchingLogDetails(false);
        }
    };

    const handleConfigurationUpdate = async<K extends keyof SecurityConfigurations>(
        key: K,
        value: SecurityConfigurations[K]
    ) => {
        // Optimistic update
        setConfigurations((prev) => ({
            ...prev,
            [key]: value,
        }));

        try {
            const updatedConfigurations =
                await securityService.updateConfigurations(key, value);

            setConfigurations(updatedConfigurations);
            toast.success(`${key} updated successfully`);
        } catch (error) {
            toast.error("Failed to update configuration");
            setConfigurations((prev: SecurityConfigurations | null) => ({
                ...prev!,
                [key]: value,
            }));
            toast.error(`Failed to update ${key}`);
            console.error(error);
        }
    };

    const handleToggleSetting = async (key: keyof SecuritySettingsState) => {
        const previousValue = enabled[key];
        const nextValue = !previousValue;

        // Optimistic update
        setEnabled((prev) => ({
            ...prev,
            [key]: nextValue,
        }));

        try {
            const updatedSettings = await securityService.updateSecuritySetting(
                key,
                nextValue,
            );

            setEnabled(updatedSettings);
            toast.success(`${key} ${nextValue ? "enabled" : "disabled"} successfully`);
        } catch (error) {
            // Rollback
            setEnabled((prev) => ({
                ...prev,
                [key]: previousValue,
            }));
            toast.error(`Failed to update ${key}`);
            console.error(error);
        }
    };

    const itemsPerPage = 10;

    const filteredActivities = useMemo(() => {
        const currentTab = securityTabs[selectedTab];

        if (currentTab.key === "all") {
            return logs;
        }

        return logs.filter((log) => log.status === currentTab.key);
    }, [logs, selectedTab]);

    const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);

    const paginatedActivityLogs = filteredActivities.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    return {
        configurations,
        handleConfigurationUpdate,
        enabled,
        handleToggleSetting,
        selectedTab,
        setSelectedTab,
        currentPage,
        setCurrentPage,
        logs,
        loading,
        paginatedActivityLogs,
        fetchSelectedLogDetails,
        isFetchingLogDetails,
        openModal,
        setOpenModal,
        selectedLog,
        totalPages,
        itemsPerPage,
        filteredActivities,
    }
}