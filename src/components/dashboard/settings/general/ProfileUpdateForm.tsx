"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

import { Input } from "@/src/components/ui/Input";
import SectionCard from "@/src/components/shared/SectionCard";

import { UserProfile } from "@/src/types/index";
import { profileService } from "@/src/services/profile.service";
import toast from "react-hot-toast";

interface ProfileUpdateFormProps {
  profile: UserProfile;
}

const ProfileUpdateForm = ({ profile }: ProfileUpdateFormProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState(profile.avatar);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    phone: profile.phone,
    dateOfBirth: profile.dateOfBirth,
    address: profile.address,
  });

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    try {
      const uploadedImage = await profileService.uploadAvatar(file);
      setPreview(uploadedImage);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Failed to upload image");
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const updatedProfile = await profileService.updateProfile({
        ...form,
        avatar: preview,
      });
      toast.success("Profile updated successfully");
      console.log(updatedProfile);
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SectionCard className="h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-[#1f2937]">Profile update</h2>

        <button className="text-sm font-medium text-primary hover:underline">
          Edit
        </button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={preview}
            alt="Profile"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#01430D] hover:bg-[#0b4f13] text-white px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Upload new
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />

          <button
            type="button"
            onClick={() => setPreview(profile.avatar)}
            className="border border-[#d9dfd7] text-[#6b7280] px-5 py-2 rounded-lg text-sm hover:bg-gray-50"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <Input
          label="First name"
          placeholder="John"
          value={form.firstName}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />

        <Input
          label="Last name"
          placeholder="Doe"
          value={form.lastName}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
        />

        <Input
          label="Phone number"
          placeholder="08034858355"
          value={form.phone}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              phone: e.target.value,
            }))
          }
        />

        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">
            Date Of Birth
          </label>

          <div className="relative bg-[#ECFDF3]">
            <input
              type="date"
              value={form.dateOfBirth}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  dateOfBirth: e.target.value,
                }))
              }
              className="w-full border border-[#dfe6dc] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />

            <CalendarDays
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-[#6b7280] mb-2 block">Address</label>

          <textarea
            rows={4}
            value={form.address}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            className="w-full border border-[#dfe6dc] rounded-lg bg-[#ECFDF3] px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <button
          type="button"
          disabled={isLoading}
          onClick={handleSubmit}
          className="w-full bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white py-3 rounded-xl text-sm font-medium disabled:opacity-70"
        >
          {isLoading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </SectionCard>
  );
};

export default ProfileUpdateForm;
