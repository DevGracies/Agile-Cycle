const roleColors: Record<string, string> = {
  Admin: "bg-[#ecfdf3] text-[#027A48]",
  CEO: "bg-[#eff6ff] text-[#175CD3]",
  CTO: "bg-[#fdf2fa] text-[#C11574]",
};

const UserCard = ({ user }: any) => {
  return (
    <div className="group flex flex-col items-center bg-white border border-[#edf2ea] rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Top */}
        <div className="relative w-30 h-30 rounded-full overflow-hidden ring-4 ring-[#f4f7f3]">
          <img
            src={user.image}
            alt={user.name}
            className="object-cover"
          />
        </div>

      {/* User Info */}
      <div className="mt-5 text-center">
        <h3 className="text-lg font-semibold text-[#111827]">
          {user.name}
        </h3>

        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mt-3 ${
            roleColors[user.role]
          }`}
        >
          {user.role}
        </div>

          <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;