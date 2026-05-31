import { X } from "lucide-react";

interface CartHeaderProps {
  onClose: () => void;
}

export default function CartHeader({ onClose }: CartHeaderProps) {
  return (
    <header className="h-20 border-b border-[1px] border-gray-200 px-6 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-[#222]">Shopping Cart</h2>

      <button
        onClick={onClose}
        aria-label="Close cart"
        className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-20 hover:bg-[#F5F5F5] cursor-pointer"
      >
        <X size={15} className="text-primary hover:text-secondary" />
      </button>
    </header>
  );
}
