import {
  CreditCard,
  Info,
  Newspaper,
  PhoneCall,
  Search,
  ShieldCheck,
} from "lucide-react";

interface SupportItem {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

interface SupportSectionProps {
  supportItems: SupportItem[];
}

const icons = {
  search: Search,
  shield: ShieldCheck,
  blog: Newspaper,
  payment: CreditCard,
  info: Info,
  phone: PhoneCall,
};

export default function SupportSection({
  supportItems,
}: SupportSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">

      {supportItems.map((item, index) => {

        const Icon =
          icons[item.icon as keyof typeof icons];

        return (
          <div
            key={index}
            className={`flex items-start gap-4 rounded-xl p-5 min-h-[112px] w-full ${
              item.highlighted
                ? "bg-[#DDEEE1]"
                : "bg-[#F2F5F3]"
            }`}
          >

            {/* ICON */}
            <div className="text-[#519A09] shrink-0">

              <Icon className="w-8 h-8" />

            </div>

            {/* TEXT */}
            <div>

              <h3 className="text-[22px] font-medium text-black">
                {item.title}
              </h3>

              <p className="mt-2 text-[16px] text-black/80">
                {item.description}
              </p>

            </div>

          </div>
        );
      })}
    </div>
  );
}