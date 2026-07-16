import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import ConfirmProvider from "../context/ConfirmProvider";
import BackToTop from "../components/shared/BackToTop";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../context/CartProvider";
import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthProvider";
import { EbikeProvider } from "../context/EbikeProvider";
import { AccessoryProvider } from "../context/AccessoryProvider";
import { EnhancementProvider } from "../context/EnhancementProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agile Cycle Bikes",
  description: "Agile Cycle Bikes",
};

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Toaster position="top-center" />

        <AuthProvider>
          <EbikeProvider>
            <AccessoryProvider>
              <EnhancementProvider>
                <ConfirmProvider>
                  <CartProvider>
                    {children}
                  </CartProvider>
                </ConfirmProvider>
              </EnhancementProvider>
            </AccessoryProvider>
          </EbikeProvider>
        </AuthProvider>
        <BackToTop />
      </body>

    </html>
  );
}
