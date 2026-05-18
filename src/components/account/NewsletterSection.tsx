// src/components/account/NewsletterSection.tsx
"use client";

import { useState } from "react";

interface NewsletterSectionProps {
  userEmail?: string;
  onSubscribe: (email: string) => Promise<void>;
  backgroundImage?: string; // optional prop to pass custom image path
}

export default function NewsletterSection({
  userEmail,
  onSubscribe,
  backgroundImage = "/agile-image1.jpg", // default path (put your image in public folder)
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetEmail = email || userEmail;
    if (!targetEmail) {
      setMessage("Please enter your email");
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      await onSubscribe(targetEmail);
      setMessage("Subscribed successfully!");
      setEmail("");
    } catch {
      setMessage("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a5f06] to-[#01430D] opacity-97" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 md:px-[70px] md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Be Part of Agile Cycle
          </h2>
          <p className="mb-12 text-base text-white/80 md:text-lg lg:text-xl">
            Subscribe to join our growing community of riders and get the latest
            updates, launches, and stories straight to your inbox.
          </p>

          <div className="mb-12">
            <p className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Subscribe &amp; Join
            </p>
            <p className="mb-6 text-base text-white/80 md:text-lg">
              Stay connected with Agile Cycle. Get exclusive news, product
              launches, and community highlights.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="h-12 w-full rounded-lg border border-white/40 bg-white/10 px-5 text-base text-white placeholder:text-white/60 outline-none focus:border-white/70 sm:w-96 md:h-14 md:text-lg"
              />
              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-lg border border-white/30 bg-white/20 px-6 text-base font-medium text-white transition-colors hover:bg-white/30 disabled:opacity-50 md:h-14 md:px-8 md:text-lg"
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
            {message && <p className="mt-4 text-base text-white/80">{message}</p>}
          </div>

          <div>
            <p className="mb-2 text-xl font-semibold text-white md:text-2xl">
              Contact Us
            </p>
            <p className="mb-6 text-base text-white/80 md:text-lg">
              Have questions or need support? Our team is here to help you every
              step of the way.
            </p>
            <button className="rounded-lg border border-white/60 px-6 py-2 text-base text-white transition-colors hover:bg-white/10 md:px-8 md:py-3 md:text-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}