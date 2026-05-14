import SettingsTabs from "@/src/components/dashboard/settings/SettingsTabs";
import { ReactNode } from "react";

export default function SettingsLayout({
  children,
}: {
  children: ReactNode;
}) {

    return (
        <main className="w-full bg-[#f7f8f7] min-h-screen lg:p-6">
      <div className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-6">
        {/* Settings Tabs */}
        <SettingsTabs />

        {/* Main Content */}
        <section>
            {children}
        </section>
      </div>
    </main>
    );
}