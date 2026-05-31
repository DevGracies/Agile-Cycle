export default function AboutSection() {
  return (
    <section className="bg-[#F5F7F5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="max-w-[900px] text-[32px] md:text-[40px] font-bold leading-tight text-black">
          Experience Expert eBike Care with Our Comprehensive Service
        </h2>

        <p className="mt-8 max-w-[760px] text-[16px] leading-[30px] text-[#4D4D4D]">
          At Agile Cycle, our team has long specialized in eBike maintenance
          and servicing. Regardless of the brand, our full-service shop is
          equipped to handle all your eBike needs. From essential repairs to
          detailed tune-ups and part replacements, we are your trusted
          all-in-one destination for reliable eBike care.
        </p>

        <button className="mt-8 flex items-center gap-2 text-[#519A09] font-medium">
          Our Location

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>
    </section>
  );
}