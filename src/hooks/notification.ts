"use client"

import { useEffect, useMemo, useState } from "react";
import { NotificationLog, NotificationToggleState } from "@/src/types/notification";
import {
    defaultNotificationSettings,
    notificationTabs,
} from "@/src/mocks/index.mock";
import { notificationsService } from "@/src/services/notifications.service";
import toast from "react-hot-toast";

export const useNotification = () => {
    const [enabled, setEnabled] = useState<NotificationToggleState>(
        defaultNotificationSettings,
    );
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedLog, setSelectedLog] = useState<NotificationLog | null>(null);
    const [logs, setLogs] = useState<NotificationLog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isFetchingLogDetails, setisFetchingLogDetails] =
        useState<boolean>(false);

    useEffect(() => {
        const initializeNotifications = async () => {
            try {
                setLoading(true);

                const [logsData, settingsData] = await Promise.all([
                    notificationsService.getNotificationLogs(),
                    notificationsService.getNotificationSettings(),
                ]);

                setLogs(logsData);
                setEnabled(settingsData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        initializeNotifications();
    }, []);

    const fetchSelectedLogDetails = async (id: string) => {
        try {
            setisFetchingLogDetails(true);
            const data = await notificationsService.getNotificationLog(id);
            setSelectedLog(data);
            setOpenModal(true);
        } catch (error) {
            console.error(error);
        } finally {
            setisFetchingLogDetails(false);
        }
    };

    const toggleNotificationSetting = async (
        key: keyof NotificationToggleState,
    ) => {
        const previousValue = enabled[key];
        const nextValue = !previousValue;

        console.log(`Toggling ${String(key)} from ${previousValue} to ${nextValue}`);
        // Optimistic update
        setEnabled((prev) => ({
            ...prev,
            [key]: nextValue,
        }));

        try {
            const updatedSettings =
                await notificationsService.toggleNotificationSetting(key, nextValue);
            setEnabled(updatedSettings);
            toast.success(
                `${String(key)} ${nextValue ? "enabled" : "disabled"} successfully`,
            );
        } catch (error) {
            // Rollback if API call fails
            setEnabled((prev) => ({
                ...prev,
                [key]: previousValue,
            }));

            console.error(error);
        }
    };
    const itemsPerPage = 10;

    const filteredNotifications = useMemo(() => {
        const safeLogs = logs ?? [];
        const currentTab = notificationTabs[selectedTab];
        if (currentTab.key === "all") return safeLogs;

        return safeLogs.filter((log) => log.status === currentTab.key);
    }, [logs, selectedTab]);

    const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);

    const paginatedNotificationLogs = useMemo(() => {
        return filteredNotifications.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage,
        );
    }, [filteredNotifications, currentPage]);

    return {
        loading,
        enabled,
        toggleNotificationSetting,
        selectedTab,
        setSelectedTab,
        currentPage,
        setCurrentPage,
        logs,
        paginatedNotificationLogs,
        fetchSelectedLogDetails,
        isFetchingLogDetails,
        openModal,
        setOpenModal,
        selectedLog,
        totalPages,
        itemsPerPage,
        filteredNotifications,
    }
}