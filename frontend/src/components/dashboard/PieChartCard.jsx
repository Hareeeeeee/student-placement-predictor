import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import usePlacementDistribution from "../../hooks/usePlacementDistribution";

const COLORS = ["#22c55e", "#ef4444"];

export default function PieChartCard() {
  const { data, loading } = usePlacementDistribution();

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Loading...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold">
        Placement Distribution
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}