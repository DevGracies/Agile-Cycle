
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, className, ...props }: Props) => {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`h-12 w-full rounded-xl border border-gray-300 bg-green-50 px-4 
                    text-sm text-gray-700 outline-none transition-all 
                    placeholder:text-gray-400 focus:border-green-600 ${className}`}
      />
    </div>
  );
};

export default Input;                                            