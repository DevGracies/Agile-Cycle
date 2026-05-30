"use client";

import SearchInput from "../shared/SearchInput";
import Select from "../ui/CustomSelect";
import { useState } from "react";

const ReviewFilters = () => {
  const [date, setDate] = useState<string>("");

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

        <button className="border-[2px] border-primary rounded-lg px-6 py-3 font-semibold hover:bg-[#2D7A1F] cursor-pointer hover:text-white transition">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewFilters;