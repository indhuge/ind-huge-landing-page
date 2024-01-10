// @ts-nocheck
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import BlogCard from "../BlogCard";
import { AnimatePresence, motion } from "framer-motion";

export default function CollapsedView({
  postsView,
  categories,
  router,
}: {
  postsView: BlogPostDocument<string>[] | null;
  categories: CategoryDocument<string>[] | null;
  router: AppRouterInstance;
}) {
  return (
    <div className="grid grid-cols-1 justify-between gap-5 flex-wrap lg:grid-cols-2 LaptopS:grid-cols-3">
      {postsView?.slice(0, 3).map((pages, i) => {
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
                className="hover:cursor-pointer"
                onClick={() => router.push(pages.url as string)}
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
  );
}
