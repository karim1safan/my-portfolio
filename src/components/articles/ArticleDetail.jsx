import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { articles } from "../../data/articles.js";
import ArticleRenderer from "../../utils/articleRenderer";
import { FiArrowRight, FiClock, FiChevronRight, FiChevronLeft } from "react-icons/fi";

function ArticleDetail() {
  const { id } = useParams();
  const articleIndex = articles.findIndex((a) => a.id === id);
  const article = articleIndex !== -1 ? articles[articleIndex] : null;

  if (!article) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
        <h1 className="mb-4 font-display text-3xl font-bold text-surface-900 dark:text-surface-dark-50">
          المقال غير موجود
        </h1>
        <p className="mb-6 text-surface-600 dark:text-surface-dark-200">
          المقال الذي تبحث عنه غير موجود.
        </p>
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
        >
          العودة للمقالات
          <FiArrowRight size={16} />
        </Link>
      </section>
    );
  }

  const prev = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const next = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  return (
    <motion.article
      className="py-20"
      dir="rtl"
      style={{ fontFamily: "'Cairo', sans-serif" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-3xl px-4">
        <Link
          to="/articles"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-dark-300 dark:hover:text-surface-dark-50"
        >
          جميع المقالات
          <FiArrowRight size={14} />
        </Link>

        <header className="mb-10">
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

          <h1 className="mb-4 font-display text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-dark-50 sm:text-4xl">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-surface-500 dark:text-surface-dark-300">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("ar-EG", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="inline-flex items-center gap-1">
              <FiClock size={14} />
              {article.readingTime}
            </span>
          </div>
        </header>

        <ArticleRenderer content={article.content} />

        <nav className="mt-16 flex items-center justify-between border-t border-surface-200 pt-6 dark:border-surface-dark-600">
          {next ? (
            <Link
              to={`/articles/${next.id}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-dark-300 dark:hover:text-surface-dark-50"
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">التالي</span>
              <FiChevronLeft size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
          {prev ? (
            <Link
              to={`/articles/${prev.id}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-dark-300 dark:hover:text-surface-dark-50"
            >
              <FiChevronRight size={16} className="transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">السابق</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </motion.article>
  );
}

export default ArticleDetail;
