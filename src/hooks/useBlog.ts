"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { blogService } from "../services/blog.service";

import {
    BlogLog,
    BlogMetrics,
    BlogTabKey,
    BlogToggleState,
} from "../types/blog";

import { defaultBlogSettings } from "../mocks/index.mock";

import {
    isLastWeek,
    isThisWeek,
} from "../utils/blog";

export const useBlog = () => {
    const [loading, setLoading] =
        useState(true);

    const [enabled, setEnabled] =
        useState<BlogToggleState>(
            defaultBlogSettings,
        );

    const [logs, setLogs] = useState<
        BlogLog[]
    >([]);

    const [metrics, setMetrics] =
        useState<BlogMetrics | null>(
            null,
        );

    const [selectedTab, setSelectedTab] =
        useState<BlogTabKey>(
            "this-week",
        );

    const [currentPage, setCurrentPage] =
        useState(1);

    const [openModal, setOpenModal] =
        useState(false);

    const [selectedLog, setSelectedLog] =
        useState<BlogLog | null>(null);

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


    const initializeBlogs =
        useCallback(async () => {
            try {
                setLoading(true);

                const [
                    logsData,
                    settingsData,
                    metricsData,
                ] = await Promise.all([
                    blogService.getBlogLogs(),
                    blogService.getBlogSettings(),
                    blogService.getBlogMetrics(),
                ]);

                setLogs(logsData);
                setEnabled(settingsData);
                setMetrics(metricsData);
            } catch (error) {
                console.error(error);

                toast.error(
                    "Failed to load blogs",
                );
            } finally {
                setLoading(false);
            }
        }, []);

    useEffect(() => {
        initializeBlogs();
    }, [initializeBlogs]);


    const fetchSelectedLogDetails =
        async (id: string) => {
            try {
                setIsFetchingLogDetails(
                    true,
                );

                const blog = await blogService.getBlogLog(id);

                if (!blog) {
                    toast.error("Blog not found");
                    return;
                }

                setSelectedLog(blog);
            } catch (error) {
                console.error(error);

                toast.error(
                    "Failed to load blog",
                );
            } finally {
                setIsFetchingLogDetails(
                    false,
                );
            }
        };

    const toggleBlogSetting = async (
        key: keyof BlogToggleState,
    ) => {
        const updatedState: BlogToggleState = {
            Manual: key === "Manual",
            Automatic: key === "Automatic",
        };

        setEnabled(updatedState);
        toast.success(`${key} enabled successfully`)

        try {
            const updated = await blogService.toggleBlogSetting(key);
            setEnabled(updated);
        } catch (error) {
            console.error(error);
            initializeBlogs();
            toast.error("Unable to update setting");
        }
    };

    const filteredBlogs =
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
            filteredBlogs.length /
            itemsPerPage,
        ),
    );

    const paginatedBlogLogs =
        useMemo(() => {
            const start =
                (currentPage - 1) *
                itemsPerPage;

            const end =
                start + itemsPerPage;

            return filteredBlogs.slice(
                start,
                end,
            );
        }, [
            filteredBlogs,
            currentPage,
        ]);

    return {
        loading,

        metrics,

        enabled,
        toggleBlogSetting,

        logs,

        selectedTab,
        setSelectedTab,

        currentPage,
        setCurrentPage,

        itemsPerPage,

        filteredBlogs,

        totalPages,

        paginatedBlogLogs,

        fetchSelectedLogDetails,

        isFetchingLogDetails,

        openModal,
        setOpenModal,

        selectedLog,

        refreshBlogs: initializeBlogs,
        openCreateModal,
        openEditModal,
        modalMode,
    };
};


