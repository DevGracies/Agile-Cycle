"use client";

import Link from "next/link";
import { CircleCheckBig } from "lucide-react";

import Button from "../ui/Button";

const VerifyEmailForm = () => {
  return (
    <>
      {/* HEADING */}
      <div className="mb-10">

        {/* TITLE */}
        <h1 className="text-4xl tracking-tight text-[#01430D] leading-tight">
          <span className="font-bold">
            Welcome to Agile
          </span>{" "}
          <span className="font-medium text-[#519A09]">
            Cycle!
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-5 text-sm leading-6 text-gray-500">
          Your{" "}
          <span className="font-medium text-[#519A09]">
            account
          </span>{" "}
          is ready. Start{" "}
          <span className="font-medium text-[#519A09]">
            exploring
          </span>{" "}
          and{" "}
          <span className="font-medium text-[#519A09]">
            riding
          </span>{" "}
          with us.
        </p>
      </div>

      {/* SUCCESS ICON */}
      <div className="mb-10 flex justify-center">
        <div
          className="  flex h-20 w-20 items-center justify-center rounded-full border-[6px]
                        border-[#2D7A0B] bg-[#F4F8F2] shadow-sm"
        >
          <CircleCheckBig
            size={38}
            className="text-[#2D7A0B]"
          />
        </div>
      </div>

      {/* BUTTON */}
      <Button
        type="button"
        className="w-full"
      >
        Proceed to Homepage
      </Button>

      {/* FOOTER TEXT */}
      <Link
        href="/"
        className="mt-8 block  text-center text-sm font-medium text-[#519A09]  transition hover:text-[#01430D]">
        Be part of the Agile Cycle
        community.
      </Link>
    </>
  );
};

export default VerifyEmailForm;