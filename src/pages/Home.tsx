import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Latest Posts</h1>
        <p className="text-gray-500 dark:text-gray-400">探索前端开发的最新技术与实践</p>
      </section>

      <div className="grid gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
