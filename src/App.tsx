import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import Categories from './pages/Categories';
import Tags from './pages/Tags';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
