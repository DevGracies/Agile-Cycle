'use client'

import { cn } from '@/src/lib/utils'

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems?: number
  itemsPerPage?: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems = 50,
  itemsPerPage = 10,
}: PaginationProps) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  // Generate page dots (show 3 dots max)
  const getDots = () => {
    const dots = []
    const maxDots = 3
    for (let i = 0; i < Math.min(totalPages, maxDots); i++) {
      dots.push(i + 1)
    }
    return dots
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center py-4 sm:py-6 relative gap-4 sm:gap-0">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Previous Button */}
        <button
          onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className={cn(
            'w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all border-2',
            isFirstPage
              ? 'border-[#519A09]/40 text-[#519A09]/40 cursor-not-allowed'
              : 'border-[#519A09] text-[#519A09] hover:bg-[#519A09] hover:text-white'
          )}
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Page Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 mx-1 sm:mx-2">
          {getDots().map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                'h-1 rounded-full transition-all',
                page === currentPage
                  ? 'w-6 sm:w-8 bg-[#01430D]'
                  : 'w-5 sm:w-6 bg-[#01430D]/30 hover:bg-[#01430D]/50'
              )}
              aria-label={`Go to page ${page}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => !isLastPage && onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={cn(
            'w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all border-2',
            isLastPage
              ? 'border-[#519A09]/40 text-[#519A09]/40 cursor-not-allowed'
              : 'border-[#519A09] text-[#519A09] hover:bg-[#519A09] hover:text-white'
          )}
          aria-label="Next page"
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Page Info */}
      <span className="sm:absolute sm:right-4 lg:right-6 text-xs sm:text-sm text-[#717378]">
        Showing {startItem}-{endItem} of {totalItems}
      </span>
    </div>
  )
}
