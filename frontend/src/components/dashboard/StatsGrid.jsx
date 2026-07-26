import {
  FaDatabase,
  FaCheckCircle,
  FaTimesCircle,
  FaChartLine,
} from "react-icons/fa";

import KPICard from "./KPICard";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KPICard
        title="Predictions"
        value={stats.total_predictions}
        icon={<FaDatabase size={26} />}
        color="bg-blue-100 text-blue-600"
      />

      <KPICard
        title="Placed"
        value={stats.placed}
        icon={<FaCheckCircle size={26} />}
        color="bg-green-100 text-green-600"
      />

      <KPICard
        title="Not Placed"
        value={stats.not_placed}
        icon={<FaTimesCircle size={26} />}
        color="bg-red-100 text-red-600"
      />

      <KPICard
        title="Average Confidence"
        value={`${stats.average_confidence}%`}
        icon={<FaChartLine size={26} />}
        color="bg-purple-100 text-purple-600"
      />

    </div>
  );
}