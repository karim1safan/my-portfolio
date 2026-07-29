import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";

export const servicesData = [
  {
    id: 1,
    icon: MdDesignServices,
    title: "Web Design",
    desc: "Crafting responsive, accessible interfaces focused on usability and visual impact.",
  },
  {
    id: 2,
    icon: IoRocketSharp,
    title: "Fast Performance",
    desc: "Optimizing load times and runtime speed for smooth user experiences across devices.",
  },
  {
    id: 3,
    icon: FaCode,
    title: "Clean Code",
    desc: "Writing maintainable, modular React code with best practices and solid architecture.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Services() {
  return (
    <section id="services" className="bg-surface-100 py-20 dark:bg-surface-dark-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Services" />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="group rounded-2xl border border-surface-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-surface-dark-500 dark:bg-surface-dark-700 dark:hover:border-primary-500/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-500/10 dark:text-primary-400 dark:group-hover:bg-primary-500 dark:group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-surface-900 dark:text-surface-dark-50">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-dark-200">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
