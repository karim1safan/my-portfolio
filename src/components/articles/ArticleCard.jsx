import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FiClock, FiArrowLeft } from "react-icons/fi";

function ArticleCard({ article }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all hover:-translate-y-1 hover:border-primary-500/20 hover:shadow-lg dark:border-surface-dark-500 dark:bg-surface-dark-800"
    >
      <div className="flex flex-1 flex-col p-5" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold text-surface-900 dark:text-surface-dark-50">
          {article.title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-surface-600 dark:text-surface-dark-200">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-surface-500 dark:text-surface-dark-300">
          <span>{new Date(article.date).toLocaleDateString("ar-EG", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="inline-flex items-center gap-1">
            <FiClock size={12} />
            {article.readingTime}
          </span>
        </div>

        <Link
          to={`/articles/${article.id}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          اقرأ المقال
          <FiArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default ArticleCard;
