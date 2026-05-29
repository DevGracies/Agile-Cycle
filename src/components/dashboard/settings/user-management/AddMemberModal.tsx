"use client";

import Select from "@/src/components/ui/CustomSelect";
import { Input } from "@/src/components/ui/Input";
import Loader from "@/src/components/ui/Loader";
import { CreateUserRequest } from "@/src/types/index";
import { Camera, UploadCloud, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AddMemberModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCreate: (payload: CreateUserRequest) => Promise<void>;
  creatingUser: boolean;
};

const AddMemberModal = ({
  setModal,
  onCreate,
  creatingUser,
}: AddMemberModalProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [form, setForm] = useState<CreateUserRequest>({
    firstName: "",
    lastName: "",
    role: "Admin",
    email: "",
    phone: "",
    position: "",
    gender: "",
    image: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleChange = (key: keyof CreateUserRequest, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await onCreate(form);
      setModal(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
                {imagePreview ? (
                  <>
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 cursor-pointer bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center">
                      <p className="text-white text-sm font-medium bg-white/10 backdrop-blur-md p-4 rounded-full">
                        Change Photo
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      <Camera size={30} className="text-[#3f7f0d]" />
                    </div>

                    <p className="mt-5 text-sm font-semibold text-[#3f7f0d]">
                      Upload Photo
                    </p>

                    <p className="text-xs text-gray-500 mt-1 text-center px-6">
                      PNG, JPG up to 5MB
                    </p>
                  </>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (!file) return;

                    handleChange("image", file);

                    const previewUrl = URL.createObjectURL(file);
                    setImagePreview(previewUrl);
                  }}
                />
              </div>

              {/* Floating Upload Icon */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-secondary shadow-lg flex items-center justify-center">
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
            <Input
              label="First name"
              placeholder="John"
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <Input
              label="Last name"
              placeholder="Doe"
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <Input
              label="Email Address"
              placeholder="johndoe@gmail.com"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Input
              label="Phone Number"
              placeholder="+234 803 485 8355"
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <Input
              label="Position"
              placeholder="Chief Executive Officer"
              onChange={(e) => handleChange("position", e.target.value)}
            />
            <div className="w-full">
              <label className="text-xs text-[#6b7280] mb-2 block">
                Gender
              </label>
              <Select
                value={form.gender}
                onChange={(val) => handleChange("gender", val)}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                className="w-full"
              />
            </div>
          </form>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-start gap-4 mt-10">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading || creatingUser}
              className="w-full sm:w-fit bg-secondary hover:bg-[#022d0a] text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md transition-all duration-300"
            >
              {creatingUser ? <Loader text="Adding..." /> : "Add Member"}
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
