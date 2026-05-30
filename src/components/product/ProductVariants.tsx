const colors = ["bg-gray-200", "bg-[#7a4ba3]", "bg-[#123d84]", "bg-[#8b8f97]"];
export default function ProductVariants({
  active,
  setActive,
}: {
  active: string | null;
  setActive: (active: string | null) => void;
}) {
  return (
    <div className="space-y-7">
      <div>
        <h4 className="text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Colour <span className="text-black">• Sage</span>
        </h4>

        <div className="flex gap-4 mt-4">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setActive(color)}
              className={`w-10 h-10 rounded ${active === color ? "ring-2 ring-[#82b93c]" : ""} ${color}  cursor-pointer`}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Battery Size <span className="text-black">• 15Ah</span>
        </h4>

        <div className="flex gap-3 mt-4">
          <button className="bg-[#5ea314] text-white px-6 h-12 rounded-md font-semibold">
            15Ah
          </button>

          <button className="border border-[#82b93c] text-[#82b93c] px-6 h-12 rounded-md font-semibold">
            15Ah + 20Ah
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-[13px] uppercase text-[#7e7e7e] font-semibold">
            Size{" "}
            <span className="text-black">
              • Regular / 4&apos;11&quot; - 6&apos;3&quot;
            </span>
          </h4>
          <span className="text-[#6fa720] text-sm font-medium underline cursor-pointer">
            Size guide
          </span>
        </div>

        <button className="mt-4 bg-[#5ea314] text-white px-6 h-12 rounded-md font-semibold  cursor-pointer">
          Regular
        </button>
      </div>
    </div>
  );
}
