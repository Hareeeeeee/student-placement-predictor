import { motion } from "framer-motion";

export default function PredictionCard({ result }) {
  if (!result) return null;

  const placed = result.prediction === "Placed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
    >
      <div className="text-center">

        <h2 className="text-3xl font-black">
          🎯 Prediction Result
        </h2>

        <p
          className={`mt-5 text-5xl font-black ${
            placed
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {result.prediction}
        </p>

      </div>

      <div className="mt-10">

        <div className="mb-2 flex justify-between">

          <span className="font-semibold">
            Confidence
          </span>

          <span>
            {(result.confidence * 100).toFixed(2)}%
          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200">

          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${result.confidence * 100}%`,
            }}
            transition={{ duration: 1 }}
            className={`h-full rounded-full ${
              placed
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          />

        </div>

      </div>

      <div
        className={`mt-8 rounded-2xl p-5 ${
          placed
            ? "bg-green-50"
            : "bg-red-50"
        }`}
      >

        <h3 className="mb-3 text-xl font-bold">
          💡 AI Suggestion
        </h3>

        <ul className="space-y-2">

          {placed ? (
            <>
              <li>✅ Keep improving coding skills.</li>
              <li>✅ Continue building projects.</li>
              <li>✅ Practice interview questions.</li>
            </>
          ) : (
            <>
              <li>📚 Improve CGPA.</li>
              <li>💻 Build more projects.</li>
              <li>🧠 Practice aptitude daily.</li>
              <li>🎤 Improve communication skills.</li>
            </>
          )}

        </ul>

      </div>

    </motion.div>
  );
}