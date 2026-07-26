import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import useBranchDistribution from "../../hooks/useBranchDistribution";

export default function BarChartCard() {
  const { data, loading } = useBranchDistribution();

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
        Branch Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="branch" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}