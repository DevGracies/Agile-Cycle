"use client";

import { ToggleSwitch } from "@/src/components/dashboard/common/Dashboard";
import Select from "@/src/components/ui/CustomSelect";
import Loader from "@/src/components/ui/Loader";
import { useDataPrivacy } from "@/src/hooks/dataPrivacy";
import { Box } from "@mui/material";

const buttonBase =
  "bg-[#01430D] hover:bg-[#0b4f13] text-white px-5 py-3 rounded-lg font-medium transition w-full sm:w-auto min-w-[180px]";

const DataAndPrivacyPage = () => {
  const {
    loading,
    settings,
    handleToggle,
    handleUpdate,
    handleAction,
    actionLoading,
  } = useDataPrivacy();

  if (loading) {
    return (
      <Box
        className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm flex items-center justify-center`}
      >
        <Loader text="Loading Data & Privacy settings..." />
      </Box>
    );
  }

  return (
    <div className="relative p-6 md:p-10 space-y-8 bg-[#F7F8F7] min-h-screen">
      {/* DATA BACKUP */}
      <div className="bg-white rounded-2xl border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Data Backup
        </h2>

        <div className="space-y-6 w-full grid grid-cols-2">
          <p className="text-[#5B5B5B] font-medium">Enable Automatic Backups</p>
          <div className="flex items-center justify-between gap-4">
            <ToggleSwitch
              enabled={settings.autoBackup}
              onToggle={() => handleToggle("autoBackup")}
            />
          </div>

          <p className="text-[#5B5B5B] font-medium">Backup Frequency</p>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <Select
              value={settings.backupFrequency}
              onChange={(val) => handleUpdate("backupFrequency", val as string)}
              options={[
                { label: "Daily", value: "daily" },
                { label: "Weekly", value: "weekly" },
                { label: "Monthly", value: "monthly" },
              ]}
            />

            <button className={buttonBase} onClick={handleAction.runBackup}>
              {actionLoading.runBackup ? (
                <Loader size={20} text="Running Backup..." />
              ) : (
                "Run Manual Backup"
              )}
            </button>
          </div>

          <p className="text-sm text-[#5B5B5B]">
            Last Backup Date & Time:{" "}
            <span className="font-medium">12 Apr 2026, 09:10</span>
          </p>
        </div>
      </div>

      {/* DATA EXPORT */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Data Export
        </h2>

        <div className="space-y-6 w-full lg:w-1/2">
          <button className={buttonBase} onClick={handleAction.exportAll}>
            {actionLoading.exportAll ? (
              <Loader size={20} text="Exporting..." />
            ) : (
              "Export All Data"
            )}
          </button>

          <p className="text-[#5B5B5B] font-medium">Export Specific Modules</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Select
              value={settings.exportModule}
              onChange={(val) => handleUpdate("exportModule", val as string)}
              options={[
                { label: "Orders", value: "orders" },
                { label: "Users", value: "users" },
                { label: "Payments", value: "payments" },
              ]}
            />

            <button
              className={buttonBase}
              onClick={() => handleAction.exportData(settings.exportModule)}
            >
              {actionLoading.exportData ? (
                <Loader size={20} text="Exporting..." />
              ) : (
                "Export"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* PRIVACY COMPLIANCE */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Privacy Compliance
        </h2>

        <div className="space-y-6 w-full lg:w-1/2">
          <div className="flex items-center justify-between">
            <p className="text-[#5B5B5B] font-medium">Enable GDPR Compliance</p>
            <ToggleSwitch
              enabled={settings.gdpr}
              onToggle={() => handleToggle("gdpr")}
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#5B5B5B] font-medium">
              Enable Local Data Protection Rules
            </p>
            <ToggleSwitch
              enabled={settings.localRules}
              onToggle={() => handleToggle("localRules")}
            />
          </div>

          <button className={buttonBase}>View Compliance Report</button>
        </div>
      </div>

      {/* ACCESS & PERMISSIONS */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Access & Permissions
        </h2>

        <div className="space-y-6 w-full lg:w-1/2">
          <div className="flex items-center justify-between">
            <p className="text-[#5B5B5B] font-medium">
              Restrict Data Exports To Admins Only
            </p>
            <ToggleSwitch
              enabled={settings.restrictExports}
              onToggle={() => handleToggle("restrictExports")}
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#5B5B5B] font-medium">
              Allow Managers To View But Not Download
            </p>
            <ToggleSwitch
              enabled={settings.managerView}
              onToggle={() => handleToggle("managerView")}
            />
          </div>
        </div>
      </div>

      {/* FACTORY RESET BUTTON */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <button className={buttonBase} onClick={handleAction.resetFactory}>
          {actionLoading.resetFactory ? (
            <Loader size={20} text="Resetting..." />
          ) : (
            "Restore Factory Settings"
          )}
        </button>
      </div>
    </div>
  );
};

export default DataAndPrivacyPage;
