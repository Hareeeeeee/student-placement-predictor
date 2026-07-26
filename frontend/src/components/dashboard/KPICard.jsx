import { motion } from "framer-motion";

export default function KPICard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl bg-white p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div
          className={`rounded-full p-4 ${color}`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}