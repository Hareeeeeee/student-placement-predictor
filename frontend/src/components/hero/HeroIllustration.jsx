import { motion } from "framer-motion";
import heroImage from "../../assets/hero.svg";

export default function HeroIllustration() {
  return (
    <motion.img
      src={heroImage}
      alt="Hero"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="w-full max-w-xl"
    />
  );
}