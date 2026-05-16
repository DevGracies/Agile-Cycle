"use client"

import { Input } from "@/src/components/ui/Input";
import { Camera, UploadCloud, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AddMemberModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddMemberModal = ({ setModal }: AddMemberModalProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300
  ${
    show
      ? "bg-black/60 backdrop-blur-sm opacity-100"
      : "bg-black/0 backdrop-blur-0 opacity-0"
  }`}
    >
      <div
  className={`relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto transition-all duration-300 ease-out
  ${
    show
      ? "opacity-100 scale-100 translate-y-0"
      : "opacity-0 scale-95 translate-y-4"
  }`}
>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#eef2ec] px-5 sm:px-8 py-5 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#111827]">
              Add New Member
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Fill in the information below to create a new team member.
            </p>
          </div>

          <button
            onClick={() => setModal(false)}
            className="w-10 h-10 rounded-xl border border-[#e5ebe3] flex items-center justify-center hover:bg-[#f7faf6] transition-colors"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8">
          {/* Upload Section */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-10">
            {/* Upload Box */}
            <div className="relative group">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-3xl bg-gradient-to-br from-[#effcf2] to-[#dff5e6] border-2 border-dashed border-[#8cc79a] flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                  <Camera size={30} className="text-[#3f7f0d]" />
                </div>

                <p className="mt-5 text-sm font-semibold text-[#3f7f0d]">
                  Upload Photo
                </p>

                <p className="text-xs text-gray-500 mt-1 text-center px-6">
                  PNG, JPG up to 5MB
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  //   onChange={}
                />
              </div>

              {/* Floating Upload Icon */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-[#01430D] shadow-lg flex items-center justify-center">
                <UploadCloud size={20} className="text-white" />
              </div>
            </div>

            {/* Upload Text */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-lg font-semibold text-[#111827]">
                Profile Image
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-md">
                Upload a professional photo for the member profile. This image
                will appear across the dashboard and team management sections.
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input label="First name" placeholder="John" />
            <Input label="Last name" placeholder="Doe" />
            <Input label="Email Address" placeholder="johndoe@gmail.com" />
            <Input label="Phone Number" placeholder="+234 803 485 8355" />
            <Input label="Position" placeholder="Chief Executive Officer" />
            <Input label="Gender" placeholder="Male" />
          </form>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-start gap-4 mt-10">
            <button
              type="submit"
              className="w-full sm:w-fit bg-[#01430D] hover:bg-[#022d0a] text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md transition-all duration-300"
            >
              Add Member
            </button>

            <button
              type="button"
              onClick={() => setModal(false)}
              className="w-full sm:w-fit border border-[#d9dfd7] text-[#6b7280] px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
