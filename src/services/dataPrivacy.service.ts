import { apiRequest } from "./api.service";
import { dataPrivacySettings } from "../mocks/index.mock";
import { DataPrivacyState } from "../types/dataPrivacy";

const USE_MOCK = true;

let settingsDb: DataPrivacyState = structuredClone(dataPrivacySettings);

export const dataPrivacyService = {
  getSettings(): Promise<DataPrivacyState> {
    return apiRequest<DataPrivacyState>({
      endpoint: "/data-privacy",
      mockData: settingsDb,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  toggleSetting(
    key: keyof DataPrivacyState,
    value: boolean,
  ): Promise<DataPrivacyState> {
    settingsDb = {
      ...settingsDb,
      [key]: value,
    };

    return apiRequest<DataPrivacyState>({
      endpoint: "/data-privacy/settings",
      method: "PATCH",
      body: {
        [key]: value,
      },
      mockData: settingsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  updateBackupFrequency(
    value: string,
  ): Promise<DataPrivacyState> {
    settingsDb = {
      ...settingsDb,
      backupFrequency: value,
    };

    return apiRequest<DataPrivacyState>({
      endpoint: "/data-privacy/backup-frequency",
      method: "PATCH",
      body: {
        backupFrequency: value,
      },
      mockData: settingsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  updateField<K extends keyof DataPrivacyState>(
    key: K,
    value: DataPrivacyState[K],
  ): Promise<DataPrivacyState> {
    settingsDb = {
      ...settingsDb,
      [key]: value,
    };

    return apiRequest<DataPrivacyState>({
      endpoint: "/data-privacy",
      method: "PATCH",
      body: {
        [key]: value,
      },
      mockData: settingsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  runBackup(): Promise<string> {
    return apiRequest<string>({
      endpoint: "/data-privacy/backup",
      method: "POST",
      mockData: "Backup completed",
      useMock: USE_MOCK,
      delay: 800,
    });
  },

  exportAll(): Promise<string> {
    return apiRequest<string>({
      endpoint: "/data-privacy/export-all",
      method: "POST",
      mockData: "Export completed",
      useMock: USE_MOCK,
      delay: 800,
    });
  },

  exportData(module: string): Promise<string> {
    return apiRequest<string>({
      endpoint: `/data-privacy/export/${module}`,
      method: "POST",
      mockData: `Exported data for module ${module} successfully`,
      useMock: USE_MOCK,
      delay: 800,
    });
  },

  restoreFactory(): Promise<{
    message: string;
    settings: DataPrivacyState;
  }> {
    settingsDb = structuredClone(dataPrivacySettings);

    return apiRequest({
      endpoint: "/data-privacy/restore",
      method: "POST",
      mockData: {
        message: "Settings restored to factory defaults",
        settings: settingsDb,
      },
      useMock: USE_MOCK,
      delay: 1000,
    });
  },
};