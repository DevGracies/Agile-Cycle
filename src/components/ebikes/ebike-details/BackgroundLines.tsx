export default function BackgroundLines() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M200 0C100 300 300 500 150 800"
          stroke="#B7D7A8"
          strokeWidth="2"
        />

        <path
          d="M900 0C1100 300 850 600 1000 800"
          stroke="#B7D7A8"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}