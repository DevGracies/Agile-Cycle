"use client";

import AddMemberModal from "@/src/components/dashboard/settings/user-management/AddMemberModal";
import UserCard from "@/src/components/dashboard/settings/user-management/UserCard";
import Loader from "@/src/components/ui/Loader";
import { userManagementService } from "@/src/services/user-management.service";
import { CreateUserRequest, User } from "@/src/types/user";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserManagementPage = () => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [creatingUser, setCreatingUser] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const data = await userManagementService.getUsers();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async (payload: CreateUserRequest): Promise<User> => {
    setCreatingUser(true);
    try {
      const newUser = await userManagementService.createUser(payload);
      setUsers((prev) => [newUser, ...prev]);
      toast.success("User created successfully");
      return newUser;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Incomplete or invalid fields";
      throw errorMessage;
    } finally {
      setCreatingUser(false);
    }
  };

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

      {/* Loading State */}
      {loading ? (
        <Box
          className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm flex items-center justify-center`}
        >
          <Loader text="Loading users..." />
        </Box>
      ) : (
        // Users Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
      {/* Modal */}
      {modal && (
        <AddMemberModal
          setModal={setModal}
          onCreate={handleCreateUser}
          creatingUser={creatingUser}
        />
      )}
    </section>
  );
};

export default UserManagementPage;
