"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function SignInForm() {
  return (
    <div className="w-full max-w-md">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="bg-gradient-to-r from-[#01430D] to-[#519A09] bg-clip-text text-[48px] font-bold leading-[100%] text-transparent">
          Sign In
        </h1>

        <p className="mt-3 text-[16px] text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-green-600 underline underline-offset-4"
          >
            Create now
          </Link>
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            E-mail
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="@#*%"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
            />

            <button
              type="button"
              className="absolute right-0 top-1/2 flex h-[40px] w-[54px] -translate-y-1/2 items-center justify-center border-l border-[#CFD9E0] text-gray-500"
            >
              <RemoveRedEyeIcon style={{ fontSize: 20 }} />
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-600"
            />
            <span className="text-sm text-gray-500">Remember me</span>
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-green-600 underline underline-offset-4"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-green-900 py-4 text-sm font-semibold text-white hover:bg-green-800"
        >
          Sign in
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-400">
            OR
          </span>
        </div>
      </div>

      {/* Google Button */}
      <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 py-3 hover:bg-gray-50">
        <span className="text-sm font-medium text-gray-600">
          Continue with Google
        </span>
      </button>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-sm font-semibold text-green-600">
          Join the movement. Ride Agile.
        </p>
      </div>
    </div>
  );
}