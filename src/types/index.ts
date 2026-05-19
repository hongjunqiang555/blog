export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  coverImage?: string;
}
