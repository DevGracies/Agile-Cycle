import { ArrowLeft, ArrowRight } from "lucide-react";

const PaginationControls = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-12">
      <button className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center">
        <ArrowLeft className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-2">
        <span className="w-6 h-[2px] bg-primary" />
        <span className="w-2 h-[2px] bg-[#BDBDBD]" />
        <span className="w-2 h-[2px] bg-[#BDBDBD]" />
      </div>

      <button className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center">
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PaginationControls;