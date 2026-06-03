"use client";

import RatingSummary from "./RatingSummary";
import PerformanceMetrics from "./PerformanceMetrics";
import RecommendationBanner from "./RecommendationBanner";
import ReviewFilters from "./ReviewFilters";
import ReviewsCarousel from "./ReviewsCarousel";
import PaginationControls from "./PaginationControls";
import Container from "../layout/Container";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Product } from "@/src/types/product";

type StateType = "reviews" | "questions";

const reviewTabs = [
  { title: "Reviews", key: "reviews", count: 135 },
  { title: "Questions", key: "questions", count: 0 },
];

const CustomerReviews = ({product}: {product: Product}) => {
  const [state, setState] = useState<StateType>("reviews");

  return (
    <section>
      <Container className="flex flex-col xl:flex-row gap-20 justify-between">
        <RatingSummary />

        <div className="flex-1 justify-items-start">
          <PerformanceMetrics />
          <RecommendationBanner />
        </div>
      </Container>

      <div className="mt-14">
        <div className="flex gap-8 text-sm font-semibold pb-5">
          {reviewTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setState(tab.key as StateType)}
              className={`flex flex-col items-center ${state === tab.key ? "text-[#7BAE5B]" : "text-[#B4B4B4]"} `}
            >
              <div>
                {tab.title.toUpperCase()} (<span>{tab.count}</span>)
              </div>
              {state === tab.key && (
                <ChevronDown />
              )}
            </button>
          ))}
        </div>

        {state === "reviews" && (
          <>
            <ReviewFilters product={product} />
            <ReviewsCarousel />
          </>
        )}

        {state === "questions" && (
          <div>
            <h2>Questions</h2>
          </div>
        )}

        <PaginationControls />
      </div>
    </section>
  );
};

export default CustomerReviews;
