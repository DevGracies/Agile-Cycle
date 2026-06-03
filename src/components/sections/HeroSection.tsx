import Image from "next/image";
import Container from "../layout/Container";
import heroImage from "@/public/home/Hero-Image.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex items-center  overflow-hidden">

      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <Container>
        <div className="relative z-10 flex justify-center md:justify-start">

          <div className="w-full max-w-xl md:max-w-2xl bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl 
            p-8 sm:p-8 md:p-12 text-white shadow-2xl text-center md:text-left">

            {/* Tagline */}
            <p className="tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] uppercase text-xs sm:text-sm text-white mb-4">
              Let’s Go
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5">
              EVERYWHERE!
            </h1>

            {/* Description */}
            <p className="text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Agile Cycle is a disruptive lifestyle complementary brand,
              driven by a strong ethos and sense of responsibility to better
              the lives and livelihoods of our clients and the world in general,
              particularly through green and sustainable energy solutions.
            </p>

            <Link href="/bikes" className="bg-white transition-all duration-300 text-[#01430D] hover:text-[#0b4f13] px-8 py-4 rounded-md font-semibold text-sm">
              Explore Bikes
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;