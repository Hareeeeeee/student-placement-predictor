import { motion } from "framer-motion";

export default function Card({ title, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        hover:shadow-xl
        transition-all
      "
    >
      {(title || icon) && (
        <div className="mb-6 flex items-center gap-3">
          <span className="text-2xl">{icon}</span>

          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>
        </div>
      )}

      {children}
    </motion.div>
  );
}