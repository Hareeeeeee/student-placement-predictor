import { Trash2 } from "lucide-react";

export default function HistoryTable({ history, onDelete }) {
  if (!history || history.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        <h2 className="text-xl font-semibold text-slate-700">
          No Records Found
        </h2>

        <p className="mt-2 text-slate-500">
          Try changing the search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead className="sticky top-0 bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                ID
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Degree
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Branch
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Prediction
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Confidence
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-700">
                Date
              </th>

              <th className="px-6 py-4 text-center font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="border-t transition-colors duration-200 hover:bg-slate-50"
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-700">
                  {item.id}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  {item.degree}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  {item.branch?.trim()}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      item.prediction === "Placed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.prediction}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {(item.confidence * 100).toFixed(2)}%
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                  {new Date(item.created_at).toLocaleString()}
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-lg p-2 text-red-600 transition hover:bg-red-100 hover:text-red-700"
                    title="Delete Prediction"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}