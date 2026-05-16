import { CalendarDays } from "lucide-react";
import { Input } from "@/src/components/ui/Input";



const ProfileUpdateForm = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#e7ece5] p-6 shadow-sm h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-[#1f2937]">
          Profile update
        </h2>

        <button className="text-sm font-medium text-[#4f9b43] hover:underline">
          Edit
        </button>
      </div>

      {/* Image Upload */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="object-cover"
          />
        </div>

        <div className="flex gap-3">
          <button className="bg-[#01430D] hover:bg-[#0b4f13] text-white px-5 py-2 rounded-lg text-sm transition-colors">
            Upload new
          </button>

          <button className="border border-[#d9dfd7] text-[#6b7280] px-5 py-2 rounded-lg text-sm hover:bg-gray-50">
            Delete
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5">
        <Input label="First name" placeholder="John" />
        <Input label="Last name" placeholder="John" />
        <Input label="Password" placeholder="0#&/:" />
        <Input label="Phone number" placeholder="08034858355" />

        {/* Date */}
        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Date Of Birth
          </label>

          <div className="relative bg-[#ECFDF3]">
            <input
              type="text"
              placeholder="29 - April - 1801"
              className="w-full border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
            />

            <CalendarDays
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Address
          </label>

          <textarea
            rows={4}
            placeholder="Speedy House, Araromi Street Off Moloney/McCarthy Street, Onikan Lagos, Nigeria"
            className="w-full border border-[#dfe6dc] rounded-lg bg-[#ECFDF3] px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#2f7d32]/20 focus:border-[#2f7d32]"
          />
        </div>

        <button className="w-full bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white py-3 rounded-xl text-sm font-medium">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;