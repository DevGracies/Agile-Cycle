"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CopyFieldProps {
  value: string;
}

const CopyField = ({ value }: CopyFieldProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      setCopied(false);
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error(error);
    } finally {
      setCopied(true);
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-1 mt-1 text-sm text-[#6b7280]"
      aria-label={`Copy ${value}`}
    >
      <span>{value}</span>

      {!copied ? <Copy size={14} /> : <Check size={14} />}
    </button>
  );
};

export default CopyField;
