"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";
import { Input } from "../ui/Input";
import { signUp } from "@/src/services/auth.service";
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import { useRouter } from "next/navigation";
import { apiError } from "@/src/services/api.service";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!name.trim() || !email.trim() || !password || !confirmPassword) {
        toast.error("Please fill in all fields");
        return;
      }

      if (password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      await signUp({ name, email, password });
      toast.success("Account created successfully");
      router.push("/verifyEmail");
    } catch (error) {
        toast.error(apiError(error) || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">
        <h1 className="text-[48px] leading-[48px] font-bold bg-[linear-gradient(90deg,#01430D_0%,#519A09_100%)] bg-clip-text text-transparent pb-8">
          Sign Up
        </h1>

        <p className="text-sm text-gray-600 text-[18px]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#519A09] border-b">
            Log in here
          </Link>
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="John Doe"
        />

        <Input
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
              label={""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 flex h-[40px] w-[54px] -translate-y-1/2 items-center justify-center text-gray-500 transition hover:text-green-700"
            >
              <div className="flex h-10 items-center border-l border-l-gray-200 pl-3 px-5">
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </div>
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
              type={showConfirmPassword ? "text" : "password"}
              placeholder="@#*%"
              label={""}
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
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
          {/* ✅ CONDITIONAL HINT */}
          {password.length > 0 && password.length < 8 && (
            <p className="mt-2 text-xs text-[#01430D]">
              Use 8+ characters with a mix of uppercase, number, and symbol
            </p>
          )}
        </div>

        {/* BUTTON */}
        <Button type="submit" className="w-full">
          {isLoading ? <Loader text="Creating Account" /> : "Sign Up"}
        </Button>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-[#7A7A7A]" />

          <span className="text-[12px] font-medium text-[#7A7A7A]">
            OR
          </span>

          <div className="h-px flex-1 bg-[#7A7A7A]" />
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
          <span className="flex-1 text-center font-medium text-[18px]">
            Continue with Google
          </span>
        </Button>
      </form>
    </>
  );
};

export default SignupForm;