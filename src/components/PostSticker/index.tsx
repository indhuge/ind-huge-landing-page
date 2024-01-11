import { BlogPost } from "../BlogCard";
import { PrismicNextImage } from "@prismicio/next";

export default function PostSticker({ post }: { post: BlogPost }) {
  const date = new Date(post.date as string);

  return (
    <div className="grid grid-cols-2 justify-items-center items-center justify-center gap-3">
      <div className="w-full h-28 self-center">
        <PrismicNextImage
          className="w-full h-full rounded-lg object-cover"
          field={post.image}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-darkblue text-lg font-semibold mb-2 line-clamp-1">
          {post.title}
        </h2>
        <p className="text-darkgray font-light text-sm line-clamp-2 mb-4">
          {post.description}
        </p>
        <p className="text-darkgray font-light text-sm">{`${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}</p>
      </div>
    </div>
  );
}
