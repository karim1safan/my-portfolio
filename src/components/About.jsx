import { motion, useInView } from "motion/react";
import { PiGraduationCap } from "react-icons/pi";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { useRef } from "react";

const education = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science",
    university: "Menofia University",
    year: "2022 – 2026",
  },
];

function About() {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-40px" });

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="Get to Know" title="About Me" />

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mx-auto mb-10 flex justify-center">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-400 to-primary-600" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-400">
                Frontend Developer
              </span>
            </Reveal>

            <motion.div
              ref={textRef}
              className="mb-8 leading-relaxed text-surface-600 dark:text-surface-dark-200"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p>
                Frontend Developer specializing in building modern, responsive, and interactive web
                applications using React.js and modern frontend technologies. Passionate about
                creating clean user experiences, writing maintainable code, and continuously
                improving application performance and architecture.
              </p>
              <p className="mt-4">
                Experienced with JavaScript, React, Express.js, Linux environments, and modern
                development workflows. My background in competitive programming has strengthened
                my analytical thinking and debugging abilities, helping me solve complex
                problems efficiently.
              </p>
              <p className="mt-4">
                Currently focused on growing as a software engineer, expanding into cloud
                technologies, and contributing to impactful products within collaborative
                engineering teams.
              </p>
            </motion.div>

            <Reveal delay={0.3}>
              <div className="mb-8">
                <h3 className="mb-4 font-display text-lg font-semibold text-surface-900 dark:text-surface-dark-50">
                  Education
                </h3>
                <div className="relative border-l-2 border-primary-200 pl-6 dark:border-primary-500/30">
                  {education.map((item) => (
                    <div key={item.id} className="relative mb-6 last:mb-0 ml-3">
                      <div className="absolute -left-[31px] flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                        <PiGraduationCap size={16} />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-surface-900 dark:text-surface-dark-50">
                          {item.degree}
                        </h4>
                        <p className="text-sm text-surface-600 dark:text-surface-dark-200">
                          {item.university}
                        </p>
                        <small className="text-xs text-surface-500 dark:text-surface-dark-300">
                          {item.year}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

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
