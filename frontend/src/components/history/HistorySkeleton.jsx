export default function HistorySkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 animate-pulse">
      {/* Heading */}
      <div className="mb-8">
        <div className="h-8 w-72 rounded bg-slate-200"></div>
        <div className="mt-3 h-4 w-96 rounded bg-slate-200"></div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-28 rounded-xl bg-slate-200"
          />
        ))}
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="h-10 flex-1 rounded-lg bg-slate-200"></div>
        <div className="h-10 w-48 rounded-lg bg-slate-200"></div>
      </div>

      {/* Export Button */}
      <div className="mb-4 flex justify-end">
        <div className="h-10 w-36 rounded-lg bg-slate-200"></div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex border-b border-slate-200 p-4"
          >
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div
                key={j}
                className="mx-2 h-5 flex-1 rounded bg-slate-200"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}