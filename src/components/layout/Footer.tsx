// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";

const MastercardIcon = () => (
  <svg
    width="56"
    height="32"
    viewBox="0 0 56 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="55" height="31" rx="5.5" fill="white" />
    <rect x="0.5" y="0.5" width="55" height="31" rx="5.5" stroke="#F4F4F4" />
    <circle cx="22" cy="16" r="9" fill="#E80B26" />
    <circle cx="34" cy="16" r="9" fill="#F59D31" />
    <path
      d="M28 22.7083C29.8413 21.0603 31 18.6655 31 16C31 13.3345 29.8413 10.9397 28 9.29175C26.1587 10.9397 25 13.3345 25 16C25 18.6655 26.1587 21.0603 28 22.7083Z"
      fill="#FC6020"
    />
  </svg>
);

const VisaIcon = () => (
  <div className="flex items-center justify-center w-14 h-8 rounded-md border border-[#F4F4F4] bg-white">
    <svg
      width="37"
      height="14"
      viewBox="0 0 37 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1038 5.06408C19.0837 6.55974 20.5129 7.39443 21.5895 7.89066C22.6956 8.39986 23.0672 8.72635 23.0629 9.18164C23.0545 9.87855 22.1806 10.1861 21.3625 10.198C19.9355 10.219 19.1059 9.83362 18.4462 9.54207L17.9322 11.8175C18.594 12.1061 19.8194 12.3577 21.0902 12.3687C24.073 12.3687 26.0247 10.9758 26.0352 8.81621C26.0468 6.07549 22.0275 5.92373 22.0549 4.69865C22.0644 4.32723 22.4391 3.93085 23.2603 3.83001C23.6667 3.77909 24.7887 3.74015 26.0605 4.29428L26.5598 2.09272C25.8758 1.85709 24.9966 1.63144 23.9021 1.63144C21.0944 1.63144 19.1196 3.04324 19.1038 5.06408ZM31.357 1.82115C30.8124 1.82115 30.3532 2.12168 30.1485 2.58296L25.8874 12.2069H28.8682L29.4613 10.6563H33.1038L33.4479 12.2069H36.0751L33.7825 1.82115H31.357ZM31.7739 4.62676L32.6341 8.52666H30.2783L31.7739 4.62676ZM15.4898 1.82115L13.1403 12.2069H15.9806L18.3291 1.82115H15.4898ZM11.2879 1.82115L8.33144 8.89009L7.13556 2.87949C6.99518 2.20854 6.44105 1.82115 5.8257 1.82115H0.9926L0.925049 2.12268C1.91721 2.32636 3.04448 2.65484 3.72738 3.00629C4.14536 3.22096 4.26463 3.40867 4.40184 3.91887L6.66693 12.2069H9.66875L14.2707 1.82115H11.2879Z"
        fill="url(#visa_grad)"
      />
      <defs>
        <linearGradient
          id="visa_grad"
          x1="17.085"
          y1="12.5841"
          x2="17.379"
          y2="1.55586"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#222357" />
          <stop offset="1" stopColor="#254AA5" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="px-4 lg:px-[70px] pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Shop */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Shop
            </h3>
            <ul className="space-y-4">
              {[
                "Cruisers",
                "Commuters",
                "Cargo Bikes",
                "Folding Bikes",
                "Utility Bikes",
                "Trikes (3 wheelers)",
                "Ride Share",
                "Ebike Offer Accessories",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-roboto text-sm text-[#b0b0b0] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Service */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Service
            </h3>
            <ul className="space-y-4">
              {[
                "After Sales Services",
                "Tourism Packages",
                "Advertising Packages",
                "Consultancies",
                "Ride Sharing Services/Networks",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-roboto text-sm text-[#b0b0b0] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* More */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              More
            </h3>
            <ul className="space-y-4">
              {[
                "Search",
                "Local Shop",
                "Blog",
                "About Us",
                "Warranty",
                "Payment",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-roboto text-sm text-[#b0b0b0] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Legal
            </h3>
            <ul className="space-y-4">
              {[
                "Shipping Policy",
                "Privacy Policy",
                "Terms & Condition",
                "Return and Refund Policy",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-roboto text-sm text-[#b0b0b0] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#333] pt-10">
          {/* Follow Us */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Follow Us On
            </h3>
            <div className="flex items-center gap-3">
              {["instagram", "facebook", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:border-green-light transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {social === "instagram" && (
                      <>
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="white" />
                      </>
                    )}
                    {social === "facebook" && (
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    )}
                    {social === "twitter" && (
                      <path
                        d="M4 4L20 20M4 20L20 4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    )}
                    {social === "youtube" && (
                      <>
                        <path
                          d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988787 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* We Accept */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              We Accept
            </h3>
            <div className="flex items-center gap-3">
              <MastercardIcon />
              <VisaIcon />
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-roboto font-bold text-sm tracking-widest uppercase mb-6 text-white">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="font-roboto text-sm text-[#b0b0b0]">
                <span className="font-bold text-white">Phone no:</span>{" "}
                <a
                  href="tel:+2348022908726"
                  className="text-[#F59D31] hover:underline"
                >
                  +234 802 290 8726
                </a>
                {"  "}
                <span className="font-bold text-white ml-3">Email:</span>{" "}
                <a
                  href="mailto:service@agilecycle.com"
                  className="text-[#F59D31] hover:underline"
                >
                  service@agilecycle.com
                </a>
              </p>
              <p className="font-roboto text-sm text-[#b0b0b0]">
                <span className="font-bold text-white">Open Hours:</span> Monday
                to Friday, 9:00 AM – 6:00 PM. Saturday, 10:00 AM – 4:00 PM.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#333] px-4 lg:px-[70px] py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-roboto text-sm text-[#b0b0b0]">© 2026 AGILE CYCLE</p>
        <select className="bg-transparent border border-[#555] text-[#b0b0b0] font-roboto text-sm rounded px-3 py-1.5 outline-none cursor-pointer">
          <option value="en">English</option>
        </select>
      </div>
    </footer>
  );
}
