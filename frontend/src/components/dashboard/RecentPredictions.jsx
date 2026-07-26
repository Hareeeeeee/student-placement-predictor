import useRecentPredictions from "../../hooks/useRecentPredictions";

export default function RecentPredictions() {
  const { predictions, loading } = useRecentPredictions();

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">Recent Predictions</h2>
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-5 text-lg font-semibold">
        Recent Predictions
      </h2>

      <div className="space-y-4">
        {predictions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3 last:border-none"
          >
            <div>
              <h3 className="font-medium text-slate-800">
                {item.degree}
              </h3>

              <p className="text-sm text-slate-500">
                {item.branch.trim()}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`font-semibold ${
                  item.prediction === "Placed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.prediction}
              </span>

              <p className="text-sm text-slate-500">
                {(item.confidence * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}