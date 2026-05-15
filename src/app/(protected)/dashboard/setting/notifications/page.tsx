"use client";

import {
  Pagination,
  StatusBadge,
  ToggleSwitch,
} from "@/src/components/dashboard/common/Dashboard";
import React, { useMemo, useState } from "react";
import { IconButton } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import NotificationLogModal from "@/src/components/dashboard/settings/notification/NotificationModal";

const notificationLogs = [
  {
    id: "#NTF001",
    trigger: "New Order Placed",
    recipient: "Customer",
    status: "Pending",
    date: "12 Apr 2026, 10:15",
  },
  {
    id: "#NTF002",
    trigger: "Payment Received",
    recipient: "Customer",
    status: "Delivered",
    date: "12 Apr 2026, 10:20",
  },
  {
    id: "#NTF003",
    trigger: "Refund Processed",
    recipient: "Customer",
    status: "Failed",
    date: "11 Apr 2026, 16:45",
  },
  {
    id: "#NTF004",
    trigger: "Order Shipped",
    recipient: "Customer",
    status: "Delivered",
    date: "11 Apr 2026, 14:30",
  },
  {
    id: "#NTF005",
    trigger: "System Alert",
    recipient: "Admin",
    status: "Delivered",
    date: "10 Apr 2026, 09:00",
  },
];

type notificationType = {
  label: string;
  key: string;
};

type NotificationStateType = {
    id: string;
    trigger: string;
    recipient: string;
    status: string;
    date: string;
  } | null;

const notificationTypes: notificationType[] = [
  {
    label: "Email Alerts",
    key: "EmailAlerts",
  },
  {
    label: "SMS Alerts",
    key: "SMSAlerts",
  },
  {
    label: "Push Notifications",
    key: "PushNotifications",
  },
];

const triggerEvents: notificationType[] = [
  {
    label: "New Order Placed",
    key: "NewOrderPlaced",
  },
  {
    label: "Payment Received",
    key: "PaymentReceived",
  },
  {
    label: "Refund Processed",
    key: "RefundProcessed",
  },
  {
    label: "System Alerts",
    key: "SystemAlerts",
  },
];

export type NotificationStatus = "Pending" | "Delivered" | "Failed";

const tabs = ["All notifications", "Delivered", "Pending", "Failed"];

const NotificationsPage = () => {
  const [enabled, setEnabled] = useState({
    EmailAlerts: true,
    SMSAlerts: true,
    PushNotifications: false,
    NewOrderPlaced: true,
    PaymentReceived: true,
    RefundProcessed: true,
    SystemAlerts: true,
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedLog, setSelectedLog] = useState<NotificationStateType>(null);

  const itemsPerPage = 10;

  const filteredNotifications = useMemo(() => {
    const currentTab = tabs[selectedTab];

    if (currentTab === "Delivered") {
      return notificationLogs.filter((item) => item.status === "Delivered");
    }
    if (currentTab === "Pending") {
      return notificationLogs.filter((item) => item.status === "Pending");
    }
    if (currentTab === "Failed") {
      return notificationLogs.filter((item) => item.status === "Failed");
    }

    return notificationLogs;
  }, [notificationLogs, selectedTab]);

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);

  const paginatedNotificationLogs = filteredNotifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section>
      {/* NOTIFICATION SETTINGS */}
      <div className="grid grid-cols-1 gap-6">
        {/* Notification Types */}
        <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <h2 className="text-[24px] font-semibold text-[#202020] mb-8">
            Notification Types
          </h2>

          <div className="space-y-6 w-1/2">
            {notificationTypes.map((item) => (
              <div key={item.key} className="grid grid-cols-2 gap-2">
                <p className="text-[#5B5B5B] font-medium">{item.label}</p>

                <ToggleSwitch
                  enabled={enabled[item.key as keyof typeof enabled]}
                  onToggle={() =>
                    setEnabled((prev) => ({
                      ...prev,
                      [item.key]: !prev[item.key as keyof typeof prev],
                    }))
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trigger Events */}
        <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <h2 className="text-[24px] font-semibold text-[#202020] mb-8">
            Trigger Events
          </h2>

          <div className="space-y-6 w-1/2">
            {triggerEvents.map((item) => (
              <div key={item.key} className="grid grid-cols-2 gap-2">
                <p className="text-[#5B5B5B] font-medium">{item.label}</p>

                <ToggleSwitch
                  enabled={enabled[item.key as keyof typeof enabled]}
                  onToggle={() =>
                    setEnabled((prev) => ({
                      ...prev,
                      [item.key]: !prev[item.key as keyof typeof prev],
                    }))
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOTIFICATION LOGS */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between p-6">
          <h2 className="text-[26px] font-semibold text-[#1F1F1F]">
            Notification Logs
          </h2>

          <div className="overflow-x-auto">
            <div className="inline-flex min-w-full rounded-2xl bg-[#01430D14] p-1.5 sm:p-2 gap-1">
              {tabs.map((tab, index) => {
                const isActive = selectedTab === index;

                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setSelectedTab(index);
                      setCurrentPage(1);
                    }}
                    className={`relative whitespace-nowrap rounded-xl px-4 sm:px-5 lg:px-6 py-3 text-sm sm:text-[15px] font-medium transition-all duration-300
          ${
            isActive
              ? "bg-white text-[#52A30D] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              : "text-[#374151] hover:bg-white/60 hover:text-[#111827]"
          }`}
                  >
                    <span className="flex items-center gap-2">
                      {tab}

                      {index === 0 && (
                        <span
                          className={`rounded-full px-2 py-[2px] text-xs font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-[#52A30D] text-white"
                    : "bg-white text-[#52A30D]"
                }`}
                        >
                          {notificationLogs.length}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-0">
            <thead>
              <tr className="bg-[#ECEFEC]">
                {[
                  "Log ID",
                  "Event Trigger",
                  "Recipient type",
                  "Status",
                  "Date",
                  "Action",
                ].map((header, idx) => (
                  <th
                    key={header}
                    className={`px-4 py-5 text-left text-[16px] font-semibold text-[#52A30D]
                    ${idx === 0 ? "rounded-l-[14px]" : ""}
                    ${idx === 6 ? "rounded-r-[14px]" : ""}
                  `}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedNotificationLogs.map((log) => (
                <tr key={log.id} className="border-b border-[#DDE4DB]">
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.id}
                  </td>
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.trigger}
                  </td>
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.recipient}
                  </td>
                  <td
                    className={`border-b border-[#DDE4DB] px-4 py-4 text-[16px]`}
                  >
                    <StatusBadge status={log.status} />
                  </td>
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.date}
                  </td>
                  {/* Actions */}
                  <td className="border-b border-[#DDE4DB] px-4 py-4">
                    <div className="flex items-center gap-2">
                      <IconButton
                        onClick={() => {
                          setSelectedLog(log);
                          setOpenModal(true);
                        }}
                      >
                        <OpenInNewRoundedIcon />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <NotificationLogModal
        open={openModal}
        setOpen={setOpenModal}
        selectedLog={selectedLog}
      />

      {/* Footer */}
      <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div />

        {/* Pagination */}
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />

        {/* Count */}
        <p className="text-[16px] text-[#555]">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, filteredNotifications.length)}{" "}
          of {filteredNotifications.length}
        </p>
      </div>
    </section>
  );
};

export default NotificationsPage;
