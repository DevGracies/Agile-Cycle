"use client";

import {
  Pagination,
  StatusBadge,
  ToggleSwitch,
} from "@/src/components/dashboard/common/Dashboard";
import { Box, IconButton } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import NotificationLogModal from "@/src/components/dashboard/settings/notification/NotificationModal";
import { NotificationToggleState } from "@/src/types";
import {
  notificationTabs,
  notificationTypes,
  triggerEvents,
} from "@/src/mocks/index.mock";
import Loader from "@/src/components/ui/Loader";
import { useNotification } from "@/src/hooks/notification";

const NotificationsPage = () => {
  const {
    loading,
    enabled,
    toggleNotificationSetting,
    selectedTab,
    setSelectedTab,
    currentPage,
    setCurrentPage,
    logs,
    paginatedNotificationLogs,
    fetchSelectedLogDetails,
    isFetchingLogDetails,
    openModal,
    setOpenModal,
    selectedLog,
    totalPages,
    itemsPerPage,
    filteredNotifications,
  } = useNotification();

  if (loading) {
    return (
      <Box
        className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm flex items-center justify-center`}
      >
        <Loader text="Loading Notifications..." />
      </Box>
    );
  }

  return (
    <section className="space-y-6">
      {/* Notification Types */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg text-[#202020] mb-8">Notification Types</h2>

        <div className="space-y-6 md:w-1/2 w-full">
          {notificationTypes.map((item) => (
            <div
              key={item.key}
              className="md:grid grid-cols-2 gap-2 flex justify-between items-center"
            >
              <p className="text-[#5B5B5B] font-medium">{item.label}</p>

              <ToggleSwitch
                enabled={enabled[item.key as keyof NotificationToggleState]}
                onToggle={() =>
                  toggleNotificationSetting(
                    item.key as keyof NotificationToggleState,
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trigger Events */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg text-[#202020] mb-8">Trigger Events</h2>

        <div className="space-y-6 md:w-1/2 w-full">
          {triggerEvents.map((item) => (
            <div
              key={item.key}
              className="md:grid grid-cols-2 gap-2 flex justify-between items-center"
            >
              <p className="text-[#5B5B5B] font-medium">{item.label}</p>

              <ToggleSwitch
                enabled={enabled[item.key as keyof NotificationToggleState]}
                onToggle={() =>
                  toggleNotificationSetting(
                    item.key as keyof NotificationToggleState,
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* NOTIFICATION LOGS */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden p-6 ">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[26px] text-[#1F1F1F]">Notification Logs</h2>

          <div className="overflow-x-auto">
            <div className="inline-flex min-w-full rounded-2xl bg-[#01430D14] p-1.5 sm:p-2 gap-1">
              {notificationTabs.map((tab, index) => {
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
                          className={`rounded-full px-2 py-[2px] text-xs transition-all duration-300
                ${
                  isActive ? "bg-primary text-white" : "bg-white text-[#52A30D]"
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

        {/* NOTIFICATION LOGS  */}
        {loading ? (
          <div className="p-6 text-gray-500">Loading notifications...</div>
        ) : (
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
                      className={`px-4 py-5 text-left text-[#52A30D]
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
                {paginatedNotificationLogs.map((log) => (
                  <tr key={log.id} className="border-b border-[#DDE4DB]">
                    <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                      {log.id}
                    </td>
                    <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                      {log.trigger}
                    </td>
                    <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                      {log.recipient}
                    </td>
                    <td className={`border-b border-[#DDE4DB] px-4 py-4 `}>
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isFetchingLogDetails ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 space-x-6">
          <Loader text="Loading notification details..." />
        </div>
      ) : (
        <NotificationLogModal
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
        <p className=" text-[#555]">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, filteredNotifications.length)}{" "}
          of {filteredNotifications.length}
        </p>
      </div>
    </section>
  );
};

export default NotificationsPage;
