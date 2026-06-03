import { apiRequest } from "./api.service";
import {
  defaultSecuritySettings,
  securityActivityLogs,
} from "../mocks/index.mock";

import {
  SecurityActivityLog,
  SecurityConfigurations,
  SecuritySettingsState,
  SecurityStatus,
} from "../types/security";

const USE_MOCK = true;

const logsDb: SecurityActivityLog[] = structuredClone(securityActivityLogs);

let settingsDb: SecuritySettingsState =
  structuredClone(defaultSecuritySettings);

let configurationsDb: SecurityConfigurations =
  structuredClone({
    passwordLength: 8,
    methodSupported: "Email",
    loginAttempts: 3,
    timeDuration: 15,
  });

export const securityService = {

  getActivityLogs(): Promise<SecurityActivityLog[]> {
    return apiRequest<SecurityActivityLog[]>({
      endpoint: "/security/logs",
      mockData: logsDb,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  getActivityLog(id: string): Promise<SecurityActivityLog | null> {
    const log = logsDb.find((l) => l.id === id) ?? null;

    return apiRequest<SecurityActivityLog | null>({
      endpoint: `/security/logs/${id}`,
      mockData: log,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  getActivityLogsByStatus(
    status?: SecurityStatus,
  ): Promise<SecurityActivityLog[]> {
    const filtered = status
      ? logsDb.filter((log) => log.status === status)
      : logsDb;

    return apiRequest<SecurityActivityLog[]>({
      endpoint: status
        ? `/security/logs?status=${status}`
        : "/security/logs",
      mockData: filtered,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  getSecuritySettings(): Promise<SecuritySettingsState> {
    return apiRequest<SecuritySettingsState>({
      endpoint: "/security/settings",
      mockData: settingsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  updateSecuritySetting(
    key: keyof SecuritySettingsState,
    value: boolean,
  ): Promise<SecuritySettingsState> {
    settingsDb = {
      ...settingsDb,
      [key]: value,
    };

    return apiRequest<SecuritySettingsState>({
      endpoint: "/security/settings",
      method: "PATCH",
      body: {
        key,
        value,
      },
      mockData: settingsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  getConfigurations(): Promise<SecurityConfigurations> {
    return apiRequest<SecurityConfigurations>({
      endpoint: "/security/configurations",
      mockData: configurationsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  updateConfigurations<K extends keyof SecurityConfigurations>(
    key: K,
    value: SecurityConfigurations[K],
  ): Promise<SecurityConfigurations> {
    configurationsDb = {
      ...configurationsDb,
      [key]: value,
    };

    return apiRequest<SecurityConfigurations>({
      endpoint: "/security/configurations",
      method: "PATCH",
      body: {
        key,
        value,
      },
      mockData: configurationsDb,
      useMock: USE_MOCK,
      delay: 200,
    });
  },
};