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
        <h1 className="text-5xl tracking-tight text-[#01430D]">
          <span className="font-bold">
            Tailor Your
          </span>{" "}
          <span className="font-medium text-[#519A09]">
            Ride
          </span>
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
        <div className="space-y-4">

          {/* NEWSLETTER */}
          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={newsletter}
              onChange={() =>
                setNewsletter(!newsletter)
              }
              className="
                
                h-5
                w-5
                rounded
                border-gray-300
                accent-[#519A09]
                focus:ring-[#01430D]
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
                h-5
                w-5
                rounded
                border-gray-300
                accent-[#519A09]
                focus:ring-[#01430D]
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
          className="w-full"
        >
          Finish Setup
        </Button>

        {/* FOOTER TEXT */}
        <Link
          href="/"
          className="
            block
            text-center
            text-sm
            font-medium
            text-[#519A09]
            transition
            hover:text-[#01430D]
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