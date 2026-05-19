// src/components/account/AccountFooter.tsx
"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerColumns = [
  { title: "SHOP", links: ["Cruisers", "Commuters", "Cargo Bikes", "Folding Bikes", "Utility Bikes", "Trikes (3 wheelers)", "Ride Share", "Ebike Offer Accessories"] },
  { title: "SERVICE", links: ["After Sales Services", "Tourism Packages", "Advertising Packages", "Consultancies", "Ride Sharing Services/Networks"] },
  { title: "MORE", links: ["Search", "Local Shop", "Blog", "About Us", "Warranty", "Payment", "Contact Us"] },
  { title: "LEGAL", links: ["Shipping Policy", "Privacy Policy", "Terms & Condition", "Return and Refund Policy", "Cookie Policy"] },
];

export default function AccountFooter() {
  return (
    <footer className="bg-[#171717]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-[70px]">
        {/* Nav columns – grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="text-sm font-bold text-white">{col.title}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#9CA3AF] transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row – horizontal on large screens */}
        <div className="flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Follow Us On */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white">Follow Us On</p>
            <div className="flex gap-3">
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/50">
                <InstagramIcon sx={{ fontSize: 15, color: "white" }} />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/50">
                <FacebookIcon sx={{ fontSize: 15, color: "white" }} />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/50">
                <TwitterIcon sx={{ fontSize: 15, color: "white" }} />
              </Link>
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/50">
                <YouTubeIcon sx={{ fontSize: 15, color: "white" }} />
              </Link>
            </div>
          </div>

          {/* We Accept */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white">We Accept</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded bg-white px-1.5 py-1">
                <div className="h-5 w-5 rounded-full bg-red-500" />
                <div className="-ml-2.5 h-5 w-5 rounded-full bg-yellow-400 opacity-90" />
              </div>
              <div className="rounded bg-[#1a1f71] px-2.5 py-1 text-xs font-bold italic text-white">VISA</div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white">Contact Us</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <p className="text-xs text-[#9CA3AF]">
                Phone:{" "}
                <a href="tel:+2348022908726" className="text-[#519A09] hover:underline">+234 802 290 8726</a>
              </p>
              <p className="text-xs text-[#9CA3AF]">
                Email:{" "}
                <a href="mailto:service@agilecycle.com" className="text-[#519A09] hover:underline">service@agilecycle.com</a>
              </p>
            </div>
            <p className="text-xs text-[#9CA3AF]">Mon–Fri 9am–6pm, Sat 10am–4pm</p>
          </div>
        </div>

        {/* Copyright line – below all */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-[#9CA3AF]">© {new Date().getFullYear()} AGILE CYCLE</p>
          <button className="flex items-center gap-1 text-xs text-[#9CA3AF] hover:text-white">
            English <ChevronDown size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}