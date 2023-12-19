// @ts-nocheck
import { useEffect, useState } from "react";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import BlogCard from "../BlogCard";
import { getNumberOfNPages } from "./service";
import PageNumbers from "./PageNumbers";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AnimatePresence, motion } from "framer-motion";

export default function ExpandedView({
  postsView,
  categories,
  router,
}: {
  postsView: BlogPostDocument<string>[] | null;
  categories: CategoryDocument<string>[] | null;
  router: AppRouterInstance;
}) {
  const [nPage, setNPage] = useState(1);
  const [nMaxPage, setNMaxPage] = useState(0);

  useEffect(() => {
    if (postsView) setNMaxPage(getNumberOfNPages(postsView));
    setNPage(1);
  }, [postsView]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 justify-between gap-5 flex-wrap lg:grid-cols-2 LaptopS:grid-cols-3">
        {postsView?.slice((nPage - 1) * 6, 6 * nPage).map((pages, i) => {
          return (
            <AnimatePresence mode="popLayout" key={i}>
              <motion.div
                key={Math.random()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <BlogCard
                  key={i}
                  onClick={() => {
                    router.push(pages.url as string);
                  }}
                  post={{
                    title: pages.data.title ?? "",
                    description: pages.data.description,
                    date: pages.data.date?.toString() as string,
                    image: pages.data.image,
                    tag:
                      categories!!.filter(
                        (i) => i.uid == pages.data.category.uid
                      )[0]?.data.name ?? "",
                  }}
                />
              </motion.div>
            </AnimatePresence>
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
