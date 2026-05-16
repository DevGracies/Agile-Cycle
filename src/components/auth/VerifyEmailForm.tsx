"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

const VerifyEmailForm = () => {
  const [timer, setTimer] = useState(30);
   const [newsletter, setNewsletter] = useState(false);

  const [tips, setTips] = useState(false);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
  };

  const handleResend = () => {
    setTimer(30);

    // logic here
    console.log("Verification code resent");
  };

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">

        {/* TITLE */}
        <h1 className="text-5xl tracking-tight text-[#01430D]">
          <span className="font-bold">
            Verify Your
          </span>{" "}
          <span className="font-medium text-[#519A09]">
            Email
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-sm leading-6 text-gray-500">
          We have sent a verification code to{" "}
          <span className="font-medium text-[#519A09]">
            example@gmail.com
          </span>
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* OTP INPUT */}
        <div className="relative">

          <Input
            label="Enter Code"
            type="text"
            placeholder="Input 6-digit code"
            className="pr-24"
          />

          {/* TIMER / RESEND */}
          <div className="absolute right-4 top-[42px]">

            {timer > 0 ? (
              <span className="text-sm text-gray-400">
                {timer}s
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="
                  text-sm
                  font-medium
                  text-[#519A09]
                  transition
                  hover:text-[#01430D]
                "
              >
                Resend Code
              </button>
            )}

          </div>
        </div>

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

            <div className="text-sm font-semibold text-gray-600">
              I agree to{" "}

              <span className="font-medium text-[#519A09]">
                Terms
              </span>{" "}

              &{" "}

              <span className="font-medium text-[#519A09]">
                Privacy Policy
              </span>
              .
            </div>
          </label>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          className="w-full"
        >
          Verify and Continue
        </Button>

        {/* FOOTER TEXT */}
        <div className="pt-2 text-center">

          <Link
            href="/"
            className="
              
              block
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
        </div>
      </form>
    </>
  );
};

export default VerifyEmailForm;