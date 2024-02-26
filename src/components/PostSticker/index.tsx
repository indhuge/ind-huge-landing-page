import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BlogPost } from "../BlogCard";
import { PrismicNextImage } from "@prismicio/next";
import Style from "./PostSticker.module.css";

export default function PostSticker({
  post,
  router,
  postUrl,
}: {
  post: BlogPost;
  postUrl: string;
  router: AppRouterInstance;
}) {
  //const date = new Date(post.date as string);
  const date = post.date.split("-");

  return (
    <div
      className={`grid grid-cols-2 items-center justify-center gap-3 MaxLg:grid-cols-[1fr_2fr] bg-white rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-500 ${Style.wrapper}`}
      onClick={() => {
        router.push(postUrl, { fetch: true });
      }}
    >
      <div className="w-full h-28 self-center overflow-hidden rounded-lg">
        <PrismicNextImage
          className={`w-full h-full object-cover transition-all duration-300 ${Style.img}`}
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
        <p className="text-darkgray font-light text-sm">{`${date.at(2)}/${
          date.at(1)
        }/${date.at(0)}`}</p>
      </div>
    </div>
  );
}
