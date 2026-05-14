import UserCard from "@/src/components/dashboard/settings/user-management/UserCard";
import React from "react";

type Users = {
  name: string;
  role: string;
  email: string;
  image: string;
};

const users: Users[] = [
  {
    name: "John Doe",
    role: "Admin",
    email: "johndoe@gmail.com",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Sarah Wilson",
    role: "CEO",
    email: "sarah@gmail.com",
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Michael Scott",
    role: "CTO",
    email: "michael@gmail.com",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Emma Watson",
    role: "Admin",
    email: "emma@gmail.com",
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    name: "Daniel Craig",
    role: "CEO",
    email: "daniel@gmail.com",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Sophia Lee",
    role: "CTO",
    email: "sophia@gmail.com",
    image: "https://i.pravatar.cc/300?img=6",
  },
];

const UserManagementPage = () => {
  return (
    <section>
        {/* Left Side */}
      <div className="flex items-center justify-between">
        <div className="bg-white rounded-xl flex items-center h-20 overflow-hidden pr-4">
          <div
            className="h-full flex items-center pl-8 pr-12 bg-gradient-to-r border from-[#01430D] to-[#519A09] text-white font-semibold text-sm"
            style={{
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
              minWidth: "320px",
            }}
          >
            Add a new member
          </div>

          <div
            className="w-14 h-14 bg-gradient-to-br from-[#06741b] to-[#519A09] rounded-tl-lg rounded-br-lg flex items-center justify-center text-white text-xl font-bold shadow-md"
            style={{ transform: "skewX(-24deg)" }}
          >
            <span style={{ transform: "skewX(24deg)" }}>+</span>
          </div>
        </div>

        {/* Right Side */}
        <p className="hidden lg:block text-gray-500 text-sm font-medium pr-20">
          Add a new member info to the system
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-10">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </section>
  );
};

export default UserManagementPage;
