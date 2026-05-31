import toast from "react-hot-toast";

interface Props {
  subtotal: number;
  isEmpty: boolean;
}

export default function CartFooter({
  subtotal,
  isEmpty,
}: Props) {
  return (
    <div className="border-t border-[1px] border-gray-200 p-6 bg-white">
      <div className="flex justify-between mb-4">
        <span className="font-medium">
          Subtotal
        </span>

        <span className="font-bold text-primary">
          ₦{subtotal.toLocaleString()}
        </span>
      </div>

      <button
        disabled={isEmpty}
        className="
          w-full
          h-12
          rounded-lg
          bg-secondary
          text-white
          font-medium
          disabled:opacity-50
        "
        onClick={() => {
            toast("Checkout Feature incoming...")
        }}
      >
        {isEmpty
          ? "Add to Cart"
          : `Checkout • ₦${subtotal.toLocaleString()}`}
      </button>

      <div className="mt-6 text-center">
        <p className="text-xs text-neutral-400 uppercase">
          100% Secure Payments
        </p>

        <div className="mt-3 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded bg-white px-1.5 py-1">
                <div className="h-5 w-5 rounded-full bg-red-500" />
                <div className="-ml-2.5 h-5 w-5 rounded-full bg-yellow-400 opacity-90" />
              </div>
              <div className="rounded text-[#1a1f71] px-2.5 py-1 text-md font-extrabold italic">VISA</div>
            </div>
        </div>
      </div>
    </div>
  );
}