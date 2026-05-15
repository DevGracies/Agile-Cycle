export const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label className="text-xs text-[#6b7280] mb-2 block">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#ECFDF3] border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
      />
    </div>
  );
};
