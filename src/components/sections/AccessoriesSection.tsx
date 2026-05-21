import React from "react";
import AccessoriesCard from "../cards/AccessoriesCard";
import { accessories } from "@/src/lib/data";
import SectionHeader from "../shared/SectionHeader";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";

const AccessoriesSection = () => {
  return (
    <section className="min-h-screen py-24">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <SectionHeader subtitle="Accessories & Essentials" />
            <p className="text-gray-600 max-w-3xl leading-6 text-sm mb-14">
              Helmets, smart locks, chargers, panniers, and other premium
              accessories to enhance every journey.
            </p>
          </div>

          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((item, index) => (
            <AccessoriesCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AccessoriesSection;
