"use client";

import Link from "next/link";

import Button from "../ui/Button";
import Select from "../ui/Select";

const SetUpProfile = () => {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">
        <h1 className="text-[45px] leading-[48px] font-bold bg-[linear-gradient(90deg,#01430D_0%,#519A09_100%)] bg-clip-text text-transparent">
          Set Up Your Profile
        </h1>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* COUNTRY */}
        <Select
          label="Select Country"
           placeholder="Nigeria"
          options={["Nigeria", "Ghana", "Kenya", "South Africa"]}
        />

        {/* STATE */}
        <Select
          label="Select State"
           placeholder="Lagos"
          options={["Lagos", "Abuja", "Oyo", "Kano"]}
        />

        {/* PURPOSE */}
        <Select
          label="Choose Riding Purpose"
           placeholder="Commuting"
          options={["Commuting", "Tricycle", "Kekecycle"]}
          showIcon
        />

        {/* BUTTON */}
        <Button type="submit" className="w-full mt-10">
          Continue
        </Button>

        <Link
          href="/"
          className="block text-center text-[20px] text-[#519A09] font-medium mt-10 pb-10"
        >
          Be part of the Agile Cycle community.
        </Link>
      </form>
    </>
  );
};

export default SetUpProfile;