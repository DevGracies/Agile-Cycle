import { Pagination } from "../../dashboard/common/Dashboard";

interface Props {
  currentPage: number;
  totalPages: number;
  start?: number;
  end?: number;
  onPageChange: (page: number) => void
  totalItems?: number;
}

export default function PaginationFooter({
  currentPage,
  totalPages,
  start,
  end,
  onPageChange,
  totalItems,
}: Props) {
  return (
    <div className="flex flex-col md:grid grid-cols-4 items-center justify-between gap-6 rounded-xl bg-white p-5">
      <div className="md:ml-60 col-span-3 flex items-center justify-center gap-4">
        <Pagination
          setCurrentPage={onPageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>

      <div className="text-sm text-gray-600 flex justify-end">
        {start}-{end} of {totalItems} | Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}
