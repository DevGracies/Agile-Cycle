// src/components/account/AccountDetails.tsx
"use client";

interface AccountDetailsProps {
  user?: {
    full_name?: string;
    email?: string;
  };
}

export default function AccountDetails({ user }: AccountDetailsProps) {
  return (
    <div className="rounded-2xl border border-[#E8E8E8] bg-white p-4 shadow-sm sm:p-6">
      <p className="mb-4 text-xs font-bold uppercase tracking-[1px] text-[#01430D] sm:text-sm">
        Account Details
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4 sm:gap-[50px]">
          <span className="w-[92px] text-xs font-normal capitalize tracking-[1px] text-[#5F6368]">
            Name
          </span>
          <span className="text-sm font-normal text-[#111827] sm:text-base">
            {user?.full_name || "John Doe"}
          </span>
        </div>
        <div className="flex flex-row items-center gap-4 sm:gap-[50px]">
          <span className="w-[92px] text-xs font-normal capitalize tracking-[1px] text-[#5F6368]">
            Email
          </span>
          <span className="break-all text-sm font-normal text-[#111827] sm:text-base">
            {user?.email || "example@gmail.com"}
          </span>
        </div>
      </div>
    </div>
  );
}