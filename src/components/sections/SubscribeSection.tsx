import Image from "next/image";
import Container from "../layout/Container";
import image from "@/public/home/categories-image.png"

const SubscribeSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="background"
          fill
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-tr from-[#01430D]/95 to-[#0b4f13]/92" />
      </div>

      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-[52px] leading-tight font-bold">
            Be Part of Agile Cycle
          </h2>

          <p className="mt-5 text-white/90 text-base leading-8">
            Subscribe to join our growing community of riders and get the
            latest updates, launches, and stories straight to your inbox.
          </p>

          <div className="mt-14">
            <h3 className="text-2xl font-semibold">Subscribe & Join</h3>

            <p className="mt-4 text-white/90 leading-7">
              Stay connected with Agile Cycle. Get exclusive news, product
              launches, and community highlights.
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 rounded-xl border border-white/40 bg-transparent px-5 py-4 outline-none placeholder:text-white/70 text-white"
              />

              <button className="h-[56px] px-8 rounded-xl bg-white text-[#519A09] font-semibold hover:opacity-90 transition cursor-pointer">
                Subscribe Now
              </button>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-2xl font-semibold">Contact Us</h3>

            <p className="mt-4 text-white/90 leading-7">
              Have questions or need support? Our team is here to help you
              every step of the way.
            </p>

            <button className="mt-6 h-[54px] px-8 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#519A09] transition cursor-pointer">
              Get in Touch
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeSection;