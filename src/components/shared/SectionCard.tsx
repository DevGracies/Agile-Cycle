import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

const SectionCard = ({
  children,
  className,
}: SectionCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#e7ece5] p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionCard;