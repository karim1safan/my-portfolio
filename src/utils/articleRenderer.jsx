import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ArticleRenderer({ content }) {
  return (
    <div className="article-rtl prose-custom" dir="rtl">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt, ...props }) => (
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              className="my-6 w-full rounded-xl border border-surface-200 dark:border-surface-dark-500"
              {...props}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default ArticleRenderer;
