import { Expand } from "lucide-react";

interface Props {
  onAddToCart?: () => void;
  onView?: () => void;
}

const ProductActions = ({ onAddToCart, onView }: Props) => {
  return (
    <div className="flex gap-3">
      <button
        onClick={onAddToCart}
        className="flex-1 h-12 cursor-pointer bg-secondary hover:bg-[#0b4f13] transition-colors text-white rounded-md text-sm font-medium"
      >
        Add to cart
      </button>

      <button
        onClick={onView}
        className="w-12 rounded-xl cursor-pointer border border-secondary flex items-center justify-center"
      >
        <Expand className="text-secondary" />
      </button>
    </div>
  );
};

export default ProductActions;