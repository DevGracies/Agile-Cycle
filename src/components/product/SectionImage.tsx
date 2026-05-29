"use client";

import Image from "next/image";


type Props = {
  image: string;
};

export default function SectionImage({ image }: Props) {
  return (
    <div
      className="relative mx-auto w-[400px] h-[400px] md:h-[500px] md:w-[500px] overflow-hidden rounded-[45%]"
    >
      <Image
        src={image}
        alt="Bike"
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </div>
  );
}