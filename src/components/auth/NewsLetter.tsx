"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "../ui/Button";

const NewsLetter = () => {
  const [newsletter, setNewsletter] = useState(false);

  const [tips, setTips] = useState(false);

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">

        {/* TITLE */}
        <h1 className="text-[48px] leading-[48px] font-bold bg-[linear-gradient(90deg,#01430D_0%,#519A09_100%)] bg-clip-text text-transparent mb-8">
           Tailor Your Ride
          </h1>
        {/* SUBTEXT */}
        <p className="mt-4 text-sm leading-6 text-gray-500">
          Select how you’d like to stay{" "}
          <span className="font-medium text-[#519A09]">
            connected.
          </span>
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* CHECKBOXES */}
        <div className="space-y-4 ">

          {/* NEWSLETTER */}
          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={newsletter}
              onChange={() =>
                setNewsletter(!newsletter)
              }
              className="
                
                h-6
                w-6
                rounded
               
                accent-[#519A09]
                
              "
            />

            <span className="text-sm text-gray-600 ">
              Subscribe to newsletter /
              community updates
            </span>
          </label>

          {/* TIPS */}
          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={tips}
              onChange={() => setTips(!tips)}
              className="
                h-6
                w-6
                rounded
             
                accent-[#519A09]
               
              "
            />

            <span className="text-sm text-gray-600">
              Enable product tips &
              ride guides
            </span>
          </label>

        </div>

        {/* BUTTON */}
        <Button
          type="submit"
          className="w-full mt-12"
        >
          Finish Setup
        </Button>

        {/* FOOTER TEXT */}
        <Link
          href="/"
          className="
            block
            text-center
            text-[20px]
            font-medium
            text-[#519A09]
            mt-10
          "
        >
          Be part of the Agile Cycle
          community.
        </Link>
      </form>
    </>
  );
};

export default NewsLetter;