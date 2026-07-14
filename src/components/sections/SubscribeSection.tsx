"use client";

import Image from "next/image";
import Container from "../layout/Container";
import image from "@/public/home/categories-image.png"
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import { subscribeToNewsLetter } from "@/src/services/user.service";
import Loader from "../ui/Loader";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true)
    try {
      if(!email) {
        toast("Please enter your email")
      }
      const res = await subscribeToNewsLetter(email);
      toast.success(res.message || "Successfully subscirbed");
      setEmail("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to subscribe to newsletter")
    } finally {
      setIsSubscribing(false);
    }
  }
  return (
    <section className="relative overflow-hidden mt-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="background"
          fill
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-tr from-secondary/92 to-primary/95" />
      </div>

      <Container className="relative z-10 py-20 md:py-24">
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-[52px] leading-tight font-bold">
            Be Part of Agile Cycle
          </h2>

          <p className="mt-2 text-white/90 text-base leading-8">
            Subscribe to join our growing community of riders and get the
            latest updates, launches, and stories straight to your inbox.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Subscribe & Join</h3>

            <p className="mt-2 text-white/90 leading-7">
              Stay connected with Agile Cycle. Get exclusive news, product
              launches, and community highlights.
            </p>

            <form onSubmit={handleSubmit} className="mt-2 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-white/40 bg-transparent px-5 py-4 outline-none placeholder:text-white/70 text-white"
              />

              <button
                type="submit"
                className="h-[56px] px-8 rounded-xl bg-white text-[#519A09] font-semibold hover:opacity-90 transition cursor-pointer">
                {isSubscribing ? <Loader /> : "Subscribe Now"}
              </button>
            </form>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Contact Us</h3>

            <p className="mt-2 text-white/90 leading-7">
              Have questions or need support? Our team is here to help you
              every step of the way.
            </p>

            <button className="mt-2 h-[54px] px-8 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#519A09] transition cursor-pointer">
              <a href="mailto:agilecycle@gmail.com" target="_blank" className="size-full">Get in Touch</a>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeSection;