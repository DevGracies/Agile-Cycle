"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { clubService } from "../services/club.service";

import {
    ClubLog,
    ClubMetrics,
    ClubTabKey,
    ClubToggleState,
} from "../types/club";

import { defaultClubSettings } from "../mocks/index.mock";

import {
    isLastWeek,
    isThisWeek,
} from "../utils/blog";

export const useClub = () => {
    const [loading, setLoading] =
        useState(true);

    const [enabled, setEnabled] =
        useState<ClubToggleState>(
            defaultClubSettings,
        );

    const [logs, setLogs] = useState<
        ClubLog[]
    >([]);

    const [metrics, setMetrics] =
        useState<ClubMetrics | null>(
            null,
        );

    const [selectedTab, setSelectedTab] =
        useState<ClubTabKey>(
            "this-week",
        );

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openModal, setOpenModal] =
        useState(false);

    const [selectedLog, setSelectedLog] =
        useState<ClubLog | null>(null);

    const [
        isFetchingLogDetails,
        setIsFetchingLogDetails,
    ] = useState(false);

    const [modalMode, setModalMode] = useState<
        "create" | "edit"
    >("create");

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedTab]);

    const openCreateModal = () => {
        setSelectedLog(null);
        setModalMode("create");
        setOpenModal(true);
    };

    const openEditModal = async (id: string) => {
        setModalMode("edit");
        await fetchSelectedLogDetails(id);
        setOpenModal(true);
    };

    const itemsPerPage = 10;


    const initializeClubs =
        useCallback(async () => {
            try {
                setLoading(true);

                const [
                    logsData,
                    settingsData,
                    metricsData,
                ] = await Promise.all([
                    clubService.getClubLogs(),
                    clubService.getClubSettings(),
                    clubService.getClubMetrics(),
                ]);

                setLogs(logsData);
                setEnabled(settingsData);
                setMetrics(metricsData);
            } catch (error) {
                console.error(error);

                toast.error(
                    "Failed to load clubs",
                );
            } finally {
                setLoading(false);
            }
        }, []);

    useEffect(() => {
        initializeClubs();
    }, [initializeClubs]);


    const fetchSelectedLogDetails =
        async (id: string) => {
            try {
                setIsFetchingLogDetails(
                    true,
                );

                const club = await clubService.getClubLog(id);

                if (!club) {
                    toast.error("Club not found");
                    return;
                }

                setSelectedLog(club);
            } catch (error) {
                console.error(error);

                toast.error(
                    "Failed to load club",
                );
            } finally {
                setIsFetchingLogDetails(
                    false,
                );
            }
        };

    const toggleClubSetting = async (
        key: keyof ClubToggleState,
    ) => {
        const updatedState: ClubToggleState = {
            Manual: key === "Manual",
            Automatic: key === "Automatic",
        };

        setEnabled(updatedState);
        toast.success(`${key} enabled successfully`)

        try {
            const updated = await clubService.toggleClubSetting(key);
            setEnabled(updated);
        } catch (error) {
            console.error(error);
            initializeClubs();
            toast.error("Unable to update setting");
        }
    };

    const filteredClubs =
        useMemo(() => {
            if (
                selectedTab ===
                "this-week"
            ) {
                return logs.filter((log) =>
                    isThisWeek(log.createdAt),
                );
            }

            return logs.filter((log) =>
                isLastWeek(log.createdAt),
            );
        }, [logs, selectedTab]);


    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredClubs.length /
            itemsPerPage,
        ),
    );

    const paginatedClubLogs =
        useMemo(() => {
            const start =
                (currentPage - 1) *
                itemsPerPage;

            const end =
                start + itemsPerPage;

            return filteredClubs.slice(
                start,
                end,
            );
        }, [
            filteredClubs,
            currentPage,
        ]);

    return {
        loading,

        metrics,

        enabled,
        toggleClubSetting,

        logs,

        selectedTab,
        setSelectedTab,

        currentPage,
        setCurrentPage,

        itemsPerPage,

        filteredClubs,

        totalPages,

        paginatedClubLogs,

        fetchSelectedLogDetails,

        isFetchingLogDetails,

        openModal,
        setOpenModal,

        selectedLog,

        refreshClubs: initializeClubs,
        openCreateModal,
        openEditModal,
        modalMode,
    };
};