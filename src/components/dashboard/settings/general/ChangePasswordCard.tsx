"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
  placeholder,
}: {
  placeholder: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full border border-[#dfe6dc] bg-[#ECFDF3] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

const ChangePasswordCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#e7ece5] p-6 shadow-sm">
      <h2 className="text-sm font-semibold text-[#1f2937] mb-6">
        Change Password
      </h2>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Current Password
          </label>

          <PasswordInput placeholder="Enter current password" />

          <button className="mt-2 text-xs text-[#5f9f54] hover:underline">
            Forgot Current Password? Click here
          </button>
        </div>

        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            New Password
          </label>

          <PasswordInput placeholder="Enter new password" />
        </div>

        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Re-enter Password
          </label>

          <PasswordInput placeholder="Re-enter password" />
        </div>

        <button className="w-full mt-4 bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white py-3 rounded-xl text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordCard;