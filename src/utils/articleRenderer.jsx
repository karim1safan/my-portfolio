import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ArticleRenderer({ content }) {
  return (
    <div className="article-rtl prose-custom" dir="rtl">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}

export default ArticleRenderer;
