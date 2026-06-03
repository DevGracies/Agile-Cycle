"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

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

// const VIDEO_ID = "dQw4w9WgXcQ";
const VIDEO_ID = "47uH3NU-c84";

const videoSrc = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

const CommunitySection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-10 md:py-16">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-4">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            Lifestyle & Community
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-7">
            See how Agile Cycle e-bikes fit into everyday life, from city
            commutes to weekend adventures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Video Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              min-h-[300px]
              md:min-h-[450px]
              bg-black
            "
          >
            {!isVideoPlaying ? (
              <button
                type="button"
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 w-full h-full group"
              >
                <Image
                  src={lifestyleImages[0]}
                  alt="Community Video"
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      w-16 h-16
                      md:w-20 md:h-20
                      rounded-full
                      bg-white/90
                      backdrop-blur-md
                      flex items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Play
                      size={32}
                      fill="currentColor"
                      className="ml-1 text-black"
                    />
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoSrc}
                title="Lifestyle & Community Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Images */}
          {lifestyleImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-xl
                min-h-[220px]
                md:min-h-[400px]
                group
              "
            >
              <Image
                src={image}
                alt={`Lifestyle Image ${index + 1}`}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
