import { BlogPost } from "../BlogCard";
import { PrismicNextImage } from "@prismicio/next";

export default function PostStickerSkeleton() {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center justify-center gap-3 animate-pulse">
      <div className="w-full h-28 self-center rounded-lg bg-gray"></div>
      <div className="flex flex-col w-full h-full">
        <div className="mb-2 h-7 w-full bg-gray rounded"></div>
        <div className=" mb-4 h-10 w-full bg-gray rounded"></div>
        <div className="h-5 w-full bg-gray rounded"></div>
      </div>
    </div>
  );
}
