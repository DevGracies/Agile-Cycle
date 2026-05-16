"use client";

import {
  Pagination,
  StatusBadge,
  ToggleSwitch,
} from "@/src/components/dashboard/common/Dashboard";
import ActivityLogModal from "@/src/components/dashboard/settings/security/ActivityLogModal";
import React, { useMemo, useState } from "react";
import { IconButton } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const activityLogs = [
  {
    id: "#ACT001",
    adminUser: "John Okon",
    action: "Logged in",
    status: "Pending",
    date: "12 Apr 2026, 10:15",
  },
  {
    id: "#ACT002",
    adminUser: "Mary Effiong",
    action: "Changed password policy",
    status: "Delivered",
    date: "12 Apr 2026, 10:20",
  },
  {
    id: "#ACT003",
    adminUser: "David Udo",
    action: "Failed login attempt",
    status: "Failed",
    date: "11 Apr 2026, 16:45",
  },
  {
    id: "#ACT004",
    adminUser: "Grace Akpon",
    action: "Enabled 2FA",
    status: "Delivered",
    date: "11 Apr 2026, 14:30",
  },
  {
    id: "#ACT005",
    adminUser: "Admin Team",
    action: "Viewed activity logs",
    status: "Delivered",
    date: "10 Apr 2026, 09:00",
  },
];

type SecurityType = {
  label: string;
  key: string;
};

type SecurityStateType = {
  id: string;
  adminUser: string;
  action: string;
  status: string;
  date: string;
} | null;

const PasswordPolicies: SecurityType[] = [
  {
    label: "Uppercase",
    key: "Uppercase",
  },
  {
    label: "Numbers",
    key: "Numbers",
  },
  {
    label: "Special Characters",
    key: "SpecialCharacters",
  },
  {
    label: "Preventing Password Route",
    key: "PreventingPasswordRoute",
  },
];

const TwoFactorAuth: SecurityType[] = [
  {
    label: "Two-Factor Authentication",
    key: "TwoFactorAuthentication",
  },
  {
    label: "Enforce 2FA For High-Value Transactions",
    key: "Enforce2FA",
  },
];

const sessionManagement: SecurityType[] = [
  {
    label: "Force Logout After Password Change",
    key: "ForceLogout",
  },
  {
    label: "Restrict Concurrent Logins",
    key: "RestrictConcurrentLogins",
  },
];

const tabs = ["All Activities", "Delivered", "Pending", "Failed"];

const SecurityPage = () => {
  const [enabled, setEnabled] = useState({
    Uppercase: true,
    Numbers: true,
    SpecialCharacters: true,
    PreventingPasswordRoute: true,
    TwoFactorAuthentication: true,
    Enforce2FA: true,
    ForceLogout: true,
    RestrictConcurrentLogins: true,
  });
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [methodSupported, setMethodSupported] = useState<string>("Email");
  const [loginAttempts, setLoginAttempts] = useState<number>(3);
  const [timeDuration, setTimeDuration] = useState<number>(15);

  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedLog, setSelectedLog] = useState<SecurityStateType>(null);

  const itemsPerPage = 10;

  const filteredActivities = useMemo(() => {
    const currentTab = tabs[selectedTab];

    if (currentTab === "Delivered") {
      return activityLogs.filter((item) => item.status === "Delivered");
    }
    if (currentTab === "Pending") {
      return activityLogs.filter((item) => item.status === "Pending");
    }
    if (currentTab === "Failed") {
      return activityLogs.filter((item) => item.status === "Failed");
    }

    return activityLogs;
  }, [activityLogs, selectedTab]);

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);

  const paginatedActivityLogs = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="space-y-6">
      {/* PASSWORD POLICIES */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Password Policies
        </h2>

        <div className="space-y-6 w-full lg:w-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">
              Minimum Password length
            </p>
            <select
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
              className="w-full sm:w-[220px] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            >
              {[6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-6">
            {PasswordPolicies.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
              >
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

      {/* TWO-FACTOR AUTHENTICATION */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Two-Factor Authentication
        </h2>

        <div className="space-y-6 w-full lg:w-[600px]">
          <div className="space-y-6">
            {TwoFactorAuth.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
              >
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

          <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">Method Supported</p>
            <select
              value={methodSupported}
              onChange={(e) => setMethodSupported(e.target.value)}
              className="w-full sm:w-[220px] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            >
              {["Email", "Google"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* SESSION MANAGEMENT  */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Session Management
        </h2>

        <div className="space-y-6 w-full lg:w-[600px]">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">Timeout Duration</p>
            <select
              value={timeDuration}
              onChange={(e) => setTimeDuration(Number(e.target.value))}
              className="w-full sm:w-[220px] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            >
              {[15, 30, 60].map((item) => (
                <option key={item} value={item}>
                  {item} minutes of inactivity
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">Number of Login Attempts</p>
            <select
              value={loginAttempts}
              onChange={(e) => setLoginAttempts(Number(e.target.value))}
              className="w-full sm:w-[220px] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            >
              {[3, 4, 5].map((item) => (
                <option key={item} value={item}>
                  {item} times
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-6">
            {sessionManagement.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
              >
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

      {/* ACTIVITY LOGS */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between p-6">
          <h2 className="text-[26px] font-semibold text-[#1F1F1F]">
            Activity Logs
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
                          {activityLogs.length}
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
                  "Admin User",
                  "Action Peerformed",
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
              {paginatedActivityLogs.map((log) => (
                <tr key={log.id} className="border-b border-[#DDE4DB]">
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.id}
                  </td>
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.adminUser}
                  </td>
                  <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                    {log.action}
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

      <ActivityLogModal
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
          {Math.min(currentPage * itemsPerPage, filteredActivities.length)} of{" "}
          {filteredActivities.length}
        </p>
      </div>
    </section>
  );
};

export default SecurityPage;
