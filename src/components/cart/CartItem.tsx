import Image from "next/image";
import QuantityControl from "./QuantityControl";
import { Product } from "@/src/types/product";

interface Props {
  item: Product;
}

export default function CartItem({
  item,
}: Props) {
  return (
    <div className="shadow rounded-xl p-3 bg-green-50">
      <div className="flex gap-3">
        <Image
          src={item.image as string}
          alt={item.name}
          width={140}
          height={140}
          className="rounded-md object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between">
            <h4 className="font-semibold">
              {item.name}
            </h4>

            <span className="font-semibold">
              ₦{item.price.toLocaleString()}
            </span>
          </div>

          <div className="text-sm text-neutral-500 mt-1">
            Color: {item.specs?.color}
          </div>

          <div className="text-sm text-neutral-500">
            Battery: {item.specs?.battery}
          </div>

          <div className="text-sm text-neutral-500">
            Size: {item.specs?.size}
          </div>

          <div className="flex items-center justify-between mt-3">
            <QuantityControl
              quantity={item.quantity ?? 1}
            />

            <button className="text-primary text-sm cursor-pointer hover:underline">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
