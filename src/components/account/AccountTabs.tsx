// src/components/account/AccountTabs.tsx
"use client";

const TABS = ["Profile", "Addresses", "Orders"];

interface AccountTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AccountTabs({
  activeTab,
  onTabChange,
}: AccountTabsProps) {
  return (
    <div className="mb-10 flex gap-[30px] overflow-x-auto pb-2">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className="group relative flex flex-col items-center"
        >
          <span
            className={`mb-1 text-[15px] font-bold uppercase tracking-[1px] transition-colors ${
              activeTab === tab
                ? "text-[#519A09]"
                : "text-[#A1A1A1] group-hover:text-[#519A09]"
            }`}
          >
            {tab}
          </span>
          <span
            className={`h-1.5 w-2.5 transition-opacity ${
              activeTab === tab
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-50"
            }`}
          >
            <span className="block h-full w-full rounded-full bg-[#519A09]" />
          </span>
        </button>
      ))}
    </div>
  );
}
