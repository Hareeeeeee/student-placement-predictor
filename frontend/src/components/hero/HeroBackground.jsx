import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-400/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
    </div>
  );
}