"use client";

"use client";

export default function CommentSection() {
  return (
    <section className="mt-[60px] md:mt-[120px]">
      <h2 className="text-[20px] md:text-[24px] font-medium text-[#519A09] mb-[24px] md:mb-[40px]">
        Leave a comment
      </h2>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px] mb-[24px] ">
          
          <div>
            <label className="block text-[14px] text-[#333333] mb-[12px]">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-[52px] md:h-[56px] rounded-[8px] border border-[#DCE7D4] bg-[#ddeee170] px-[16px] outline-none"
            />
          </div>

          <div>
            <label className="block text-[14px] text-[#333333] mb-[12px]">
              E-mail
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full h-[52px] md:h-[56px] rounded-[8px] border border-[#8BC34A] bg-[#ddeee170] px-[16px] outline-none"
            />
          </div>

        </div>

        <div>
          <label className="block text-[14px] text-[#333333] mb-[12px]">
            Comment
          </label>

          <textarea
            placeholder="Content"
            className="w-full h-[180px] md:h-[220px] rounded-[8px] border border-[#DCE7D4] bg-[#ddeee170] p-[16px] resize-none outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-[24px] md:mt-[40px] h-[48px] px-[28px] rounded-[6px] bg-[#519A09] text-white text-[14px] font-medium w-full sm:w-auto"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
}