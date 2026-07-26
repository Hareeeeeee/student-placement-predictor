import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 AI Powered Platform
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
            Student Placement
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Predictor
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Predict placement chances instantly using Machine Learning trained
            on thousands of student records. Get fast, intelligent, and
            reliable predictions.
          </p>

          <HeroButtons />

          <HeroStats />
        </motion.div>
      </div>
    </section>
  );
}