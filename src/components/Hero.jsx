import { motion } from "motion/react";
import { FaArrowDown, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import myphoto from "../assets/my_photo.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageReveal = {
  hidden: { opacity: 0, x: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
};

function Hero() {
  return (
    <section id="home" className="flex min-h-[calc(100vh-var(--navbar-height))] items-center">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <motion.div
            className="max-w-xl text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={item}
              className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
            >
              Hello, I&apos;m
            </motion.span>
            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold tracking-tight text-surface-900 dark:text-surface-dark-50 sm:text-5xl lg:text-6xl"
            >
              Karim Mahmoud Safan
            </motion.h1>
            <motion.h2
              variants={item}
              className="mt-3 font-display text-xl font-medium text-primary-600 dark:text-primary-400 sm:text-2xl"
            >
              Frontend Developer
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-6 text-lg leading-relaxed text-surface-600 dark:text-surface-dark-200"
            >
              I build responsive, modern web experiences with a clean eye for layout, motion, and
              usability.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {["React", "JavaScript", "UI Focused"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-surface-200 bg-surface-100 px-3 py-1 text-sm font-medium text-surface-700 dark:border-surface-dark-500 dark:bg-surface-dark-700 dark:text-surface-dark-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1y1RXQEaDqMJDQFY-0bVVfxsRFG3o9fx_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                <FiDownload size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-200 dark:hover:bg-surface-dark-700"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-200 dark:hover:bg-surface-dark-700"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4"
            variants={imageReveal}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-lg dark:opacity-30" />
              <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-surface-200 bg-surface-100 dark:border-surface-dark-500 dark:bg-surface-dark-700 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                <img
                  src={myphoto}
                  alt="Karim Mahmoud Safan"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/karim1safan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900 dark:border-surface-dark-500 dark:text-surface-dark-300 dark:hover:bg-surface-dark-700 dark:hover:text-surface-dark-50"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/karimsafan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900 dark:border-surface-dark-500 dark:text-surface-dark-300 dark:hover:bg-surface-dark-700 dark:hover:text-surface-dark-50"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://x.com/karim_safan11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900 dark:border-surface-dark-500 dark:text-surface-dark-300 dark:hover:bg-surface-dark-700 dark:hover:text-surface-dark-50"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="mx-auto mt-16 flex w-fit animate-bounce items-center gap-2 text-sm text-surface-500 dark:text-surface-dark-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <FaArrowDown />
          <span>Scroll down</span>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
