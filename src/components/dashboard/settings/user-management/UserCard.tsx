import { ROLE_STYLES } from "@/src/constants";
import { User } from "@/src/types";
import Image from "next/image";

const DEFAULT_AVATAR = "/images/default-avatar.png";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="group flex flex-col items-center bg-white border border-[#edf2ea] rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Avatar */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#f4f7f3]">
        <Image
          src={user.image || DEFAULT_AVATAR}
          alt={`${user.firstName} ${user.lastName}` || "User Avatar"}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-5 text-center">
        <h3 className="text-lg font-semibold text-[#111827]">
          {user.firstName} {user.lastName}
        </h3>

        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mt-3 ${
            ROLE_STYLES[user.role]
          }`}
        >
          {user.role}
        </div>

        <p className="text-sm text-gray-500 mt-2">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;