export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition ${
            currentPage === page
              ? "bg-blue-600 text-white shadow-md"
              : "border border-slate-300 bg-white hover:bg-slate-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
      >
        Next
      </button>
    </div>
  );
}