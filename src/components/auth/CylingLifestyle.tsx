"use client";

import Link from "next/link";

import Button from "../ui/Button";
import { Input } from "../ui/Input";
import Select from "../ui/CustomSelect";
import { BikeType } from "@/src/types/user";
import Loader from "../ui/Loader";
import { useCyclingExperience } from "@/src/hooks/useCyclingExperience";

const SetUpProfile = () => {

  const {
    bikeType,
    setBikeType,
    bikeBrand,
    setBikeBrand,
    clubName,
    setClubName,
    belongsToClub,
    setBelongsToClub,
    isLoading,
    handleSubmit,
  } = useCyclingExperience();
  console.log(belongsToClub)
  return (
    <>
      {/* HEADING */}
      <div className="mb-8 space-y-8">
        <h1 className="text-[45px] leading-[48px] font-bold bg-[linear-gradient(90deg,#01430D_0%,#519A09_100%)] bg-clip-text text-transparent">
          Cycling Lifestyle
        </h1>


        <p className="text-sm text-gray-600 text-[18px]">
          Help us know your {" "}
          <Link href="/login" className="text-[#519A09] ">
            cycling habits.
          </Link>
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}
        className="space-y-5">

        <p className="text-gray-500 font-medium">Do you own a bike?</p>
        <Select
          value={bikeType ?? ""}
          onChange={(value) => setBikeType(value as BikeType)}
          placeholder="Electric Bicycle"
          options={[
            {
              label: "Commuting",
              value: "commuting",
            },
            {
              label: "Tricycle",
              value: "tricycle",
            },
            {
              label: "Kekecycle",
              value: "kekecycle",
            },
          ]}
          className="w-full!"
        />

        <Input
          label="If you do, what brand?"
          type="text"
          placeholder="Enter brand name"
          value={bikeBrand}
          onChange={(e) => setBikeBrand(e.target.value)}
        />

        <div>
          <p className="text-gray-500 font-medium">Do you belong to any cycling club?</p>

          <div className="flex gap-10 mt-3">
            <button
              onClick={() => setBelongsToClub("yes")}
              type="button"
              className={`flex items-center justify-center rounded font-semibold disabled:cursor-not-allowed h-12 px-8 border border-gray-300 text-sm disabled:opacity-70 ${belongsToClub === "yes" ? "bg-secondary text-[#F7FAFC]" : "text-secondary"} text-[20px]`}
            >
              Yes
            </button>
            <button
              onClick={() => setBelongsToClub("no")}
              type="button"
              className={`flex items-center justify-center rounded font-semibold disabled:cursor-not-allowed h-12 px-8 border border-gray-300 text-sm disabled:opacity-70 ${belongsToClub === "no" ? "bg-secondary text-[#F7FAFC]" : "text-secondary"} text-[20px]`}
            >
              No
            </button>
          </div>
        </div>

        <Input
          label="If yes, which one?"
          type="text"
          placeholder="Enter club name"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          disabled={belongsToClub === "no"}
        />


        {/* BUTTON */}
        <Button type="submit" className="w-full mt-10">
          {isLoading ? <Loader /> : "Finish Setup"}
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