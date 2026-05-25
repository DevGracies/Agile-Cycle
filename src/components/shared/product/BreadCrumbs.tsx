export default function BreadCrumbs() {
  return (
    <div className="flex items-center gap-3 text-[12px] uppercase tracking-wide">
      <span className="text-[#9d9d9d]">Home</span>

      <span className="text-[#9d9d9d]">{">"}</span>

      <span className="text-[#9d9d9d]">Ebikes</span>

      <span className="text-[#9d9d9d]">{">"}</span>

      <span className="text-[#6f6f6f] font-semibold">Agile Comet X</span>
    </div>
  );
}