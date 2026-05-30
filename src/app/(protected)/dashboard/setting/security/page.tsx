"use client";

import {
  Pagination,
  StatusBadge,
  ToggleSwitch,
} from "@/src/components/dashboard/common/Dashboard";
import ActivityLogModal from "@/src/components/dashboard/settings/security/ActivityLogModal";
import { Box, IconButton } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
  passwordPolicies,
  securityTabs,
  sessionManagementOptions,
  twoFactorAuthOptions,
} from "@/src/mocks/index.mock";
import { SecuritySettingsState } from "@/src/types";
import { useSecurity } from "@/src/hooks/security";
import Loader from "@/src/components/ui/Loader";
import Select from "@/src/components/ui/CustomSelect";

const SecurityPage = () => {
  const {
    configurations,
    handleConfigurationUpdate,
    enabled,
    handleToggleSetting,
    selectedTab,
    setSelectedTab,
    currentPage,
    setCurrentPage,
    logs,
    loading,
    paginatedActivityLogs,
    fetchSelectedLogDetails,
    isFetchingLogDetails,
    openModal,
    setOpenModal,
    selectedLog,
    totalPages,
    itemsPerPage,
    filteredActivities,
  } = useSecurity();

  if (loading) {
    return (
      <Box
        className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm flex items-center justify-center`}
      >
        <Loader text="Loading Security Settings..." />
      </Box>
    );
  }

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
            <Select
              value={configurations.passwordLength}
              onChange={(val) =>
                handleConfigurationUpdate("passwordLength", Number(val))
              }
              options={[6, 7, 8, 9, 10].map((num) => ({
                label: String(num),
                value: num,
              }))}
            />
          </div>

          <div className="space-y-6">
            {passwordPolicies.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
              >
                <p className="text-[#5B5B5B] font-medium">{item.label}</p>

                <ToggleSwitch
                  enabled={enabled[item.key as keyof SecuritySettingsState]}
                  onToggle={() =>
                    handleToggleSetting(item.key as keyof SecuritySettingsState)
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
            {twoFactorAuthOptions.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
              >
                <p className="text-[#5B5B5B] font-medium">{item.label}</p>

                <ToggleSwitch
                  enabled={enabled[item.key as keyof typeof enabled]}
                  onToggle={() =>
                    handleToggleSetting(item.key as keyof SecuritySettingsState)
                  }
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">Method Supported</p>

            <Select
              value={configurations.methodSupported}
              onChange={(val) =>
                handleConfigurationUpdate("methodSupported", val as string)
              }
              options={["Email", "Google"].map((val) => ({
                label: String(val),
                value: val,
              }))}
            />
          </div>
        </div>
      </div>

      {/* SESSION MANAGEMENT  */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Session Management
        </h2>

        <div className="space-y-6 w-full lg:w-[700px]">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">Timeout Duration</p>

            <Select
              value={configurations.timeDuration}
              onChange={(val) =>
                handleConfigurationUpdate("timeDuration", Number(val))
              }
              options={[15, 30, 60].map((val) => ({
                label: `${String(val)} minutes of inactivity`,
                value: val,
              }))}
            />
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8">
            <p className="text-[#5B5B5B] font-medium">
              Number of Login Attempts
            </p>

            <Select
              value={configurations.loginAttempts}
              onChange={(val) =>
                handleConfigurationUpdate("loginAttempts", Number(val))
              }
              options={[3, 4, 5].map((val) => ({
                label: `${String(val)} times`,
                value: val,
              }))}
            />
          </div>

          <div className="space-y-6">
            {sessionManagementOptions.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
              >
                <p className="text-[#5B5B5B] font-medium">{item.label}</p>

                <ToggleSwitch
                  enabled={enabled[item.key as keyof typeof enabled]}
                  onToggle={() =>
                    handleToggleSetting(item.key as keyof SecuritySettingsState)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVITY LOGS */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden p-6">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[26px] font-semibold text-[#1F1F1F]">
            Activity Logs
          </h2>

          <div className="overflow-x-auto">
            <div className="inline-flex min-w-full rounded-2xl bg-[#01430D14] p-1.5 sm:p-2 gap-1">
              {securityTabs.map((tab, index) => {
                const isActive = selectedTab === index;

                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setSelectedTab(index);
                      setCurrentPage(1);
                    }}
                    className={`relative whitespace-nowrap rounded-xl px-4 sm:px-5 lg:px-6 py-3 text-sm sm:text-[15px] font-medium transition-all duration-300
          ${
            isActive
              ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              : "text-[#374151] hover:bg-white/60 hover:text-[#111827]"
          }`}
                  >
                    <span className="flex items-center gap-2">
                      {tab.label}

                      {index === 0 && (
                        <span
                          className={`rounded-full px-2 py-[2px] text-xs font-semibold transition-all duration-300
                ${
                  isActive ? "bg-primary text-white" : "bg-white text-primary"
                }`}
                        >
                          {logs.length}
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
          {loading ? (
            <div className="p-6 text-[#777]">Loading activity logs...</div>
          ) : (
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
                      className={`px-4 py-5 text-left font-semibold text-primary
                            ${idx === 0 ? "rounded-l-[14px]" : ""}
                            ${idx === 5 ? "rounded-r-[14px]" : ""}
                          `}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedActivityLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-[#777]">
                      No activity logs found.
                    </td>
                  </tr>
                ) : (
                  paginatedActivityLogs.map((log) => (
                    <tr key={log.id} className="border-b border-[#DDE4DB]">
                      <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                        {log.id}
                      </td>
                      <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                        {log.adminUser}
                      </td>
                      <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                        {log.action}
                      </td>
                      <td
                        className={`border-b border-[#DDE4DB] px-4 py-4 text-[16px]`}
                      >
                        <StatusBadge status={log.status} />
                      </td>
                      <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                        {log.date}
                      </td>
                      {/* Actions */}
                      <td className="border-b border-[#DDE4DB] px-4 py-4">
                        <div className="flex items-center gap-2">
                          <IconButton
                            onClick={fetchSelectedLogDetails.bind(null, log.id)}
                          >
                            <OpenInNewRoundedIcon />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {isFetchingLogDetails ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 space-x-6">
          <span className="animate-spin rounded-full border-4 border-t-primary border-r-primary border-b-primary border-l-transparent h-8 w-8"></span>
          <p className="text-white">Loading log details...</p>
        </div>
      ) : (
        <ActivityLogModal
          open={openModal}
          setOpen={setOpenModal}
          selectedLog={selectedLog}
        />
      )}

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
        <p className="text-[#555]">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, filteredActivities.length)} of{" "}
          {filteredActivities.length}
        </p>
      </div>
    </section>
  );
};

export default SecurityPage;
