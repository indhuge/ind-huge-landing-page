import { RecentsPostsAndCategoriesProps } from "@/slices/RecentsPostsAndCategories";
import { getCategoriesAndPosts } from "./service";
import CircularButton from "../CircularButton";
import { useState } from "react";
import BlogCard from "../BlogCard";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";

export default function RecentsPostsAndCategoriesComponent({
  slice,
}: RecentsPostsAndCategoriesProps) {
  const [selected, setSelected] = useState(-1);
  const [categories, setCategories] = useState<CategoryDocument<string>[]>();
  const [posts, setPosts] = useState<BlogPostDocument<string>[]>();

  getCategoriesAndPosts().then((e) => {
    setCategories(e.categories);
    setPosts(e.posts);
  });

  if (categories?.length == 0) return <p>Carregando</p>;

  return (
    <div className="bg-white flex flex-col py-10 px-36">
      <div className="flex justify-center items-center">
        <CircularButton
          key={-1}
          text="ver todos"
          onClick={() => {
            setSelected(-1);
          }}
          isSelected={selected == -1}
        />
        {categories?.map((e, i) => {
          return (
            <CircularButton
              key={i}
              text={e.data.name}
              onClick={() => setSelected(i)}
              isSelected={selected == i}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl text-darkblue font-bold">
            {slice.primary.main_title}
          </h2>
          <p className="text-blue text-sm font-semibold">
            {slice.primary.see_all_text}
          </p>
        </div>
        <div className="flex flex-row justify-between gap-10 flex-wrap">
          {posts?.map((e, i) => {
            return (
              <BlogCard
                key={i}
                className="flex-[1_0_25%]"
                post={{
                  title: e.data.title,
                  description:
                    "Lorem ipsum dolor sit amet consectetur. Enim vitae porta neque vulputate in eleifend mauris cursus. Proin venenatis.",
                  date: "12/12/23",
                  image: null,
                  tag: "test",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
