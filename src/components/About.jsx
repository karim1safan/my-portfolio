import { motion, useInView } from "motion/react";
import { GiAchievement } from "react-icons/gi";
import { FaPeopleGroup, FaCode } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import myphoto from "../assets/my_photo.jpg";
import { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const aboutCards = [
  {
    id: 1,
    title: "Learning Journey",
    desc: "Self-taught & always learning",
    icon: GiAchievement,
  },
  {
    id: 2,
    title: "Practice",
    desc: "Building real-world projects",
    icon: FaPeopleGroup,
  },
  {
    id: 3,
    title: "Projects",
    desc: "30+ completed projects",
    icon: FaCode,
  },
];

const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function About() {
  const [showMore, setShowMore] = useState(false);
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-40px" });

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="Get to Know" title="About Me" />

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <Reveal className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 opacity-10 blur-lg dark:opacity-20" />
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-surface-200 bg-surface-100 dark:border-surface-dark-500 dark:bg-surface-dark-700">
                <img
                  src={myphoto}
                  alt="Karim Mahmoud Safan"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="w-full lg:w-1/2">
            <Reveal>
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-400">
                Frontend Developer
              </span>
            </Reveal>

            <motion.div
              className="mb-6 grid grid-cols-3 gap-3"
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {aboutCards.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={cardItem}
                    className="rounded-xl border border-surface-200 bg-white p-4 text-center dark:border-surface-dark-500 dark:bg-surface-dark-800"
                  >
                    <Icon className="mx-auto mb-2 text-2xl text-primary-600 dark:text-primary-400" />
                    <h5 className="font-display text-sm font-semibold text-surface-900 dark:text-surface-dark-50">
                      {item.title}
                    </h5>
                    <small className="text-xs text-surface-500 dark:text-surface-dark-300">
                      {item.desc}
                    </small>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              ref={textRef}
              className="mb-8 leading-relaxed text-surface-600 dark:text-surface-dark-200"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <p>
                Frontend Developer specializing in building modern, responsive, and interactive web
                applications using React.js and modern frontend technologies. Passionate about
                creating clean user experiences, writing maintainable code, and continuously
                improving application performance and architecture.{" "}
                <button
                  onClick={toggleShowMore}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {showMore ? "Show Less" : "Read More"}
                  {showMore ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
              </p>

              {showMore && (
                <div className="mt-4 space-y-4">
                  <p>
                    Experienced with JavaScript, React, Express.js, Linux environments, and modern
                    development workflows. My background in competitive programming has strengthened
                    my analytical thinking and debugging abilities, helping me solve complex
                    problems efficiently.
                  </p>
                  <p>
                    Currently focused on growing as a software engineer, expanding into cloud
                    technologies, and contributing to impactful products within collaborative
                    engineering teams.
                  </p>
                </div>
              )}
            </motion.div>

            <Reveal delay={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                Let&apos;s Start
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
