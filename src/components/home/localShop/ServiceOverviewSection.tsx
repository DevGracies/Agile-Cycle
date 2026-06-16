"use client";

import Image from "next/image";
import mapImage from "@/public/home/Basemapimage.png";
import { useState } from "react";

const LocationSection = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="bg-[#F5F5F5] mt-15">
      

        {/* Content */}
        <div className="px-6 lg:px-12 max-w-[1280px] mx-auto">

          <h2 className="text-[32px] md:text-[42px] font-bold text-[#000000]  leading-tight">
            Experience Expert eBike Care with Our Comprehensive Service
          </h2>

          <p className="mt-6 max-w-[750px] text-[#000000] text-base leading-8">
            At Agile Cycle, our team has long specialized in eBike maintenance
            and servicing. Regardless of the brand, our full-service shop is
            equipped to handle all your eBike needs. From essential repairs to
            detailed tune-ups and part replacements, we are your trusted
            all-in-one destination for reliable eBike care.
          </p>

          <button
            onClick={() => setShowMap(!showMap)}
            className="mt-8 flex items-center gap-2 text-[#519A09]  font-medium hover:opacity-80 transition mb-10"
          >
            Our Location

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform duration-300 ${
                showMap ? "rotate-180" : ""
              }`}
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

        </div>

        {/* Toggle Map */}
        {showMap && (
          <div className="mt-10">
            <Image
              src={mapImage}
              alt="Agile Cycle Location Map"
              className="w-full h-auto"
              priority
            />
          </div>
        )}

      
    </section>
  );
};

export default LocationSection;