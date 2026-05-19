"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Side */}
      <div className="flex w-full items-center justify-center px-6 py-10 md:w-1/2 lg:px-20">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/Agile-Cycle-Logo.png"
              alt="Agile Cycle Logo"
              width={100}
              height={77}
              priority
              className="h-auto w-auto"
            />
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="bg-gradient-to-r from-[#01430D] to-[#519A09] bg-clip-text text-[48px] mb-[25px] font-bold leading-[130%] text-transparent font-roboto">
              Sign In
            </h1>

            <p className="mt-3 text-[16px] text-gray-500">
              Don&apos;t have an account?{' '}
              <Link
                href="#"
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
                  className="absolute right-0 top-1/2 flex h-[40px] w-[54px] -translate-y-1/2 items-center justify-center rounded-br-[6px] rounded-tr-[6px] border-l border-[#CFD9E0] text-gray-500"
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
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />

                <span className="text-sm text-gray-500">
                  Remember me
                </span>
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
              className="w-full rounded-lg bg-green-900 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-400">
                OR
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 py-3 transition hover:bg-gray-50">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>

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
      </div>

      {/* Right Side */}
      <div className="relative hidden md:block md:w-1/2">
        <Image
          src="/agile-image1.jpg"
          alt="Agile Cycle Electric Bike"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}