export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Blog. Built with React + TypeScript + Vite.</p>
      </div>
    </footer>
  );
}
