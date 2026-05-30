"use client";

import { Pause } from "lucide-react";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VideoSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      <Image
        src="/lifestyle/lifestyle1.png"
        alt="Bike Hero"
        width={1000}
        height={500}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Urban Folding, Built for Commuting
        </h1>

        <button className="mt-8 text-black shadow-2xl">
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
        </button>
      </div>
    </section>
  );
}
