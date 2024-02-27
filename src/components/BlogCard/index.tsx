import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import CalendarIcon from "public/assets/calendar.svg";
import TagIcon from "public/assets/tag.svg";
import HoverTrigger from "../BlogPost/hoverEffect.module.css";
import Page from "../header";

export type BlogPost = {
  image: ImageField<never> | null;
  title: String;
  description: String;
  tag: String;
  date: String;
};

export default function BlogCard({
  post,
  className,
  onClick,
}: {
  post: BlogPost;
  className: string | null;
  onClick: () => void | null | undefined;
}) {
  //const date = new Date(post.date as string);
  const date = post.date.split("-");
  return (
    <div
      className={
        `aspect-[395/432] flex flex-col bg-white overflow-clip rounded-lg transition-all hover:drop-shadow-black ${HoverTrigger.wrapper}` +
        " " +
        className
      }
      onClick={() => onClick()}
    >
      <div className="h-1/2 overflow-hidden grid grid-cols-1 grid-rows-1">
        <PrismicNextImage
          className="h-full object-cover row-start-1 row-end-2 col-start-1 col-end-2"
          field={post.image}
        />
        {post.image?.alt && (
          <div
            className={
              "bg-darkgray row-start-1 row-end-2 col-start-1 col-end-2 h-fit self-end opacity-0 translate-y-4 transition-all " +
              HoverTrigger.target
            }
          >
            <p className="text-white p-2">{post.image?.alt}</p>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col justify-between h-1/2 border-x border-b border-lightgray rounded-b-lg">
        <div className="bg-white text-black text-base ">
          <h2 className="text-darkblue font-semibold">{post.title}</h2>
          <p className="text-darkgray font-light LaptopNoMin:truncate">
            {post.description}
          </p>
        </div>
        <div className="bg-darkgray h-[0.1rem] w-full"></div>
        <div className="pt-6 flex justify-between text-darkgray font-normal">
          <div className="flex gap-2 items-center">
            <Image
              className="w-4 h-4"
              alt="tag icon"
              src={TagIcon}
              width={20}
              height={20}
            />
            <p>{post.tag}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              className="w-4 h-4"
              alt="calendar icon"
              src={CalendarIcon}
              width={20}
              height={20}
            />
            <p>{`${date.at(2)}/${date.at(1)}/${date.at(0)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
