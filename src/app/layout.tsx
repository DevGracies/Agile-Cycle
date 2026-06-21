import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import ConfirmProvider from "../context/ConfirmProvider";
import BackToTop from "../components/shared/BackToTop";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../context/CartProvider";

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
  weight: [ "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Toaster position="top-center" />

        <ConfirmProvider>
          <CartProvider>
            {children}
            <BackToTop />
          </CartProvider>
        </ConfirmProvider>
      </body>

    </html>
  );
}
