"use client";

import Link from "next/link";
import { Eye, EyeOff, Goal } from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";
import {Input} from "../ui/Input";
import Image from "next/image";

const SignupForm = () => {
  const [showPassword, setShowPassword] =useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">
        <div>
          <h1 className="text-5xl text-[#01430D] font-bold tracking-tight">
            <span className="font-bold">Sign</span>{" "}
            <span className="font-medium text-[#519A09]">Up</span>
          </h1>
        </div>

        <p className="mt-7 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#519A09] transition border-b"
          >
            Log in here 
          </Link>
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
        />

        <Input
          label="E-mail"
          type="email"
          placeholder="example@gmail.com"
        />

        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="@#*%"
            />
            
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-0 top-1/2 flex h-[40px] w-[54px] -translate-y-1/2 items-center justify-center text-gray-500 border-spacing-x-3 transition border-l hover:text-green-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <div className="relative">
            <Input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="@#*%"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-0 top-1/2 flex h-[40px] w-[54px] -translate-y-1/2 items-center justify-center text-gray-500 border-spacing-x-3 transition border-l hover:text-green-700"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          <p className="mt-2 text-xs text-[#519A09]">
            Use 8+ characters with a mix of uppercase,
            number, and symbol
          </p>
        </div>

        {/* BUTTON */}
        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Sign Up
        </Button>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-gray-300" />

          <span className="text-xs text-gray-400">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* GOOGLE BUTTON */}
       <Button
        type="button"
        variant="outline"
        className="w-full h-12 flex items-center px-4 gap-3"
      >
        <img 
          src="/auth/google-icon.png" 
          alt="Google" 
          className="w-5 h-5 shrink-0" 
        />
        <span className="flex-1 text-center font-medium">Continue with Google</span>
       </Button>

        
      </form>
    </>
  );
};

export default SignupForm;