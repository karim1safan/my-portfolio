import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    desc: "Understand the problem, user needs, and technical constraints before writing a single line.",
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    desc: "Plan component architecture, data flow, and UI structure. Sketch key screens and interactions.",
  },
  {
    id: 3,
    number: "03",
    title: "Develop",
    desc: "Build incrementally with clean, modular code. Test as I go, not after.",
  },
  {
    id: 4,
    number: "04",
    title: "Deliver",
    desc: "Optimize, polish, and deploy. Ensure performance, accessibility, and responsiveness are solid.",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6"
      initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.15,
        ease: "easeOut",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 font-display text-lg font-bold text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
          {step.number}
        </div>
        {index < steps.length - 1 && (
          <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-primary-200 to-transparent dark:from-primary-500/30" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="font-display text-lg font-semibold text-surface-900 dark:text-surface-dark-50">
          {step.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-surface-600 dark:text-surface-dark-200">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface-100 py-20 dark:bg-surface-dark-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="My Process" title="How I Work" />

        <div className="mx-auto max-w-2xl">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
