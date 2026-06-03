import { ArrowRight } from "lucide-react";

type SidebarProps = {
  activeDropdown: string | null;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const sidebarData = {
  Ebikes: [
    "Cruisers",
    "Commuters",
    "Cargo Bikes",
    "Folding Bikes",
    "Utility Bikes",
    "Trikes",
    "Ride share",
  ],

  Accessories: [
    "Lights",
    "Carrier bags",
    "Mirrors",
    "Helmets",
    "Phone holders",
    "Electric pump",
    "Batteries",
  ],

  Enhancements: [
    "Performance",
    "Comfort",
    "Safety",
    "Technology",
    "Utility",
    "Style",
  ],

  Explore: [],

  Support: [
    "Services",
  ],
};

export default function CategorySidebar({
  activeDropdown,
  selectedCategory,
  setSelectedCategory,
}: SidebarProps) {
  if (!activeDropdown) return null;

  const currentCategories =
    sidebarData[
      activeDropdown as keyof typeof sidebarData
    ] || [];

  const sidebarTitle =
    activeDropdown === "Explore"
      ? "Explore Our Services"
      : activeDropdown;

  return (
    <aside className="w-[230px] shrink-0 pt-1">

      {/* TITLE */}
      <h2 className="text-[20px] leading-[44px] font-medium text-[#01430DCC] tracking-tight mb-8">
        {sidebarTitle}
      </h2>

      {/* CATEGORIES */}
      {currentCategories.length > 0 && (

        <div className="flex flex-col gap-[15px]">

          {currentCategories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                w-[210px]
                h-[52px]
                px-[10px]
                py-[4px]
                text-left
                transition-all
                duration-200
                text-[20px]
                ${
                  selectedCategory === category
                    ? "bg-[linear-gradient(90deg,#519A09_0%,rgba(221,238,225,0)_100%)] text-black/80 font-normal"
                    : "text-[#666666] hover:bg-gray-100 hover:text-[#01430D]"
                }
              `}
            >
              {category}
            </button>

          ))}

          {/* ALL BUTTON */}
          {activeDropdown !== "Support" && (
            <button className="h-[52px] px-[10px] py-[4px] flex items-center gap-4">
             <span className="text-[20px] leading-[44px] font-bold text-black/80 whitespace-nowrap">
                All {activeDropdown}
              </span>

             <ArrowRight
                className="w-6 h-6 text-black/80 shrink-0"
                strokeWidth={2}
              />

            </button>
          )}

        </div>

      )}

    </aside>
  );
}