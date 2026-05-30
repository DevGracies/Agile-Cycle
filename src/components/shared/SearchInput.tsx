import { Search } from "lucide-react";
import React from "react";

type SearchInputProps = {
    value?: string, 
    onChange?: (value: string) => void,
    placeholder?: string
    className?: string;
}
const SearchInput = ({value, onChange, placeholder, className} : SearchInputProps) => {
  return (
    <div className={`flex justify-between w-full max-w-2xl mx-auto h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-primary ${className}`}>
      <input
        type="text"
        value={value}
        onChange={() => onChange}
        placeholder={placeholder}
        className="outline-none w-full"
      />

      <div className=" flex items-center gap-3">
        <span className="w-[1px] h-5 bg-primary" />
        <Search className="text-primary" size={18} />
      </div>
    </div>
  );
};

export default SearchInput;
