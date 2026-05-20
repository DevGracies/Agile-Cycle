"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Pause, Play } from "lucide-react";

import Container from "../layout/Container";
import lifestyleImage1 from "@/public/lifestyle/lifestyle1.png";
import lifestyleImage2 from "@/public/lifestyle/lifestyle2.png";
import lifestyleImage3 from "@/public/lifestyle/lifestyle3.png";
import lifestyleImage4 from "@/public/lifestyle/lifestyle4.png";

const lifestyleImages = [
  lifestyleImage1,
  lifestyleImage2,
  lifestyleImage3,
  lifestyleImage4,
];

const CommunitySection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* TOP CONTENT */}
        <div className="max-w-2xl mb-12 space-y-4">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            Lifestyle & Community
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-7">
            See how Agile Cycle e-bikes fit into everyday life, from city
            commutes to weekend adventures.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* VIDEO CARD */}
          <div
            className="
              relative overflow-hidden
              group cursor-pointer rounded-xl
            "
          >
            <Image
              src={lifestyleImages[0]}
              alt="Community Video"
              width={800}
              height={800}
              className="
                object-cover
                group-hover:scale-105
                transition-transform duration-700
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/45 transition-colors duration-500" />

            {/* PLAY BUTTON */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
              "
            >
              <div
                onClick={() => setPlayVideo(!playVideo)}
                className="
                  w-16 h-16 md:w-20 md:h-20
                  rounded-full
                  bg-white/80 backdrop-blur-md
                  flex items-center justify-center
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                {playVideo ? (
                  <Pause className="ml-1" size={28} fill="black" />
                ) : (
                  <Play className="ml-1" size={28} fill="black" />
                )}
              </div>
            </div>
          </div>

          {/* IMAGE GRID */}

          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="
                  relative overflow-hidden
                  min-h-[180px] md:min-h-[300px]
                  group cursor-pointer rounded-xl
                "
            >
              <Image
                src={lifestyleImages[index + 1]}
                alt="Lifestyle & Community Image"
                width={800}
                height={800}
                className="
                    object-cover
                    group-hover:scale-105
                    transition-transform duration-700
                  "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
