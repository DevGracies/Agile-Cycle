import Container from "../layout/Container";
import ServiceCard from "../cards/ServiceCard";
import SectionHeader from "../shared/SectionHeader";
import { services } from "@/src/lib/data";

const ServicesSection = () => {
  return (
    <section className="min-h-screen py-24">
      <Container>
        <SectionHeader title="Services" subtitle="Categories" section="Services" icon />
      </Container>
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/home/categories-image.png)",
        }}
      >
        <div className="absolute inset-0 bg-white/50" />

        <Container>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, index) => (
                <ServiceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ServicesSection;
