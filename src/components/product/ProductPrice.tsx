import { formatPrice } from "@/src/lib/utils";

interface ProductPriceProps {
  price: number;
  oldPrice?: number;
}

const ProductPrice = ({ price, oldPrice }: ProductPriceProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-primary font-black text-lg">
        ₦{formatPrice(price)}
      </span>

      {oldPrice && (
        <span className="text-gray-400 line-through text-sm">
          ₦{formatPrice(oldPrice)}
        </span>
      )}
    </div>
  );
};

export default ProductPrice;