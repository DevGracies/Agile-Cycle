"use client";

import { useState } from "react";

import PasswordInput from "@/src/components/dashboard/settings/general/PasswordInput";
import SectionCard from "@/src/components/shared/SectionCard";

import { profileService } from "@/src/services/profile.service";

const ChangePasswordCard = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      await profileService.changePassword(form);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionCard>
      <h2 className="text-sm font-semibold text-[#1f2937] mb-6">
        Change Password
      </h2>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Current Password
          </label>

          <PasswordInput
            placeholder="Enter current password"
            value={form.currentPassword}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                currentPassword: value,
              }))
            }
          />

          <button className="mt-2 text-xs text-primary hover:underline">
            Forgot Current Password? Click here
          </button>
        </div>

        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            New Password
          </label>

          <PasswordInput
            placeholder="Enter new password"
            value={form.newPassword}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                newPassword: value,
              }))
            }
          />
        </div>

        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Re-enter Password
          </label>

          <PasswordInput
            placeholder="Re-enter password"
            value={form.confirmPassword}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                confirmPassword: value,
              }))
            }
          />
        </div>

        <button
          type="button"
          disabled={isLoading}
          onClick={handleSubmit}
          className="w-full mt-4 bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white py-3 rounded-xl text-sm font-medium disabled:opacity-70"
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </SectionCard>
  );
};

export default ChangePasswordCard;