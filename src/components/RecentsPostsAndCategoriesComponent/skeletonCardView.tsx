import BlogCard from "../BlogCard";
import BlogCardSkeleton from "../BlogCard/skeleton";

export default function SkeletonCardView() {
  return (
    <div className="grid grid-cols-1 justify-between gap-5 flex-wrap lg:grid-cols-2 LaptopS:grid-cols-3">
      {[1, 2, 3].map((pages, i) => {
        return <BlogCardSkeleton key={i} className="animate-pulse" />;
      })}
    </div>
  );
}
