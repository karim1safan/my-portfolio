import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "./SectionTitle";
import { certificationsData } from "../data/certifications";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Certifications() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 8;
  const hasMore = certificationsData.length > INITIAL_COUNT;
  const visibleCerts = showAll ? certificationsData : certificationsData.slice(0, INITIAL_COUNT);

  const currentIndex = selected ? certificationsData.indexOf(selected) : -1;

  const goNext = useCallback(() => {
    if (currentIndex < 0) return;
    const next = (currentIndex + 1) % certificationsData.length;
    setSelected(certificationsData[next]);
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex < 0) return;
    const prev = (currentIndex - 1 + certificationsData.length) % certificationsData.length;
    setSelected(certificationsData[prev]);
  }, [currentIndex]);

  const lightboxRef = useRef(null);

  useEffect(() => {
    if (!selected) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();

      if (e.key === "Tab" && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);

    const timer = setTimeout(() => {
      const closeBtn = lightboxRef.current?.querySelector('[aria-label="Close"]');
      closeBtn?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [selected, goNext, goPrev]);

  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="My Achievements" title="Certifications" />

        <motion.div
          key={`certs-${showAll}`}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {visibleCerts.map((cert) => (
            <motion.article
              key={cert.title}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-primary-500/20 dark:border-surface-dark-500 dark:bg-surface-dark-800"
            >
              <div
                className="aspect-[4/3] cursor-pointer overflow-hidden bg-surface-100 dark:bg-surface-dark-600"
                onClick={() => setSelected(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(cert);
                  }
                }}
                aria-label={`View ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-surface-900 dark:text-surface-dark-50">
                  {cert.title}
                </h3>
                <p className="mt-0.5 text-sm text-surface-600 dark:text-surface-dark-200">
                  {cert.issuer}
                </p>
                <small className="mt-1 block text-xs text-surface-500 dark:text-surface-dark-300">
                  {cert.year}
                </small>

                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <FiExternalLink size={14} />
                    Verify Certificate
                  </a>
                )}
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
              className="rounded-full border border-surface-300 bg-white px-6 py-2.5 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-200 dark:hover:bg-surface-dark-700 cursor-pointer"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Previous certificate"
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Next certificate"
            >
              <FiChevronRight size={20} />
            </button>

            <motion.div
              className="flex max-h-[90vh] max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <img
                src={selected.image}
                alt={selected.title}
                loading="lazy"
                className="max-h-[75vh] rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="font-display text-lg font-semibold text-white">{selected.title}</h3>
                <p className="text-sm text-white/70">
                  {selected.issuer} &middot; {selected.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;
