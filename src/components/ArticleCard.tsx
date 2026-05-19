import { Link } from 'react-router-dom';
import type { Article } from '../types';
import TagBadge from './TagBadge';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <article className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <time>{article.date}</time>
        <span>&middot;</span>
        <Link
          to={`/categories?category=${encodeURIComponent(article.category)}`}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {article.category}
        </Link>
      </div>

      <Link to={`/article/${article.id}`}>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {article.title}
        </h2>
      </Link>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {article.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
