import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/skills";

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="group flex items-center gap-4 rounded-xl border border-surface-200 bg-white px-5 py-4 transition-all hover:border-primary-500/30 hover:shadow-md dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:hover:border-primary-500/30"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-baseline justify-between">
          <h4 className="font-display text-sm font-semibold text-surface-900 dark:text-surface-dark-50">
            {skill.title}
          </h4>
          <span className="text-xs font-medium text-surface-500 dark:text-surface-dark-300">
            {skill.level}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-surface-100 dark:bg-surface-dark-700">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-400"
            initial={shouldReduceMotion ? { width: `${skill.level}%` } : { width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : index * 0.05,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="What Skills I Have" title="My Skills" />

        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillBar key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
