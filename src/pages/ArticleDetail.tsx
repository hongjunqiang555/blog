import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getArticleById } from '../data/articles';
import TagBadge from '../components/TagBadge';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">文章未找到</h1>
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-none">
      <header className="mb-8">
        <Link to="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
          &larr; 返回文章列表
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{article.author}</span>
          <span>&middot;</span>
          <time>{article.date}</time>
          <span>&middot;</span>
          <Link
            to={`/categories?category=${encodeURIComponent(article.category)}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {article.category}
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none prose-pre:p-0 prose-pre:bg-transparent">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const codeString = String(children).replace(/\n$/, '');
              if (match) {
                return (
                  <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div">
                    {codeString}
                  </SyntaxHighlighter>
                );
              }
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
