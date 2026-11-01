
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        Math.abs(i - currentPage) <= 1
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <nav
      aria-label="Product pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiChevronLeft size={17} />
        Previous
      </button>

      {getPages().map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            className="px-1 text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={
              currentPage === page ? "page" : undefined
            }
            className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-semibold transition ${
              currentPage === page
                ? "border-red-600 bg-red-600 text-white shadow-sm"
                : "border-gray-200 bg-white text-gray-700 hover:border-red-500 hover:text-red-600"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <FiChevronRight size={17} />
      </button>
    </nav>
  );
};

export default Pagination;
