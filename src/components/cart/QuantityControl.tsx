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
    <div className="flex border rounded-md overflow-hidden">
      <button onClick={handleMinus} className="px-3 py-2 border-r">
        <Minus size={16} />
      </button>

      <span className="w-10 flex items-center justify-center">{quantity}</span>

      <button onClick={handleAdd} className="px-3 py-2 border-l">
        <Plus size={16} />
      </button>
    </div>
  );
}
