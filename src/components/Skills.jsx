import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/skills";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="What Skills I Have" title="My Skills" />

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="group flex flex-col items-center gap-3 rounded-xl border border-surface-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-md dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:hover:border-primary-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <img src={skill.icon} alt={skill.title} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="text-center">
                <h4 className="font-display text-sm font-semibold text-surface-900 dark:text-surface-dark-50">
                  {skill.title}
                </h4>
                <p className="mt-0.5 text-xs text-surface-500 dark:text-surface-dark-300">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
