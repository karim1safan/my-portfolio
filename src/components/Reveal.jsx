import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const opacity = shouldReduceMotion ? 1 : inView ? 1 : 0;
  const y = shouldReduceMotion ? 0 : inView ? 0 : 40;

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      animate={{ opacity, y }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
