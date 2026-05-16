"use client"

import AddMemberModal from "@/src/components/dashboard/settings/user-management/AddMemberModal";
import UserCard from "@/src/components/dashboard/settings/user-management/UserCard";
import React, { useState } from "react";

export type Users = {
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
  const [modal, setModal] = useState<boolean>(false)
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        {/* Left CTA */}
        <div className="max-sm:mx-4 bg-white rounded-xl flex items-center h-[72px] sm:h-20 overflow-hidden pr-4 w-full lg:w-fit">
          <div
            className="h-full flex items-center pl-5 sm:pl-8 pr-10 sm:pr-12 bg-gradient-to-r from-[#01430D] to-[#519A09] text-white font-semibold text-sm sm:text-base"
            style={{
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              minWidth: "220px",
            }}
          >
            Add a new member
          </div>

          {/* Plus Icon */}
          <button
          onClick={() => setModal(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#06741b] to-[#519A09] rounded-tl-lg rounded-br-lg flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md ml-3"
            style={{ transform: "skewX(-30deg)" }}
          >
            <span style={{ transform: "skewX(24deg)" }}>+</span>
          </button>
        </div>

        {/* Right Text */}
        <p className="max-sm:px-4 text-gray-500 text-sm sm:text-base font-medium lg:pr-10">
          Add a new member into the system
        </p>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      {modal && <AddMemberModal setModal={setModal} />}
    </section>
  );
};

export default UserManagementPage;
