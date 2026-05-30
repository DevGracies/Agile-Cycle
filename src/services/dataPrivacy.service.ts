import { delay } from "../lib/utils";
import { dataPrivacySettings } from "../mocks/index.mock";
import { DataPrivacyState } from "../types";

let state: DataPrivacyState = { ...dataPrivacySettings };

export const dataPrivacyService = {
    async getSettings(): Promise<DataPrivacyState> {
        await delay(300);
        return { ...state };
    },

    async toggleSetting(
        key: keyof DataPrivacyState,
        value: boolean,
    ): Promise<DataPrivacyState> {
        await delay(200);

        state = {
            ...state,
            [key]: value,
        };

        return { ...state };
    },

    async updateBackupFrequency(value: string) {
        await delay(200);

        state.backupFrequency = value;

        return { ...state };
    },

    async updateField<K extends keyof DataPrivacyState>(
        key: K,
        value: DataPrivacyState[K]
    ): Promise<DataPrivacyState> {
        await delay(200);

        state = {
            ...state,
            [key]: value,
        };

        return { ...state };
    },

    async runBackup() {
        await delay(800);
        return "Backup completed";
    },

    async exportAll() {
        await delay(800);
        return "Export completed";
    },

    async exportData(module: string) {
        await delay(800);
        return `Exported data for module ${module} successfully`;
    },
    async restoreFactory() {
        await delay(1000);

        state = {
            autoBackup: false,
            gdpr: false,
            localRules: false,
            restrictExports: false,
            managerView: false,
            backupFrequency: "weekly",
            exportModule: "orders",
        };

        return {
            message: "Settings restored to factory defaults",
            settings: { ...state }
        };
    },
};