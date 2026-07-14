import Link from "next/link";
import { Expand } from "lucide-react";
import { useCart } from "@/src/context/CartProvider";
import { Accessories, Ebike } from "@/src/types/product";
import { ProductType } from "@/src/services/cart.service";

interface Props {
  product: Ebike | Accessories;
  card?: boolean;
  quantity?: number;
  type: ProductType;
}

export default function ProductActions({ product, card, quantity, type }: Props) {
  const { addToCart } = useCart();
  
  let productType;
  switch (type) {
    case "ebike":
      productType = "ebikes";
      break;
    case "accessory":
      productType = "accessories";
      break;
    case "enhancement":
      productType = "enhancements";
      break;
    default:
      productType = "ebikes";
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={() => addToCart(product._id, type, quantity ?? 1)}
        className="flex-1 w-full h-12 bg-secondary hover:bg-secondary/90 cursor-pointer transition-colors text-white rounded-md text-sm font-medium disabled:opacity-50"
      >
        Add to cart
      </button>

      {card && (
        <Link
          href={`/${productType}/${product._id}`}
          className="w-12 rounded-xl border border-secondary flex items-center justify-center"
        >
          <Expand size={20} className="text-secondary" />
        </Link>
      )}
    </div>
  );
}
