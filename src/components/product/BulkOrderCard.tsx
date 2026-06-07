export default function BulkOrderCard() {
  return (
    <div className="bg-linear-to-r from-secondary rounded to-primary text-white p-4 space-y-5">
      <h3 className="uppercase font-bold text-lg">
        Want to order in bulk (i.e more than one)?
      </h3>

      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <p>Call: 08022908726</p>

        <span>OR</span>

        <p>Email us: <a href="mailto:service@agilecycle.com" target="_blank" className="underline">service@agilecycle.com</a></p>
      </div>

      <p className="text-sm opacity-90">
        All bulk orders include 7-year warranty and dedicated customer support
      </p>
    </div>
  );
}