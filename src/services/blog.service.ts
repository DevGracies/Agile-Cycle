import {
    blogLogs,
    defaultBlogSettings,
    blogMetrics,
} from "../mocks/index.mock";

import {
    BlogListResponse,
    BlogLog,
    BlogMetrics,
    BlogStatus,
    BlogToggleState,
} from "../types/blog";

import {
    API_CONFIG,
    apiRequest,
} from "./api.service";

let logsDb: BlogLog[] =
    structuredClone(blogLogs);

let settingsDb: BlogToggleState =
    structuredClone(defaultBlogSettings);

export const blogService = {
    // Get all blogs

    async getBlogLogs(): Promise<BlogLog[]> {
        return apiRequest<BlogLog[]>({
            endpoint: "/blogs",
            mockData: logsDb,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Get single blog

    async getBlogLog(
        id: string,
    ): Promise<BlogLog | null> {
        return apiRequest<BlogLog | null>({
            endpoint: `/blogs/${id}`,
            mockData:
                logsDb.find(
                    (blog) => blog.id === id,
                ) ?? null,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Blog Metrics

    async getBlogMetrics(): Promise<BlogMetrics> {
        return apiRequest<BlogMetrics>({
            endpoint: "/blogs/metrics",
            mockData: blogMetrics,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Settings

    async getBlogSettings(): Promise<BlogToggleState> {
        return apiRequest<BlogToggleState>({
            endpoint: "/blogs/settings",
            mockData: settingsDb,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Toggle Settings

    async toggleBlogSetting(
        key: keyof BlogToggleState,
    ): Promise<BlogToggleState> {

        settingsDb = {
            Manual: key === "Manual",
            Automatic: key === "Automatic",
        };

        return apiRequest<BlogToggleState>({
            endpoint: "/blogs/settings",
            method: "PATCH",
            body: settingsDb,
            mockData: settingsDb,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Update Blog Status

    async updateBlogStatus(
        id: string,
        status: BlogStatus,
    ): Promise<BlogLog | null> {
        const blog =
            logsDb.find(
                (item) => item.id === id,
            ) ?? null;

        if (!blog) {
            return null;
        }

        const updatedBlog: BlogLog = {
            ...blog,
            status,
        };

        logsDb = logsDb.map((item) =>
            item.id === id
                ? updatedBlog
                : item,
        );

        return apiRequest<BlogLog>({
            endpoint: `/blogs/${id}/status`,
            method: "PATCH",
            body: {
                status,
            },
            mockData: updatedBlog,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

  //  Create Blog

    async createBlog(
        blog: Omit<BlogLog, "id">,
    ): Promise<BlogLog> {
        const newBlog: BlogLog = {
            ...blog,
            id: crypto.randomUUID(),
        };

        logsDb = [
            newBlog,
            ...logsDb,
        ];

        return apiRequest<BlogLog>({
            endpoint: "/blogs",
            method: "POST",
            body: blog,
            mockData: newBlog,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

   



    // Update Blog

    async updateBlog(
        id: string,
        payload: Partial<BlogLog>,
    ): Promise<BlogLog | null> {
        const existing =
            logsDb.find(
                (blog) => blog.id === id,
            ) ?? null;

        if (!existing) {
            return null;
        }

        const updated: BlogLog = {
            ...existing,
            ...payload,
        };

        logsDb = logsDb.map((blog) =>
            blog.id === id
                ? updated
                : blog,
        );

        return apiRequest<BlogLog>({
            endpoint: `/blogs/${id}`,
            method: "PATCH",
            body: payload,
            mockData: updated,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Delete Blog

    async deleteBlog(
        id: string,
    ): Promise<boolean> {
        logsDb = logsDb.filter(
            (blog) => blog.id !== id,
        );

        await apiRequest({
            endpoint: `/blogs/${id}`,
            method: "DELETE",
            mockData: true,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });

        return true;
    },
};

