"use client";

import Link from "next/link";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Image from "next/image";
import Select from "../ui/Select";

const SetUpProfile = () => {

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();;
  };

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">
        <div>
          <h1 className="text-5xl text-[#01430D] font-bold tracking-tight">
            <span className="font-bold">Set Up Your</span>{" "}
            <span className="font-medium text-[#519A09]">Profile</span>
          </h1>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Select Country"
          type="text"
          placeholder="Nigeria"
        />

        <Input
          label="Select State"
          type="text"
          placeholder="Lagos"
        />

         <Select
        label="Choose Riding Purpose"
        options={[
            "Commuting",
            "Tricycle",
            "Kekecycle",
        ]}
        />

        {/* BUTTON */}
        <Button
          type="submit"
          className="w-full"
        >
          Continue
        </Button>

        <Link
        href="/"
        className="block text-center text-sm text-green-600 font-medium mt-6 hover:text-[#01430D]"
        >
        Be part of the Agile Cycle community.
        </Link>
        
      </form>
    </>
  );
};

export default SetUpProfile;