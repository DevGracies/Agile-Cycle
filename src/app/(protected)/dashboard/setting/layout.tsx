import SettingsTabs from "@/src/components/dashboard/settings/SettingsTabs";
import { ReactNode } from "react";

export default function SettingsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="w-full min-h-full bg-[#f7f8f7]">
      
      {/* Desktop Sidebar */}
      <div className="hidden xl:block">
        <div className="fixed h-screen w-[260px] px-6">
          <SettingsTabs />
        </div>
      </div>

      {/* Mobile Tabs At Top Instead */}
      <div className="xl:hidden px-4">
        <SettingsTabs />
      </div>

      {/* Main Content */}
      <section className="w-full xl:pl-60 px-4 sm:px-6">
        {children}
      </section>
    </main>
  );
}