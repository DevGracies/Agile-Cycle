"use client";

import { Loader2 } from "lucide-react";
import { Lexend } from "next/font/google";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type ConfirmOptions = {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => Promise<void> | void;
};

type ConfirmContextType = (options: ConfirmOptions) => void;

const ConfirmContext = createContext<ConfirmContextType | null>(null);

const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const confirm: ConfirmContextType = (options) => {
    setOptions(options);
    setOpen(true);
  };

  const close = () => {
    if (loading) return;
    setOptions(null);
    setOpen(false);
  };

  const handleConfirm = async () => {
    if (!options) return;

    try {
      setLoading(true);
      await options.onConfirm();
      close();
    } catch {
      close();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Enter") handleConfirm();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, loading]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}

      {open && options && (
        <div
          onClick={handleOutsideClick}
          className={` ${lexend.className} fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur`}
        >
          <div
            ref={modalRef}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg font-bold">{options.title}</h2>
            </div>

            {/* Description */}
            {options.description && (
              <p className="text-md text-gray-600 mb-12">
                {options.description}
              </p>
            )}

            {/* Buttons */}
            <div className="flex justify-between gap-3 font-medium">
              <button
                onClick={handleConfirm}
                disabled={loading}
                className={`cursor-pointer md:px-8 md:py-3 px-4 py-2 rounded
                  text-md text-white flex items-center gap-2 
                  disabled:opacity-70 bg-[#01430D] hover:bg-[#0b4f13]`}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {options.confirmText ?? "Confirm"}
              </button>

              <button
                onClick={close}
                disabled={loading}
                className={`md:px-8 md:py-3 px-4 py-2 rounded text-md border-[2px] border-[#0b4f13] disabled:opacity-50 cursor-pointer 
                `}
              >
                {options.cancelText ?? "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};

export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used inside ConfirmProvider");
  }

  return context;
}

export default ConfirmProvider;
