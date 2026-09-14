import { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "../SectionTitle";
import { articles } from "../../utils/articles.js";
import ArticleCard from "./ArticleCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function Articles() {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;
  const hasMore = articles.length > INITIAL_COUNT;
  const visibleArticles = showAll ? articles : articles.slice(0, INITIAL_COUNT);

  return (
    <section className="py-20" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 font-arabic">
        <SectionTitle subtitle="مدونتي" title="المقالات" />

        {articles.length === 0 ? (
          <motion.p
            className="text-center text-lg text-surface-500 dark:text-surface-dark-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            لا توجد مقالات بعد.
          </motion.p>
        ) : (
          <>
            <motion.div
              key={`articles-${showAll}`}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {visibleArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
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
                  {showAll ? "عرض أقل" : "عرض المزيد"}
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Articles;
