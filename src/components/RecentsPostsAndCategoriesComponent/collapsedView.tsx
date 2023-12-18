import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import BlogCard from "../BlogCard";

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
    <div className="grid grid-cols-3 justify-between gap-10 flex-wrap">
      {postsView?.slice(0, 3).map((pages, i) => {
        return (
          <BlogCard
            key={i}
            className=""
            onClick={() => router.push(pages.url as string)}
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
  );
}
