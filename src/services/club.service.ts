import {
    clubLogs,
    defaultClubSettings,
    clubMetrics,
} from "../mocks/index.mock";

import {
    ClubLog,
    ClubMetrics,
    ClubStatus,
    ClubToggleState,
} from "../types/club";

import {
    API_CONFIG,
    apiRequest,
} from "./api.service";

let logsDb: ClubLog[] =
    structuredClone(clubLogs);

let settingsDb: ClubToggleState =
    structuredClone(defaultClubSettings);

export const clubService = {
    // Get all clubs

    async getClubLogs(): Promise<ClubLog[]> {
        return apiRequest<ClubLog[]>({
            endpoint: "/clubs",
            mockData: logsDb,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Get single club

    async getClubLog(
        id: string,
    ): Promise<ClubLog | null> {
        return apiRequest<ClubLog | null>({
            endpoint: `/clubs/${id}`,
            mockData:
                logsDb.find(
                    (club) => club.id === id,
                ) ?? null,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Club Metrics

    async getClubMetrics(): Promise<ClubMetrics> {
        return apiRequest<ClubMetrics>({
            endpoint: "/clubs/metrics",
            mockData: clubMetrics,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Settings

    async getClubSettings(): Promise<ClubToggleState> {
        return apiRequest<ClubToggleState>({
            endpoint: "/clubs/settings",
            mockData: settingsDb,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Toggle Settings

    async toggleClubSetting(
        key: keyof ClubToggleState,
    ): Promise<ClubToggleState> {

        settingsDb = {
            Manual: key === "Manual",
            Automatic: key === "Automatic",
        };

        return apiRequest<ClubToggleState>({
            endpoint: "/clubs/settings",
            method: "PATCH",
            body: settingsDb,
            mockData: settingsDb,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Update Club Status

    async updateClubStatus(
        id: string,
        status: ClubStatus,
    ): Promise<ClubLog | null> {
        const club =
            logsDb.find(
                (item) => item.id === id,
            ) ?? null;

        if (!club) {
            return null;
        }

        const updatedClub: ClubLog = {
            ...club,
            status,
        };

        logsDb = logsDb.map((item) =>
            item.id === id
                ? updatedClub
                : item,
        );

        return apiRequest<ClubLog>({
            endpoint: `/clubs/${id}/status`,
            method: "PATCH",
            body: {
                status,
            },
            mockData: updatedClub,
            useMock: API_CONFIG.useMock,
            delay: 200,
        });
    },

    // Create Club

    async createClub(
        club: Omit<ClubLog, "id">,
    ): Promise<ClubLog> {
        const newClub: ClubLog = {
            ...club,
            id: crypto.randomUUID(),
        };

        logsDb = [
            newClub,
            ...logsDb,
        ];

        return apiRequest<ClubLog>({
            endpoint: "/clubs",
            method: "POST",
            body: club,
            mockData: newClub,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Update Club

    async updateClub(
        id: string,
        payload: Partial<ClubLog>,
    ): Promise<ClubLog | null> {
        const existing =
            logsDb.find(
                (club) => club.id === id,
            ) ?? null;

        if (!existing) {
            return null;
        }

        const updated: ClubLog = {
            ...existing,
            ...payload,
        };

        logsDb = logsDb.map((club) =>
            club.id === id
                ? updated
                : club,
        );

        return apiRequest<ClubLog>({
            endpoint: `/clubs/${id}`,
            method: "PATCH",
            body: payload,
            mockData: updated,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });
    },

    // Delete Club

    async deleteClub(
        id: string,
    ): Promise<boolean> {
        logsDb = logsDb.filter(
            (club) => club.id !== id,
        );

        await apiRequest({
            endpoint: `/clubs/${id}`,
            method: "DELETE",
            mockData: true,
            useMock: API_CONFIG.useMock,
            delay: 300,
        });

        return true;
    },
};