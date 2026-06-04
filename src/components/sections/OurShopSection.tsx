import React from "react";
import Image from "next/image";
import shopImage from "@/public/home/our-shop.png";
import Container from "../layout/Container";

const OurShopSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen mt-16 overflow-hidden">
      <Image
        src={shopImage}
        alt="Our Shop Image"
        fill
        priority
        className="object-cover object-center"
      />
      <Container className="relative space-y-6 mt-10 z-10">
        <h2 className="text-4xl font-bold">Our Shop</h2>
        <p className="text-sm w-[200px] md:w-160">
          Visit us in person at our physical shop to experience Agile Cycle
          firsthand. Explore our full range of e-bikes, accessories, and
          services. Whether you&apos;re test-riding, getting expert advice, or
          selecting the perfect gear, our team is here to help you find the
          perfect fit.
        </p>
      </Container>

      <div className="absolute bottom-10 right-20 bg-gray-100/70 backdrop-blur-xs max-w-[320px] p-4 rounded-xl space-y-6">
        <div className="space-y-2 text-sm">
          <h2 className="text-primary font-semibold">Location</h2>
          <p>Speedway House, Araromi Street Of Moloney/Mcarthy Stree, Onikan Lagos, Nigeria</p>
        </div>
        <div className="space-y-2 text-sm">
          <h2 className="text-primary font-semibold">Open Hours</h2>
          <p>Monday to Friday, 9:00AM - 6:00PM, Saturday, 10:00 AM - 4:00PM</p>
        </div>
        <div className="space-y-2 text-sm">
          <h2 className="text-primary font-semibold">Phone Number</h2>
          <p>+234 802 290 8726</p>
        </div>
        <button className="border-2 border-secondary w-full rounded-md bg-white/50 p-2 text-[#01430D] text-sm">Get Directions</button>
      </div>
    </section>
  );
};

export default OurShopSection;
