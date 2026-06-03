import { API_CONFIG, apiRequest } from "./api.service";

import {
  defaultNotificationSettings,
  notificationLogs,
} from "../mocks/index.mock";

import {
  NotificationLog,
  NotificationStatus,
  NotificationToggleState,
} from "../types/notification";

const logsDb = structuredClone(notificationLogs);

let settingsDb: NotificationToggleState =
  structuredClone(defaultNotificationSettings);

export const notificationsService = {
  getNotificationLogs(): Promise<NotificationLog[]> {
    return apiRequest<NotificationLog[]>({
      endpoint: "/notifications",
      mockData: logsDb,
      useMock: API_CONFIG.useMock,
      delay: 300,
    });
  },

  getNotificationLog(
    id: string,
  ): Promise<NotificationLog | null> {
    return apiRequest<NotificationLog | null>({
      endpoint: `/notifications/${id}`,
      mockData:
        logsDb.find((item) => item.id === id) ?? null,
      useMock: API_CONFIG.useMock,
      delay: 300,
    });
  },

  getNotificationByStatus(
    status?: NotificationStatus,
  ): Promise<NotificationLog[]> {
    return apiRequest<NotificationLog[]>({
      endpoint: status
        ? `/notifications?status=${status}`
        : "/notifications",
      mockData: status
        ? logsDb.filter(
          (item) => item.status === status,
        )
        : logsDb,
      useMock: API_CONFIG.useMock,
      delay: 300,
    });
  },

  getNotificationSettings():
    Promise<NotificationToggleState> {
    return apiRequest<NotificationToggleState>({
      endpoint: "/notification-settings",
      mockData: settingsDb,
      useMock: API_CONFIG.useMock,
      delay: 200,
    });
  },

  toggleNotificationSetting(
    key: keyof NotificationToggleState,
    value: boolean,
  ): Promise<NotificationToggleState> {
    settingsDb = {
      ...settingsDb,
      [key]: value,
    };

    return apiRequest<NotificationToggleState>({
      endpoint: "/notification-settings",
      method: "PATCH",
      body: {
        [key]: value,
      },
      mockData: settingsDb,
      useMock: API_CONFIG.useMock,
      delay: 200,
    });
  },

  updateNotificationStatus(
    id: string,
    status: NotificationStatus,
  ): Promise<NotificationLog | null> {
    const index = logsDb.findIndex(
      (item) => item.id === id,
    );

    if (index === -1) {
      return Promise.resolve(null);
    }

    logsDb[index] = {
      ...logsDb[index],
      status,
    };

    return apiRequest<NotificationLog>({
      endpoint: `/notifications/${id}/status`,
      method: "PATCH",
      body: {
        status,
      },
      mockData: logsDb[index],
      useMock: API_CONFIG.useMock,
      delay: 200,
    });
  },
};