import { useEffect, useState } from "react";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import BlogCard from "../BlogCard";
import { getNumberOfNPages } from "./service";

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
    <div className="flex flex-row justify-between gap-10 flex-wrap">
      {postsView?.slice(nPage - 1, 6 * nPage).map((pages, i) => {
        return (
          <BlogCard
            key={i}
            className="flex-[1_0_25%] max-w-[30%]"
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
      <p className="text-black">{nMaxPage}</p>
    </div>
  );
}
