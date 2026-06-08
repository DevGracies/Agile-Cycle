"use client";

import Specifications from "./Specifications";
import BackgroundLines from "./BackgroundLines";
import Container from "../layout/Container";
import SectionImage from "./SectionImage";
import Image from "next/image";

type Spec = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: Spec[];
  reverse?: boolean;
};

export default function FeatureSection({
  title,
  subtitle,
  description,
  image,
  specs,
  reverse,
}: Props) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <BackgroundLines />

      <Container>
        <div
          className={`relative grid items-center gap-20 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              {title}
            </h2>

            <p className="mt-3 text-sm font-semibold text-[#6DBE45]">
              {subtitle}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {description}
            </p>

            <Specifications specs={specs} />
          </div>

          <div className="relative mx-auto w-[400px] h-[400px] md:h-[500px] md:w-[500px] overflow-hidden rounded-[45%]">
            <Image
              src={image}
              alt="Bike"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <svg
            className="absolute left-1/2 top-1/3 -translate-y-1/2  hidden lg:block"
            width="250"
            height="300"
            fill="none"
          >
            <path
              d="M0 100 C80 -20, 160 140, 250 160"
              stroke="#6DBE45"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
