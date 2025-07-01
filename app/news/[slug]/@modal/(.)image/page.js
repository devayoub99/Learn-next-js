"use client";

import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedNewsImagePage({ params }) {
  const { slug } = params;

  const router = useRouter();

  const newsData = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsData) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
        </div>
      </dialog>
    </>
  );
}
