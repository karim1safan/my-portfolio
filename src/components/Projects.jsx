import { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;
  const hasMore = projects.length > INITIAL_COUNT;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="bg-surface-100 py-20 dark:bg-surface-dark-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="My Recent Work" title="Projects" />

        <motion.div
          key={`projects-${showAll}`}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {visibleProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all hover:-translate-y-1 hover:border-primary-500/20 hover:shadow-lg dark:border-surface-dark-500 dark:bg-surface-dark-700"
            >
              <div className="overflow-hidden bg-surface-100 dark:bg-surface-dark-600">
                <div className="flex items-center gap-1.5 border-b border-surface-200 bg-surface-200/50 px-3 py-2 dark:border-surface-dark-500 dark:bg-surface-dark-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[10px] text-surface-400 dark:bg-surface-dark-600 dark:text-surface-dark-300">
                    {project.liveUrl && project.liveUrl !== "#"
                      ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                      : "localhost:3000"}
                  </div>
                </div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-1 font-display text-lg font-semibold text-surface-900 dark:text-surface-dark-50">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-surface-600 dark:text-surface-dark-200">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-surface-200 px-3 py-1.5 text-xs font-medium text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-dark-500 dark:text-surface-dark-200 dark:hover:bg-surface-dark-600"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                  >
                    <FiExternalLink size={14} />
                    LiveUrl Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {hasMore && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              aria-expanded={showAll}
              className="cursor-pointer rounded-full border border-surface-300 bg-white px-6 py-2.5 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-200 dark:hover:bg-surface-dark-700"
            >
              {showAll ? "Show Less" : `Show All (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
