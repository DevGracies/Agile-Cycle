import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  onChange: (q: number) => void;
}

export default function QuantityControl({ quantity, onChange }: Props) {
  const handleMinus = () => {
    onChange(Math.max(1, quantity - 1));
  };

  const handleAdd = () => {
    onChange(quantity + 1);
  };
  return (
    <div className="flex items-center border border-[#c9c9c9] w-fit">
      <button onClick={handleMinus} className="px-2 py-1">
        <Minus size={16} />
      </button>

      <span className="w-10 flex items-center justify-center bg-primary/5">{quantity}</span>

      <button onClick={handleAdd} className="px-2 py-1">
        <Plus size={16} />
      </button>
    </div>
  );
}
