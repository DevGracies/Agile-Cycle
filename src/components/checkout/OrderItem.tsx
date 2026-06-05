import Image from "next/image";

export interface OrderItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;

  color?: string;
  battery?: string;
  size?: string;
  subtitle?: string;
}

export default function OrderItem({
  image,
  name,
  price,
  quantity,
  color,
  battery,
  size,
  subtitle,
}: OrderItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-primary/5 p-3">
      <div className="relative h-20 w-20 overflow-hidden rounded-lg">
        <Image
          fill
          src={image}
          alt={name}
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-medium text-primary">
            {name}
          </h4>

          {subtitle && (
            <p className="text-xs text-neutral-500">
              {subtitle}
            </p>
          )}

          {color && (
            <p className="text-xs text-neutral-500">
              Color: {color}
            </p>
          )}

          {battery && (
            <p className="text-xs text-neutral-500">
              Battery: {battery}
            </p>
          )}

          {size && (
            <p className="text-xs text-neutral-500">
              Size: {size}
            </p>
          )}

          {/* <p className="text-xs text-neutral-500">
            Qty × {quantity}
          </p> */}
        </div>

        <p className="font-semibold text-neutral-900">
          ₦{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}