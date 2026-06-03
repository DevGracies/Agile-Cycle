import Link from "next/link";
import { Expand } from "lucide-react";
import { Product } from "@/src/types/product";
import { useCart } from "@/src/context/CartProvider";

interface Props {
  product: Product;
  card?: boolean;
  quantity?: number;
}

export default function ProductActions({ product, card, quantity }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="flex gap-3">
      <button
        onClick={() => addToCart(product, quantity ?? 1)}
        className="flex-1 h-12 bg-secondary hover:bg-[#0b4f13] transition-colors text-white rounded-md text-sm font-medium disabled:opacity-50"
      >
        Add to cart
      </button>

      {card && (
        <Link
          href={`/product/${product.id}`}
          className="w-12 rounded-xl border border-secondary flex items-center justify-center"
        >
          <Expand className="text-secondary" />
        </Link>
      )}
    </div>
  );
}
