import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Form Section */}
      <div className="flex w-full flex-col justify-center px-8 py-12 md:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/Agile-Cycle-Logo.png"
              alt="Agile Cycle Logo"
              width={100}
              height={77}
              className="absolute top-[60px] left-[96px] w-[100px] h-[77px] opacity-100 rotate-0"
              priority
            />
          </div>

          <div className="absolute top-[187px] left-[96px] w-[460px] h-[109px] opacity-100 rotate-0">
            <h1 className="text-4xl font-bold text-green-800 tracking-tight">
              Reset Your Password
            </h1>
            
            <p className="mt-6 text-gray-500 text-sm">
              Enter your registered email to receive a <span className="text-green-500 font-medium">reset link</span>.
            </p>
          </div>

          <form className="absolute top-[336px] left-[96px] w-[528px] h-[194px] opacity-100 rotate-0 space-y-8">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-3">
                E-mail
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-gray-200 bg-green-50/30 px-4 py-4 text-gray-600 placeholder:text-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#053d10] py-4 text-white font-semibold hover:bg-green-900 transition-colors"
            >
              Send Reset Link
            </button>
          </form>

          {/* Navigation Link */}
          <div className="absolute top-[580px] left-[302px] w-[117px] h-[27px] opacity-100 rotate-0">
            <Link 
              href="/sign-in" 
              className="text-green-600 font-medium underline underline-offset-4 decoration-1 hover:text-green-700"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Visual Section */}
      <div className="hidden w-1/2 md:block relative">
        <Image
          src="/agile-image3.jpg"
          alt="Agile Cycle Electric Bike"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}