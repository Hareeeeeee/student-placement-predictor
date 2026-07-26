export default function HistoryStats({ history }) {
  const stats = history.reduce(
    (acc, item) => {
      acc.total++;

      if (item.prediction === "Placed") {
        acc.placed++;
      } else {
        acc.notPlaced++;
      }

      acc.confidence += item.confidence;

      return acc;
    },
    {
      total: 0,
      placed: 0,
      notPlaced: 0,
      confidence: 0,
    }
  );

  const avgConfidence =
    stats.total === 0
      ? 0
      : (stats.confidence / stats.total) * 100;

  const cards = [
    {
      title: "Total Records",
      value: stats.total,
    },
    {
      title: "Placed",
      value: stats.placed,
    },
    {
      title: "Not Placed",
      value: stats.notPlaced,
    },
    {
      title: "Avg Confidence",
      value: `${avgConfidence.toFixed(1)}%`,
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl bg-white p-5 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm font-medium text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-800 sm:text-3xl">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}