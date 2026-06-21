"use client";

import Link from "next/link";

import Button from "../ui/Button";
import Select from "../ui/Select";
import { Input } from "../ui/Input";

const SetUpProfile = () => {
  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
  };

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
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* PURPOSE */}
        <Select
          label=". Do you have electric bicycle or a regular bicycle?"
           placeholder="Electric Bicycle"
          options={["Commuting", "Tricycle", "Kekecycle"]}
          
          showIcon
        />

         <Input
                  label="If you do, what brand?"
                  type="text"
                  placeholder="Enter brand name"
                  
                />

         <div>
          <p>. Do you belong to any cycling club?</p>

          <div className="flex gap-10 mt-3">
            <Button variant="light"  className="w-29">
            Yes
            </Button>
            <Button variant="outline" className="w-29">
            No
            </Button>
          </div>
          </div>   

          <Input
                    label="If yes, which one?"
                    type="text"
                    placeholder="Enter club name"
                    
                  />
    

        {/* BUTTON */}
        <Button type="submit" className="w-full mt-10">
          Finish Setup
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