import { ImageField } from "@prismicio/client";
import Image from "next/image";
import CalendarIcon from "public/assets/calendar.svg";
import TagIcon from "public/assets/tag.svg";

type BlogPost = {
  image: ImageField<never> | null;
  title: String;
  description: String;
  tag: String;
  date: String;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div
      className="h-[30rem] max-w-[22rem] flex flex-col
     bg-white overflow-clip rounded-lg"
    >
      <Image
        className="h-1/2 object-cover"
        alt="Sample"
        width={1920}
        height={1080}
        src={"/benjamin-sow-5hQMCo5qtSs-unsplash.jpg"}
      />
      <div className="p-6 flex flex-col justify-between h-1/2 border-x border-b border-lightgray rounded-lg">
        <div className="bg-white text-black text-base flex-grow">
          <h2 className="text-darkblue font-semibold">{post.title}</h2>
          <p className="text-darkgray font-light">{post.description}</p>
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
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
