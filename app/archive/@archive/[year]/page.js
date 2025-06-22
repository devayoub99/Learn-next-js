import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const newsList = getNewsForYear(newsYear);

  return <NewsList news={newsList} />;
}
