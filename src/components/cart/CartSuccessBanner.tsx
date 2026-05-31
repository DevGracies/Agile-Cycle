import { Check } from "lucide-react";

export default function CartSuccessBanner() {
  return (
    <div
      className="
        flex items-center gap-20
        overflow-hidden
        rounded-lg
        border border-[#E7F4E4]
        bg-[#F6FBF4]
      "
    >
      <div
        className="
          bg-secondary
          text-white
          px-5
          py-4
          flex items-center justify-center
        "
        style={{
              clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
              minWidth: "80px",
            }}
      >
        <Check size={18} />
      </div>

      <div className="flex-1 px-4">
        <p className="text-sm font-medium text-primary">
          Product added to cart successfully
        </p>
      </div>
    </div>
  );
}