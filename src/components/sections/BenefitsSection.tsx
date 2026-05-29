import React from "react";
import Container from "../layout/Container";
import { ShipIcon } from "lucide-react";

const benefits = [
  {
    title: "Free Shipping",
    description: "Free shipping for order above #400,000",
    icon: ShipIcon,
  },
  {
    title: "Ride Green, Live Clean",
    description: "Ride clean with eco-smart tech",
    icon: ShipIcon,
  },
  {
    title: "14 Days Return",
    description: "Return unopened items within 14 days",
    icon: ShipIcon,
  },
  {
    title: "Trusted Warranty",
    description: "1-year warranty - lifetime support",
    icon: ShipIcon,
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white shadow-md rounded-xl p-3 space-y-4"
              >
                <div className="bg-[#519A09] p-2 rounded-full w-fit">
                    <Icon className="text-white" />
                </div>
                <div>
                    <h2 className="font-bold">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
