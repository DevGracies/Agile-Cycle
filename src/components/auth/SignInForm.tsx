"use client";

import React, { useState } from "react";
import Link from "next/link";
import { login } from "@/src/services/auth.service";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import { apiError } from "@/src/services/api.service";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SignInForm() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ email, password });
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      toast.error(apiError(error) || "login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
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
      <form
        className="space-y-6"
        onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            E-mail
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
              type={showConfirmPassword ? "text" : "password"}
              placeholder="@#*%"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-gray-700 outline-none transition focus:border-green-600 focus:bg-white"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-0 top-1/2 flex h-[40px] w-[54px] -translate-y-1/2 items-center justify-center text-gray-500 transition hover:text-green-700"
            >
              <div className="flex h-10 items-center border-l border-l-gray-200 pl-3 px-5">
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </div>
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
          {isLoading ? <Loader text="Signing In" /> : "Sign In"}
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
      <button
        onClick={() => {
          setGoogleLoading(true);
          const redirect =
            new URLSearchParams(window.location.search).get("redirect") || "/";

          window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google?redirect=${encodeURIComponent(redirect)}`;
        }}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 py-3 hover:bg-gray-50">
        <span className="text-sm font-medium text-gray-600">
          {googleLoading ? (
          <Loader text="Redirecting to Google..." />
        ) : (
          <div className="flex items-center gap-4">
            <FcGoogle size={22} />
            Continue with Google
          </div>
        )}
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