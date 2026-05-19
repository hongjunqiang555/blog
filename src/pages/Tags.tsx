import { useSearchParams } from 'react-router-dom';
import { getAllTags, getArticlesByTag, articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import TagBadge from '../components/TagBadge';

export default function Tags() {
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');
  const allTags = getAllTags();

  const filteredArticles = activeTag
    ? getArticlesByTag(activeTag)
    : articles;

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">标签</h1>
        <p className="text-gray-500 dark:text-gray-400">按标签浏览文章</p>
      </section>

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <TagBadge key={tag} tag={tag} active={activeTag === tag} />
        ))}
      </div>

      {activeTag && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          标签 <span className="font-medium text-gray-900 dark:text-white">"{activeTag}"</span> 下共 {filteredArticles.length} 篇文章
        </p>
      )}

      <div className="grid gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-10">该标签暂无文章</p>
      )}
    </div>
  );
}
