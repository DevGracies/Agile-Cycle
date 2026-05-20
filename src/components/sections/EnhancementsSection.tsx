import React from "react";
import EnhancementsCard from "../cards/EnhancementsCard";
import { enhancements } from "@/src/lib/data";
import SectionHeader from "../shared/SectionHeader";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";

const EnhancementsSection = () => {
  return (
    <section className="min-h-screen py-24">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <SectionHeader subtitle="Enhancements" />
            <p className="text-gray-600 max-w-3xl leading-6 text-sm mb-14">
              Upgrade your ride with smart add-ons. Boost your e-bike&apos;s
              performance, safety, and style, giving you more value every time
              you ride.
            </p>
          </div>
          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enhancements.map((item, index) => (
            <EnhancementsCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EnhancementsSection;
