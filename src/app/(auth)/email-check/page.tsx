import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EmailCheckPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Content Section */}
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

          <div className="absolute top-[187px] left-[96px] w-[528px] h-[136px] opacity-100 rotate-0">
            <h1 className="text-4xl font-bold text-[#053d10] tracking-tight">
              Check Your Email
            </h1>
            
            <p className="mt-10 text-gray-500 text-bold leading-relaxed">
              We've sent a password <span className="text-green-500 font-medium">reset link</span> to your email. If you don't see it, check your spam folder.
            </p>
          </div>

          <div className="absolute top-[380px] left-[96px] w-[528px] h-[194px] opacity-100 rotate-0 space-y-8">
            {/* E-mail Field with Resend Link */}
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-3">
                E-mail
              </label>
              <div className="relative">
                <input
                  type="email"
                  disabled
                  placeholder="example@gmail.com"
                  className="w-full rounded-md border border-gray-100 bg-green-50/20 px-4 py-4 text-gray-400 focus:outline-none cursor-not-allowed"
                />
                <button 
                  type="button" 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 text-sm font-medium hover:text-green-600"
                >
                  Resend link
                </button>
              </div>
            </div>

            {/* Open Email App Button */}
            <button
              className="w-full rounded-md bg-[#053d10] py-4 text-white font-semibold hover:bg-green-900 transition-colors"
            >
              Open Email App
            </button>
          </div>

          {/* Navigation Link */}
          <div className="absolute top-[600px] left-[302px] w-[117px] h-[27px] opacity-100 rotate-0">
            <Link 
              href="/sign-in" 
              className="text-green-600 font-medium underline underline-offset-8 decoration-1 hover:text-green-700"
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
          alt="Woman riding an Agile Cycle e-bike"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
