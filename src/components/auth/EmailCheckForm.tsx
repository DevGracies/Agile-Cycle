"use client";

import Link from "next/link";

export default function EmailCheckForm() {
  return (
    <>
      <div className="mb-10">
        <h1 className="bg-gradient-to-r from-[#01430D] to-[#519A09] bg-clip-text text-[48px] font-bold leading-[100%] text-transparent">
          Check Your Email
        </h1>

        <p className="mt-6 text-gray-500 leading-relaxed">
          We've sent a password{" "}
          <span className="font-medium text-green-600">
            reset link
          </span>{" "}
          to your email. If you don't see it, check your spam folder.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-500">
            E-mail
          </label>

          <div className="relative">
            <input
              type="email"
              value="example@gmail.com"
              disabled
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 pr-28 text-gray-400 outline-none"
            />

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-green-600 hover:text-green-700"
            >
              Resend link
            </button>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-[#053D10] py-4 font-semibold text-white transition hover:bg-green-900"
        >
          Open Email App
        </button>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/signin"
          className="font-medium text-green-600 underline underline-offset-4"
        >
          Back to Login
        </Link>
      </div>
    </>
  );
}