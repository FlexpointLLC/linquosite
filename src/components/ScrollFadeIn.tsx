import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollFadeIn({ children, delay = 0 }: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
