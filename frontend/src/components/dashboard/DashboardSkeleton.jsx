export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8 animate-pulse">
      {/* Heading */}
      <div className="mb-8 h-10 w-56 rounded-lg bg-slate-200" />

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-32 rounded-xl bg-white p-6 shadow"
          >
            <div className="h-4 w-24 rounded bg-slate-200" />
            <div className="mt-5 h-8 w-20 rounded bg-slate-300" />
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <div className="mb-6 h-5 w-40 rounded bg-slate-200" />
        <div className="h-80 rounded-lg bg-slate-200" />
      </div>

      {/* Pie & Bar */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-xl bg-white p-6 shadow"
          >
            <div className="mb-6 h-5 w-36 rounded bg-slate-200" />
            <div className="h-72 rounded-lg bg-slate-200" />
          </div>
        ))}
      </div>

      {/* Recent Predictions */}
      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <div className="mb-6 h-5 w-48 rounded bg-slate-200" />

        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="mb-4 flex items-center justify-between"
          >
            <div className="h-4 w-40 rounded bg-slate-200" />
            <div className="h-4 w-24 rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}