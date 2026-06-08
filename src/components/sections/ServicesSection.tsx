import Container from "../layout/Container";
import ServiceCard from "../cards/ServiceCard";
import SectionHeader from "../shared/SectionHeader";
import { services } from "@/src/lib/data";

const ServicesSection = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <SectionHeader
          title="Services"
          subtitle="Categories"
          section="Services"
          icon
        />
      </Container>
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url(/home/categories-image.png)",
        }}
      >
        <div className="absolute inset-0 bg-white/50" />

        <Container>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="lg:col-span-2">
                <ServiceCard {...services[0]} />
              </div>

              <div className="lg:col-span-2">
                <ServiceCard {...services[1]} />
              </div>

              <div className="lg:col-span-2">
                <ServiceCard {...services[2]} />
              </div>

              <div className="lg:col-start-1 lg:col-span-3">
                <ServiceCard {...services[3]} />
              </div>

              <div className="lg:col-start-4 lg:col-span-3">
                <ServiceCard {...services[4]} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ServicesSection;
