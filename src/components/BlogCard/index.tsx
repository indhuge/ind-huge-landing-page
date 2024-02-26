import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import CalendarIcon from "public/assets/calendar.svg";
import TagIcon from "public/assets/tag.svg";

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
        "aspect-[395/432] flex flex-col bg-white overflow-clip rounded-lg transition-all hover:drop-shadow-black" +
        " " +
        className
      }
      onClick={() => onClick()}
    >
      <PrismicNextImage className="h-1/2 object-cover" field={post.image} />
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
            <p>{`${date.at(2)}/${
              date.at(1)
            }/${date.at(0)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
