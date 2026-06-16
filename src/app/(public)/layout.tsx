import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <div className="max-w-7xl w-full mx-auto px-3 py-7">
      {children}
    </div>
    </>
  );
}
