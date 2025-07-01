import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsImagePage({ params }) {
  const { slug } = params;

  const newsData = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsData) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
    </div>
  );
}
