import Layout from "../components/layout/Layout";

import StatsGrid from "../components/dashboard/StatsGrid";
import LineChartCard from "../components/dashboard/LineChartCard";
import PieChartCard from "../components/dashboard/PieChartCard";
import BarChartCard from "../components/dashboard/BarChartCard";
import RecentPredictions from "../components/dashboard/RecentPredictions";

import useDashboard from "../hooks/useDashboard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

export default function Dashboard() {
  const { stats, loading } = useDashboard();

  if (loading) {
    return (
      <Layout>
        <DashboardSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8">

        <h1 className="mb-6 text-3xl font-black sm:text-4xl">
          📊 Dashboard
        </h1>

        <StatsGrid stats={stats} />

        <div className="mt-6">
          <LineChartCard />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PieChartCard />
          <BarChartCard />
        </div>

        <div className="mt-6">
          <RecentPredictions />
        </div>

      </div>
    </Layout>
  );
}