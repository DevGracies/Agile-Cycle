import { ShoppingBasket } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <ShoppingBasket
        size={64}
        className="text-neutral-400"
      />

      <h3 className="mt-6 font-semibold text-lg">
        Your cart is currently empty
      </h3>

      <button
        className="
          mt-6
          text-primary
          font-medium
          hover:underline
          cursor-pointer
        "
      >
        Shop our products
      </button>
    </div>
  );
}