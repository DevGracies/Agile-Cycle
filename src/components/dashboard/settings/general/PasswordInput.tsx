"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput = ({
  placeholder,
  value,
  onChange,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#dfe6dc] bg-[#ECFDF3] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        aria-label="Toggle password visibility"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;