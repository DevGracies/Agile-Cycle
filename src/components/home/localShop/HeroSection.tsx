import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[941px] w-full">

        <Image
          src="/home/our-shop.png"
          alt="Agile Cycle Shop"
          fill
          priority
          className="object-cover"
        />

        {/* Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 py-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[14px] text-[#01430D]">

            <Link href="/Home">Home</Link>

            <span>{">"}</span>

            <span>Agile Cycle Shop</span>

          </div>

          {/* Heading */}
          <h1 className="mt-4 text-[42px] font-bold text-black">
            Agile Cycle Shop
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[640px] text-[16px] leading-8 text-black">
            Visit us in person ot our physical shop to experience Agile Cycle firsthand. Explore
our full range of e-bikes, accessories, and services. Whether you're test-riding,
getting expert advice, or selecting the perfect gear, our team is here to help you
find the perfect fit.
          </p>

          {/* Info Card */}
          <div className="absolute bottom-12 right-0 w-[398px] h-[450px] rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-lg">

            <div>
              <h3 className="text-[#519A09] font-semibold text-lg">
                Location
              </h3>

              <p className="mt-2 text-sm leading-7">
                Speedway House, Aromire Street <br />
                Off Moloney/McCarthy Street, Onikan <br />
                Lagos, Nigeria
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-[#519A09] font-semibold text-lg">
                Open Hours
              </h3>

              <p className="mt-2 text-sm leading-7">
                Monday to Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-[#519A09] font-semibold text-lg">
                Phone No
              </h3>

              <p className="mt-2 text-[16px]">
                +234 802 290 8726
              </p>
            </div>

            <button className="mt-6 w-full h-12 border border-[#01430D] rounded-lg text-[#01430D] font-semibold">
              Get Directions
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}