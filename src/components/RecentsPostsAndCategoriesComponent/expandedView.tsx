import { useEffect, useState } from "react";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import BlogCard from "../BlogCard";
import { getNumberOfNPages } from "./service";
import PageNumbers from "./PageNumbers";

export default function ExpandedView({
  postsView,
  categories,
}: {
  postsView: BlogPostDocument<string>[] | null;
  categories: CategoryDocument<string>[] | null;
}) {
  const [nPage, setNPage] = useState(1);
  const [nMaxPage, setNMaxPage] = useState(0);

  useEffect(() => {
    if (postsView) setNMaxPage(getNumberOfNPages(postsView));
  }, [postsView]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3  justify-center gap-10 flex-wrap">
        {postsView?.slice((nPage - 1) * 6, 6 * nPage).map((pages, i) => {
          return (
            <BlogCard
              key={i}
              post={{
                title: pages.data.title,
                description:
                  "Lorem ipsum dolor sit amet consectetur. Enim vitae porta neque vulputate in eleifend mauris cursus. Proin venenatis.",
                date: pages.data.date?.toString() as string,
                image: pages.data.image,
                tag: categories!!.filter(
                  (i) => i.uid == pages.data.category.uid
                )[0]?.data.name,
              }}
            />
          );
        })}
      </div>
      <PageNumbers
        n={nMaxPage}
        selected={nPage}
        onClick={(n) => setNPage(n)}
        className="my-2"
      />
    </div>
  );
}
