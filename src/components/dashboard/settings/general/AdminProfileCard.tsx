import Image from "next/image";

import CopyField from "@/src/components/dashboard/settings/general/CopyField";
import SectionCard from "@/src/components/shared/SectionCard";

import { UserProfile } from "@/src/types/index";

interface AdminProfileCardProps {
  profile: UserProfile;
}

const DEFAULT_AVATAR = "/images/default-avatar.png";

const AdminProfileCard = ({
  profile,
}: AdminProfileCardProps) => {
  return (
    <SectionCard>
      <h2 className="text-sm font-semibold text-[#1f2937] mb-8">
        Admin profile
      </h2>

      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#f1f5ef]">
          <Image
            src={profile.avatar || DEFAULT_AVATAR}
            alt={`${profile.firstName} ${profile.lastName}`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[#111827]">
          {profile.firstName} {profile.lastName}
        </h3>

        <CopyField value={profile.email} />

        <CopyField value={profile.phone} />
      </div>
    </SectionCard>
  );
};

export default AdminProfileCard;