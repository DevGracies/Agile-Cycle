// src/components/club/ClubHero.tsx

import Image from "next/image";

export default function ClubHero() {
  return (
    <section className="relative h-[550px]">
      <Image
        src="/club/hero.jpg"
        alt="Club Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-12 top-1/2 -translate-y-1/2">
        <div className="max-w-[520px] bg-black/55 backdrop-blur-sm p-10 rounded-lg">
          <p className="text-white uppercase tracking-[10px] text-sm">
            Welcome
          </p>

          <h1 className="text-white text-6xl font-bold mt-4">
            TO OUR CLUB
          </h1>

          <p className="text-white/80 mt-6 leading-7">
            A space built to grow the culture of cycling.
            Here, riders of all levels can connect,
            ask questions and share experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white px-6 py-3 rounded-md">
              Join
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-md">
              + Create Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}