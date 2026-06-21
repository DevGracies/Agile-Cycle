import { Search } from "lucide-react";

export default function CommentsSection() {
  return (
    <div className="mt-10">
      {/* Top Controls */}
      <div className="flex items-center gap-4 mb-6">
  {/* Filter */}
  <div className="flex items-center gap-2 text-sm bg-[#EDF2EE] px-4 h-10 rounded-md">
    <span className="text-gray-500">Filter</span>
    <div className="w-[1px] h-5 bg-[#519A09]" />
    <select className="h-9 text-sm pr-2 text-[#519A09] bg-transparent focus:outline-none">
      <option>Newest</option>
      <option>Oldest</option>
    </select>
  </div>

  {/* Search - Pushed to the right */}
  <div className="ml-auto">   {/* This is the key fix */}
    <div className="relative w-full max-w-md">
      <input
        placeholder="Search..."
        className="w-full h-10 bg-[#F0F7EB] border border-[#D1E4C7] rounded-md
                   px-5 pr-12 text-sm focus:outline-none focus:border-[#519A09]"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <Search />
      </div>
    </div>
  </div>
</div>

      {/* Join the conversation */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Join the conversation"
          className="w-full h-12 rounded-xl border border-[#519A09] px-5 text-sm focus:outline-none"
        />

        <div className="mt-3 flex justify-end gap-3">
          <button className="px-8 py-2.5 text-sm border border-[#519A09] text-[#519A09] rounded-xl hover:bg-gray-50">
            Cancel
          </button>
          <button className="px-8 py-2.5 text-sm bg-[#6AA121] text-white rounded-xl hover:bg-[#5A8F1C]">
            Comment
          </button>
        </div>
      </div>

    
    </div>
  );
}