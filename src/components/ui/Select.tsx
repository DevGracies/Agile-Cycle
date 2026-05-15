// components/ui/Select.tsx

import { ChevronDown } from "lucide-react";

type Props = {
  label?: string;
  options: string[];
};

const Select = ({ label, options }: Props) => {
  return (
    <div className="w-full">
      
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        
        <select
          className="
            h-12
            w-full
            appearance-none
            rounded-xl
            border
            border-gray-300
            bg-green-50
            px-4
            pr-12
            text-sm
            text-gray-700
            outline-none
            transition-all
            focus:border-[#01430D]
           
          "
        >
          {options.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>

        {/* ICON */}
        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />
      </div>
    </div>
  );
};

export default Select;