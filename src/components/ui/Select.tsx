import { ChevronDown } from "lucide-react";

type Props = {
  label?: string;
  options: string[];
  showIcon?: boolean;
  placeholder?: string;
};

const Select = ({
  label,
  options,
  showIcon = false,
  placeholder = "Select an option",
}: Props) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-[16px] font-medium leading-[20px] tracking-[-0.15px] text-[#7A7A7A]">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          defaultValue=""
          className="
            w-full
            h-[55px]
            appearance-none
            rounded-[8px]
            border
            border-[#CBE0CD]
            bg-[#F7FCF7]
            px-4
            pr-12
            text-sm
            text-gray-700
            outline-none
            shadow-[inset_0px_2px_0px_0px_#E7EBEE33]
          "
        >
          <option value="" disabled>
  {placeholder}
</option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        {showIcon && (
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7A7A7A]" />
        )}
      </div>
    </div>
  );
};

export default Select;