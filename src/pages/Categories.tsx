import { useSearchParams } from 'react-router-dom';
import { getCategories, getArticlesByCategory, articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');
  const categories = getCategories();

  const filteredArticles = activeCategory
    ? getArticlesByCategory(activeCategory)
    : articles;

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">分类</h1>
        <p className="text-gray-500 dark:text-gray-400">按分类浏览文章</p>
      </section>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSearchParams({})}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !activeCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          全部
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ category: cat })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-10">该分类暂无文章</p>
      )}
    </div>
  );
}
