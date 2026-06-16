import Image from "next/image";

export default function AboutPage() {
  return (
   
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 pt-5 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-[12px] text-[#717378] mb-6">
        <span>HOME</span>
        <span className="text-[#519A09]">›</span>
        <span>About Us</span>
      </div>

      {/* Hero Banner */}
      <section className=" ">
        <Image
          src="/Home/about-us.png"
          alt="About Us Banner"
          width={1300}
          height={268}
          priority
          className="w-full h-auto"
        />
      </section>

      {/* Who We Are */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center py-10 lg:py-15">
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#111111] mb-6">
              Who We Are
            </h2>

            <p className="text-[16px] leading-[32px] text-[#333333] max-w-[560px]">
              At Agile Cycle, we believe in redefining urban mobility through
              innovation, sustainability, and community. We are more than just an
              eBike company, we are a movement dedicated to making everyday journeys
              smarter, greener, and more enjoyable.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Image
              src="/agile-cycle-logo.png"
              alt="Agile Cycle Logo"
              width={258}
              height={200}
              className="h-auto w-auto"
            />
          </div>
      </section>

      {/* Section 2 */}
      <section className="relative py-15 lg:py-25 overflow-hidden">
          {/* Background Stripe */}
          <Image
            src="/Home/about4.png"
            alt=""
            width={1006}
            height={633}
            className="hidden md:block absolute inset-0 w-full h-full object-contain pointer-events-none px-10 lg:px-20"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Image */}
            <div>
              <Image
                src="/Home/about1.png"
                alt="Our Mission"
                width={483}
                height={474}
                className="w-full h-auto"
              />
            </div>

            {/* Right Content */}
            <div>
             <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#111111] mb-6">
                Our Mission
              </h2>

              <p className="text-[16px] text-[#333333] mb-6">
                Our mission is simple:
              </p>

              <ul className="space-y-3 text-[16px] leading-[28px] text-[#333333]">
                <li>
                  • To provide <span className="text-[#519A09]">high-quality eBikes</span>
                  {" "}and accessories that meet the needs of commuters,
                  adventurers, and everyday riders.
                </li>

                <li>
                  • To deliver <span className="text-[#519A09]">expert servicing and maintenance</span>
                  {" "}that keeps every ride safe and reliable.
                </li>

                <li>
                  • To promote <span className="text-[#519A09]">eco-friendly transport solutions</span>
                  {" "}that reduce carbon emissions and support healthier cities.
                </li>
              </ul>
            </div>
          </div>
        </section>

      {/* Section 3 */}
      <section className="relative py-[60px] lg:py-[100px] overflow-hidden">
          {/* Background Stripe */}
          <Image
            src="/Home/about4.png"
            alt=""
            width={1006}
            height={633}
            className="hidden md:block absolute inset-0 w-full h-full object-contain pointer-events-none px-10 lg:px-20"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Image */}
            

            {/* Right Content */}
            <div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#111111] mb-[24px]">
                Our Story
              </h2>

              <p className="text-[16px] leading-[28px] sm:leading-[32px] text-[#333333] mb-[24px]">
                Agile Cycle was founded with a vision to make sustainable transport accessible to
                everyone. Over the years, we've grown into a trusted destination for riders who value
                performance, durability, and style. From our workshop to the streets, we've built a
                reputation for expert care and customer-first service.
              </p>

             
            </div>

            <div>
              <Image
                src="/Home/about1.png"
                alt="Our Mission"
                width={483}
                height={474}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

       {/* section 4 */}
        <section className="py-[60px] lg:py-[80px]">
          <div className="max-w-[900px] mx-auto text-center">

            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-[24px] sm:mb-[32px]">
             <Image
                src="/Home/Vector1.png"
                alt=""
                width={238}
                height={16}
                className="hidden sm:block"
              />

              <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-semibold text-[#111111] text-center">
                Our Community
              </h2>

             <Image
                src="/Home/Vector2.png"
                alt=""
                width={238}
                height={16}
                className="hidden sm:block"
              />
            </div>

            <p className="text-[16px] leading-[28px] sm:leading-[32px] text-[#333333] max-w-[720px] mx-auto">
              We’re proud to serve a diverse community of riders, commuters,
              fitness enthusiasts, explorers, and families. Every story shared by
              our customers inspires us to keep innovating and improving. Agile
              Cycle is not just about bikes; it’s about people, journeys, and
              experiences.
            </p>

          </div>
        </section>

       {/* section 5 */}
        <section className="relative py-[60px] lg:py-[100px] overflow-hidden">

        {/* Background Stripe */}
        <Image
          src="/Home/line2.png"
          alt=""
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[80px] items-center">

          {/* Left Image */}
          <div>
            <Image
              src="/Home/about3.png"
              alt="Our Values"
              width={520}
              height={520}
              className="w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="flex gap-4 items-start">
            <Image
              src="/Home/Vector3.png"
              alt=""
              width={16}
              height={156}
             className="hidden sm:block pt-33"
            />

          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#111111] mb-[24px] sm:mb-[32px]">
              Our Values
            </h2>

            <div className="space-y-4 sm:space-y-5 text-[16px] leading-[28px]">

              <p>
                <span className="text-[#519A09] font-medium">
                  Innovation –
                </span>{" "}
                Constantly improving designs and technology.
              </p>

              <p>
                <span className="text-[#519A09] font-medium">
                  Sustainability –
                </span>{" "}
                Promoting eco-friendly mobility solutions.
              </p>

              <p>
                <span className="text-[#519A09] font-medium">
                  Reliability –
                </span>{" "}
                Ensuring every ride is safe and dependable.
              </p>

              <p>
                <span className="text-[#519A09] font-medium">
                  Community –
                </span>{" "}
                Building connections through shared journeys.
              </p>

            </div>
          </div>

        </div>
        </div>
      </section>

    </main>
  );
}