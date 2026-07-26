import StatCard from "./StatCard";

export default function HeroStats() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <StatCard
        icon="🎓"
        value={50000}
        suffix="+"
        label="Students"
      />

      <StatCard
        icon="⚡"
        value={99}
        suffix="%"
        label="Accuracy"
      />

      <StatCard
        icon="🤖"
        value={24}
        suffix="/7"
        label="AI Support"
      />

    </div>
  );
}