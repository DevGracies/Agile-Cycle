import { delay } from "../lib/utils";
import {
  defaultNotificationSettings,
  notificationLogs,
} from "../mocks/index.mock";

import {
  NotificationLog,
  NotificationStatus,
  NotificationToggleState,
} from "../types";

const logsDb: NotificationLog[] = [...notificationLogs];

let notificationSettingsDb: NotificationToggleState = {
  ...defaultNotificationSettings,
};

export const notificationsService = {
  async getNotificationLogs(): Promise<NotificationLog[]> {
    await delay(300);

    return [...logsDb];
  },

  async getNotificationLog(
    id: string,
  ): Promise<NotificationLog | null> {
    await delay(300);

    return logsDb.find((item) => item.id === id) ?? null;
  },

  async getNotificationByStatus(
    status?: NotificationStatus,
  ): Promise<NotificationLog[]> {
    await delay(300);

    if (!status) {
      return [...logsDb];
    }

    return logsDb.filter((log) => log.status === status);
  },

  async getNotificationSettings(): Promise<NotificationToggleState> {
    await delay(200);

    return { ...notificationSettingsDb };
  },

  async toggleNotificationSetting(
    key: keyof NotificationToggleState,
    value: boolean,
  ): Promise<NotificationToggleState> {
    await delay(200);

    notificationSettingsDb = {
      ...notificationSettingsDb,
      [key]: value,
    };

    return { ...notificationSettingsDb };
  },

  async updateNotificationStatus(
    id: string,
    status: NotificationStatus,
  ): Promise<NotificationLog | null> {
    await delay(200);

    const index = logsDb.findIndex((log) => log.id === id);

    if (index === -1) {
      return null;
    }

    logsDb[index] = {
      ...logsDb[index],
      status,
    };

    return logsDb[index];
  },
};