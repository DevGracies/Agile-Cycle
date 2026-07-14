"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "../ui/Button";
import toast from "react-hot-toast";
import { toggleSubscribeToNewsLetter } from "@/src/services/user.service";
import { useRouter } from "next/navigation";
import Loader from "../ui/Loader";

const NewsLetter = () => {
  const [newsletter, setNewsletter] = useState(false);
  const [tips, setTips] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const res = await toggleSubscribeToNewsLetter({isSubscribed: newsletter, isTipsEnabled: tips});
      toast.success(res.message || "Preferences updated successfully");
      router.push("/welcome")
    } catch(error){
      toast.error(error instanceof Error ? error.message : "Failed to update preferences");
    } finally{
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* HEADING */}
      <div className="mb-8">

        {/* TITLE */}
        <h1 className="text-[48px] leading-[48px] font-bold bg-[linear-gradient(90deg,#01430D_0%,#519A09_100%)] bg-clip-text text-transparent mb-8">
           Tailor Your Ride
          </h1>
        {/* SUBTEXT */}
        <p className="mt-4 text-sm leading-6 text-gray-500">
          Select how you’d like to stay{" "}
          <span className="font-medium text-[#519A09]">
            connected.
          </span>
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* CHECKBOXES */}
        <div className="space-y-4 ">

          {/* NEWSLETTER */}
          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={newsletter}
              onChange={() =>
                setNewsletter(!newsletter)
              }
              className="
                
                h-6
                w-6
                rounded
               
                accent-[#519A09]
                
              "
            />

            <span className="text-sm text-gray-600 ">
              Subscribe to newsletter /
              community updates
            </span>
          </label>

          {/* TIPS */}
          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={tips}
              onChange={() => setTips(!tips)}
              className="
                h-6
                w-6
                rounded
             
                accent-[#519A09]
               
              "
            />

            <span className="text-sm text-gray-600">
              Enable product tips &
              ride guides
            </span>
          </label>

        </div>

        {/* BUTTON */}
        <Button
          type="submit"
          className="w-full mt-12"
        >
          {isLoading ? <Loader /> : "Finish Setup"}
        </Button>

        {/* FOOTER TEXT */}
        <Link
          href="/"
          className="
            block
            text-center
            text-[20px]
            font-medium
            text-[#519A09]
            mt-10
          "
        >
          Be part of the Agile Cycle
          community.
        </Link>
      </form>
    </>
  );
};

export default NewsLetter;