"use client";

import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <>
      <div className="mb-10">
        <h1 className="bg-gradient-to-r from-[#01430D] to-[#519A09] bg-clip-text text-[48px] font-bold leading-[100%] text-transparent">
          Reset Your Password
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Enter your registered email to receive a{" "}
          <span className="font-medium text-green-600">
            reset link
          </span>
          .
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-500">
            E-mail
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-green-600 focus:bg-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#053D10] py-4 font-semibold text-white transition hover:bg-green-900"
        >
          Send Reset Link
        </button>
      </form>

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