import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"

export const Pagination = ({ setCurrentPage, totalPages, currentPage }: {
  setCurrentPage: any; 
  totalPages: number, 
  currentPage: number,
}) => {
  return (
    <div className="flex items-center gap-4">
          <button
          disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
            className="flex h-10.5 w-10.5 items-center disabled:opacity-60 disabled:cursor-not-allowed justify-center rounded-full bg-[#52A30D] text-white"
          >
            <ArrowBackRoundedIcon />
          </button>

          <div className="flex items-center gap-3">
            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <div
                key={index}
                className={`h-1.25 rounded-full transition-all ${
                  currentPage === index + 1
                    ? "w-6 bg-[#0F3D0F]"
                    : "w-3 bg-[#B7C7B0]"
                }`}
              />
            ))}
          </div>

          <button
          disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="flex h-10.5 w-10.5 items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed rounded-full bg-[#52A30D] text-white"
          >
            <ArrowForwardRoundedIcon />
          </button>
        </div>
  );
};

export const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={`font-semibold ${
        status === "Failed" ? "text-[#F04438]" : status === "Delivered" || status === "Successful" ? "text-[#5AA700]" : "text-[#FFA000]"
      }`}
    >
      {status}
    </span>
  );
};


export const ToggleSwitch = ({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      onClick={onToggle}
      className={`relative w-[42px] h-[24px] rounded-full cursor-pointer transition-all duration-300 ${
        enabled ? "bg-[#5AA700]" : "bg-[#A8A8A8]"
      }`}
    >
      <div
        className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all duration-300 ${
          enabled ? "left-[20px]" : "left-[3px]"
        }`}
      />
    </div>
  );
};