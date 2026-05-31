import { ReactNode } from "react";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import BenefitsSection from "@/src/components/sections/BenefitsSection";
import AccountFooter from "@/src/components/account/AccountFooter";

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <SubscribeSection />
      <BenefitsSection />
      <AccountFooter />
    </>
  );
}