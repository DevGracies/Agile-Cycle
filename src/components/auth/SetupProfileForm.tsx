"use client";

import Link from "next/link";

import Button from "../ui/Button";
import Select from "../ui/CustomSelect";
import Loader from "../ui/Loader";
import { useSetUpProfile } from "@/src/hooks/useSetUpProfile";

const SetUpProfile = () => {
  const {
    country,
    setCountry,
    state,
    setState,
    ridingPurpose,
    setRidingPurpose,
    isLoading,
    handleSubmit,
  } = useSetUpProfile();

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">
        <h1 className="text-[45px] leading-[48px] font-bold bg-[linear-gradient(90deg,#01430D_0%,#519A09_100%)] bg-clip-text text-transparent">
          Set Up Your Profile
        </h1>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5">
        {/* COUNTRY */}
        <label className="text-gray-500">Select Country</label>
        <Select
          value={country ?? ""}
          onChange={(value) => setCountry(value as string)}
          placeholder="Country"
          options={["Nigeria", "Ghana", "Kenya", "South Africa"].map((val) => ({
            label: val,
            value: val,
          }))}
        />

        {/* STATE */}
        <label className="text-gray-500">Select State</label>
        <Select
          value={state ?? ""}
          onChange={(value) => setState(value as string)}
          placeholder="State"
          options={["Lagos", "Abuja", "Oyo", "Kano"].map((val) => ({
            label: val,
            value: val,
          }))}
        />

        {/* PURPOSE */}
        <label className="text-gray-500">Choose Riding Purpose</label>
        <Select
          value={ridingPurpose ?? ""}
          onChange={(value) => setRidingPurpose(value as string)}
          placeholder="Riding Purpose"
          options={["Commuting", "Tricycle", "Kekecycle"].map((val) => ({
            label: val,
            value: val,
          }))}
        />


        {/* BUTTON */}
        <Button
          type="submit"
          className="w-full mt-10">
          {isLoading ? <Loader /> : "Continue"}
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