import { Loader2 } from "lucide-react";
import React from "react";

const Loader = ({ size = 24, text }: { size?: number; text?: string }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Loader2 className="animate-spin" size={size} />
      {text && <span>{text}</span>}
    </div>
  );
};

export default Loader;
