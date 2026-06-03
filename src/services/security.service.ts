import { delay } from "../lib/utils";
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

const logsDb: SecurityActivityLog[] = [
  ...securityActivityLogs,
];

let settingsDb: SecuritySettingsState = {
  ...defaultSecuritySettings,
};

let configurationsDb: SecurityConfigurations = {
  passwordLength: 8,
  methodSupported: "Email",
  loginAttempts: 3,
  timeDuration: 15,
};

export const securityService = {
  async getActivityLogs(): Promise<
    SecurityActivityLog[]
  > {
    await delay(300);

    return [...logsDb];
  },

  async getActivityLog(
    id: string,
  ): Promise<SecurityActivityLog | null> {
    await delay(300);

    return logsDb.find((log) => log.id === id) ?? null;
  },

  async getActivityLogsByStatus(
    status?: SecurityStatus,
  ): Promise<SecurityActivityLog[]> {
    await delay(300);

    if (!status) {
      return [...logsDb];
    }

    return logsDb.filter(
      (log) => log.status === status,
    );
  },

  async getSecuritySettings(): Promise<SecuritySettingsState> {
    await delay(200);

    return { ...settingsDb };
  },

  async updateSecuritySetting(
    key: keyof SecuritySettingsState,
    value: boolean,
  ): Promise<SecuritySettingsState> {
    await delay(200);

    settingsDb = {
      ...settingsDb,
      [key]: value,
    };

    return { ...settingsDb };
  },

  async getConfigurations(): Promise<SecurityConfigurations> {
    await delay(200);

    return { ...configurationsDb };
  },

  async updateConfigurations<K extends keyof SecurityConfigurations>(
    key: K,
    value: SecurityConfigurations[K]
  ): Promise<SecurityConfigurations> {
    await delay(200);

    configurationsDb = {
      ...configurationsDb,
      [key]: value,
    };

    return { ...configurationsDb };
  },
};