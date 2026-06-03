import Image from "next/image";
import shopVideoThumbnail from "@/public/home/our-shop2.png";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-[1440px] mx-auto">

        <div className="relative w-full overflow-hidden">
  <Image
    src={shopVideoThumbnail}
    alt="Agile Cycle Shop Video"
    className="w-full h-auto"
    priority
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40" />

  <button
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-16
      h-16
      rounded-full
      bg-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-105
      transition
    "
  >
    <Play className="w-7 h-7 ml-1" fill="black" />
  </button>
</div>

      </div>
    </section>
  );
};

export default VideoSection;