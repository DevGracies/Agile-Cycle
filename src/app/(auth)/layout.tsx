'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import { authImages } from "@/src/lib/authConfig";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

let rightImage = authImages.onboarding;

if (pathname.includes("signin")) {
  rightImage = authImages.signin;
}

if (
  pathname.includes("forgotPassword") ||
  pathname.includes("email-check")
) {
  rightImage = authImages.recovery;
}
    

  return (
    <main className="h-screen overflow-hidden bg-[#F8FAF8]">
      <div className="grid h-full lg:grid-cols-2">

        {/* LEFT */}
        <section className="h-full overflow-y-auto flex justify-center px-6 py-16 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="mb-10">
              <Image
                src="/Agile-Cycle-Logo.png"
                alt="Agile Cycle"
                width={90}
                height={90}
                priority
              />
            </div>

            {/* PAGE CONTENT */}
            {children}

          </div>
        </section>

        {/* RIGHT IMAGE PANEL */}
        <section className="hidden lg:block relative h-full">
          <Image
            src={rightImage}
            alt="Auth image"
            fill
            className="object-cover"
          />
        </section>

      </div>
    </main>
  );
}