"use client";

import { ToggleSwitch } from "@/src/components/dashboard/common/Dashboard";
import React, { useState } from "react";

const DataAndPrivacyPage = () => {
  const [backupFrequency, setBackupFrequency] = useState("weekly");
  const [exportModule, setExportModule] = useState("orders");
  const [enabled, setEnabled] = useState({
    autoBackup: true,
    gdpr: true,
    localRules: true,
    restrictExports: true,
    managerView: true,
  });

  return (
    <div className="p-6 md:p-10 space-y-8 bg-[#F7F8F7] min-h-screen">
      {/* DATA BACKUP */}
      <div className="bg-white rounded-2xl border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[#202020] mb-8">
          Data Backup
        </h2>

        <div className="space-y-6 w-full grid grid-cols-2">
          <p className="text-[#5B5B5B] font-medium">Enable Automatic Backups</p>
          <div className="flex items-center justify-between gap-4">
            <ToggleSwitch
              enabled={enabled.autoBackup}
              onToggle={() =>
                setEnabled((prev) => ({
                  ...prev,
                  autoBackup: !prev.autoBackup,
                }))
              }
            />
          </div>

          <p className="text-[#5B5B5B] font-medium">Backup Frequency</p>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <select
              value={backupFrequency}
              onChange={(e) => setBackupFrequency(e.target.value)}
              className="w-full sm:w-[220px] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            >
              {["Daily", "Weekly", "Monthly"].map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>

            <button className="bg-[#01430D] hover:bg-[#0b4f13] text-white  px-6 py-4 w-[250px] rounded-lg font-medium">
              Run Manual Backup
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
          <button className="bg-[#01430D] hover:bg-[#0b4f13] text-white px-6 py-4 w-[250px] rounded-lg font-medium">
            Export All Data
          </button>

          <p className="text-[#5B5B5B] font-medium">Export Specific Modules</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <select
              value={exportModule}
              onChange={(e) => setExportModule(e.target.value)}
              className="w-full sm:w-[220px] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            >
              {["Orders", "Users", "Payments"].map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>

            <button className="bg-[#01430D] hover:bg-[#0b4f13] text-white px-6 py-4 w-[250px] rounded-lg font-medium">
              Export
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
              enabled={enabled.gdpr}
              onToggle={() =>
                setEnabled((prev) => ({ ...prev, gdpr: !prev.gdpr }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#5B5B5B] font-medium">
              Enable Local Data Protection Rules
            </p>
            <ToggleSwitch
              enabled={enabled.localRules}
              onToggle={() =>
                setEnabled((prev) => ({
                  ...prev,
                  localRules: !prev.localRules,
                }))
              }
            />
          </div>

          <button className="bg-[#01430D] hover:bg-[#0b4f13] text-white px-6 py-4 w-[250px] rounded-lg font-medium">
            View Compliance Report
          </button>
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
              enabled={enabled.restrictExports}
              onToggle={() =>
                setEnabled((prev) => ({
                  ...prev,
                  restrictExports: !prev.restrictExports,
                }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#5B5B5B] font-medium">
              Allow Managers To View But Not Download
            </p>
            <ToggleSwitch
              enabled={enabled.managerView}
              onToggle={() =>
                setEnabled((prev) => ({
                  ...prev,
                  managerView: !prev.managerView,
                }))
              }
            />
          </div>
        </div>
      </div>

      {/* FACTORY RESET BUTTON */}
      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-sm">
        <button className="bg-[#01430D] hover:bg-[#0b4f13] text-white px-6 py-4 rounded-lg font-medium">
          Restore to Factory Settings
        </button>
      </div>
    </div>
  );
};

export default DataAndPrivacyPage;
