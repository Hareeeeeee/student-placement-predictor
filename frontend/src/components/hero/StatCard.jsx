export default function StatCard({ icon, value, label, suffix = "" }) {
  return (
    <div className="rounded-2xl border p-6">
      <div>{icon}</div>
      <h2>
        {value}
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
}