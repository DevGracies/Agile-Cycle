import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({
  label,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div>
      <label className="mb-2 block text-[16px] font-medium leading-[20px] tracking-[-0.15px] text-[#7A7A7A]">
  {label}
</label>

      <input
  className="w-full h-[55px] rounded-[8px] border border-[#CBE0CD] bg-[#F7FCF7] px-4 text-sm outline-none shadow-[inset_0px_2px_0px_0px_#E7EBEE33]"
  {...props}
/>
    </div>
  );
};
