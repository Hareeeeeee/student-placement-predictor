import { Search } from "lucide-react";

export default function HistoryFilters({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by degree or branch..."
          className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        <option value="All">All Predictions</option>
        <option value="Placed">Placed</option>
        <option value="Not Placed">Not Placed</option>
      </select>
    </div>
  );
}