import Image from "next/image";
import QuantityControl from "./QuantityControl";
import { Product } from "@/src/types/product";
import { formatPrice } from "@/src/utils/product";
import { CartItem as CartItemType } from "@/src/types/cart";

interface Props {
  item: CartItemType;
  onRemove: () => void;
  onChangeQty: (q: number) => void;
}

export default function CartItem({ item, onRemove, onChangeQty }: Props) {
  const product = item.product;
  return (
    <div className="shadow rounded-xl p-3 bg-green-50">
      <div className="flex gap-3">
        <Image
          src={product.images?.[0]?.url || "/fallback.png"}
          alt={product.images?.[0]?.alt || product.name}
          width={140}
          height={140}
          className="rounded-md object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between">
            <h4 className="font-semibold">{product.name}</h4>

            <span className="font-semibold">
              {formatPrice(product.originalPrice ?? 0).toLocaleString()}
            </span>
          </div>

          <div className="text-sm text-neutral-500 mt-1">
            Color: {product.specs?.color}
          </div>

          <div className="text-sm text-neutral-500">
            Battery: {product.specs?.batteryAh}
          </div>

          <div className="text-sm text-neutral-500">
            Size: {product.specs?.size}
          </div>

          <div className="flex items-center justify-between mt-3">
            <QuantityControl quantity={item.quantity} onChange={onChangeQty} />

            <button 
            onClick={onRemove}
            className="text-primary text-sm cursor-pointer hover:underline">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
