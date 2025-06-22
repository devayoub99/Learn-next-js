import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function News() {
  return (
    <>
      <header>
        <h2>News page</h2>
      </header>
      <main>
        <NewsList news={DUMMY_NEWS} />
      </main>
    </>
  );
}
