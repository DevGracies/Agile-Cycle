"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {title: "General", path: "/dashboard/setting"},
  {title: "User Management", path: "/dashboard/setting/user-management"},
  {title: "Payments", path: "/dashboard/setting/payment"},
  {title: "Notifications", path: "/dashboard/setting/notifications"},
  {title: "Security", path: "/dashboard/setting/security"},
  {title: "Data & Privacy", path: "/dashboard/setting/data-privacy"},
];

const SettingsTabs = () => {
  const pathname = usePathname()
  return (
    <div className="bg-white border border-[#EEF1EC] overflow-hidden p-2 flex xl:flex-col flex-row xl:h-full overflow-x-auto">
      {tabs.map((tab, index) => {
        const active = pathname === tab.path
        return(
        <Link
          key={tab.path}
          href={tab.path}
          className={`w-full text-center md:text-left rounded-xl h-[50px] px-5 py-4 text-xs md:text-sm transition-all duration-200 
            ${
              active
                ? "bg-[#eef7ec] text-[#3c7a31] font-semibold"
                : "hover:bg-gray-100 text-[#6b7280]"
            }`}
        >
          {tab.title}
        </Link>
      )})}
    </div>
  );
};

export default SettingsTabs;