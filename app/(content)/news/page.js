import NewsList from "@/components/news-list";

export default function async News() {
  
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await response.json();
  

  return (
    <>
      <header>
        <h2>News page</h2>
      </header>
      <main>
        <NewsList news={news} />
      </main>
    </>
  );
}
