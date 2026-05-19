import { Link } from 'react-router-dom';

interface Props {
  tag: string;
  active?: boolean;
}

export default function TagBadge({ tag, active }: Props) {
  return (
    <Link
      to={`/tags?tag=${encodeURIComponent(tag)}`}
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400'
      }`}
    >
      {tag}
    </Link>
  );
}
