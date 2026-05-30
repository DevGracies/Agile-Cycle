"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  value: string | number;
  onChange: (value: string | number) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function Select({
  value,
  onChange,
  options,
  placeholder = "Select...",
  disabled = false,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full sm:w-[300px] ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm sm:text-base bg-white outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32] disabled:opacity-60"
      >
        <span className={selected ? "text-black" : "text-gray-400"}>
          {selected?.label || placeholder}
        </span>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-50 mt-2 w-full rounded-lg border border-[#dfe6dc] bg-white shadow-lg overflow-hidden transition-all duration-200 origin-top
        ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        {options.map((opt) => (
          <div
            key={opt.value}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
            className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#ECFDF3] ${
              opt.value === value ? "bg-[#ECFDF3] font-medium" : ""
            }`}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
}