import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetail({ params }) {
  const { slug } = params;

  const newsData = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsData) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
        <h1>{newsData.title}</h1>
        <time date={newsData.data}>{newsData.date}</time>
      </header>
      <p>{newsData.content}</p>
    </article>
  );
}
