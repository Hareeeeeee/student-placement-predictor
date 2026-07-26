import { motion } from "framer-motion";

export default function HeroButtons() {

  const scrollToForm = () => {
    document
      .getElementById("prediction-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToForm}
        className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl"
      >
        🚀 Predict Now
      </motion.button>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/history"
        className="rounded-xl border bg-white px-8 py-4 font-semibold shadow"
      >
        📊 History
      </motion.a>

    </div>
  );
}