export default function BulkOrderCard() {
  return (
    <div className="bg-linear-to-r from-[#01430D] to-[#519A09] text-white px-4 py-8">
      <h3 className="uppercase font-bold text-xl">
        Want to order in bulk (i.e more than one)?
      </h3>

      <div className="flex flex-col md:flex-row gap-4 md:items-center mt-5">
        <p>Call: 08022908726</p>

        <span>OR</span>

        <p>Email us: <a href="mailto:service@agilecycle.com" target="_blank" className="underline">service@agilecycle.com</a></p>
      </div>

      <p className="mt-5 text-sm opacity-90">
        All bulk orders include 7-year warranty and dedicated customer support
      </p>
    </div>
  );
}