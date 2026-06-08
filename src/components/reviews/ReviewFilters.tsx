"use client";

import { useReview } from "@/src/hooks/useReview";
import SearchInput from "../shared/SearchInput";
import Select from "../ui/CustomSelect";
import { useState } from "react";
import { ReviewModal } from "./modal/ReviewModal";
import { Product } from "@/src/types/product";

const ReviewFilters = ({product}: {product: Product}) => {
  const [date, setDate] = useState<string>("");
  const {open, setOpen} = useReview();

  console.log("Product", product)

  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between mt-10 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchInput placeholder="Search Reviews..." />

        <Select
          value={date}
          onChange={(value) => {
            setDate(value as string);
            console.log("Selected date:", value);
          }}
          placeholder="Filter by date"
          options={[
            { label: "Week", value: "week" },
            { label: "Monthly", value: "monthly" },
          ]}
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-primary font-medium underline">
          Ask a question
        </button>

        <button 
        onClick={() => setOpen(true)}
        className="border-[2px] border-primary rounded-lg px-6 py-3 font-semibold hover:bg-[#2D7A1F] cursor-pointer hover:text-white transition">
          Write a Review
        </button>
      </div>

      <ReviewModal 
        open={open}
        product={product}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ReviewFilters;