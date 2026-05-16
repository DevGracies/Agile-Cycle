import { Copy } from "lucide-react";

const AdminProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#e7ece5] p-6 shadow-sm">
      <h2 className="text-sm font-semibold text-[#1f2937] mb-8">
        Admin profile
      </h2>

      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#f1f5ef]">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="object-cover"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[#111827]">
          John Doe
        </h3>

        <div className="flex items-center gap-1 mt-1 text-sm text-[#6b7280]">
          <span>john.doe@example.com</span>
          <Copy size={14} />
        </div>

        <div className="flex items-center gap-1 mt-1 text-sm text-[#6b7280]">
          <span>08034858355</span>
          <Copy size={14} />
        </div>
      </div>
    </div>
  );
};

export default AdminProfileCard;