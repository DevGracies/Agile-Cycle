import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  quantity: number;
}

export default function QuantityControl({ quantity }: Props) {
  const [q, setQ] = useState<number>(quantity);

  const handleMinus = () => {
    if (q > 1) {
      setQ((prev) => prev - 1);
    } else return;
  };
  
  const handleAdd = () => {
    setQ((prev) => prev + 1);
  };
  return (
    <div className="flex border rounded-md overflow-hidden">
      <button
        onClick={handleMinus}
        className="px-3 py-2 border-r"
      >
        <Minus size={16} />
      </button>

      <span className="w-10 flex items-center justify-center">{q}</span>

      <button 
      onClick={handleAdd}
      className="px-3 py-2 border-l">
        <Plus size={16} />
      </button>
    </div>
  );
}
