"use client";
import { RecentsPostsAndCategoriesProps } from "@/slices/RecentsPostsAndCategories";
import { filterByTag, getCategoriesAndPosts, seeAll } from "./service";
import CircularButton from "../CircularButton";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import Link from "next/link";
import ExpandedView from "./expandedView";
import CollapsedView from "./collapsedView";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SkeletonCardView from "./skeletonCardView";
import { asText } from "@prismicio/client";

export default function RecentsPostsAndCategoriesComponent({
  slice,
}: RecentsPostsAndCategoriesProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(-1);
  const [categories, setCategories] = useState<CategoryDocument<string>[]>();
  const [postsView, setPostsView] = useState<BlogPostDocument<string>[]>();
  const [posts, setPosts] = useState<BlogPostDocument<string>[]>();
  const [isExpanded, setExpanded] = useState(false);
  const router = useRouter();

  const filterClick = (index: number) => {
    setSelected(index);
    const tmp =
      index == -1
        ? seeAll(posts!!)
        : filterByTag(categories!![index].uid as string, posts!!);
    setPostsView(tmp);
  };

  useEffect(() => {
    getCategoriesAndPosts().then((e) => {
      setCategories(e.categories);
      setPosts(e.posts);
      setPostsView(seeAll(e.posts));
      setTimeout(() => setIsLoading(false), 1000);
    });
  }, []);

  if (isLoading)
    return (
      <div className="bg-white flex flex-col py-10 px-2 ss_mobile:px-10 md:px-36">
        <div className="flex justify-center items-center flex-wrap">
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
          <CircularButton
            text=""
            isSelected={false}
            onClick={() => null}
            className="w-32 h-10 animate-pulse bg-gray"
          />
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex flex-row justify-between items-center text-gray animate-pulse">
            <h2 className="text-3xl font-bold">{slice.primary.main_title}</h2>
            <p className="text-sm font-semibold hover:underline select-none hover:cursor-pointer hidden lg:block">
              {slice.primary.see_all_text?.toUpperCase()}
            </p>
          </div>

          <SkeletonCardView />

          <p
            className="text-blue text-sm font-semibold hover:underline select-none hover:cursor-pointer 
          lg:hidden self-center"
            onClick={() => setExpanded(!isExpanded)}
          >
            {!isExpanded
              ? slice.primary.see_all_text?.toUpperCase()
              : "ver postagens recentes".toUpperCase()}
          </p>
        </div>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white flex flex-col py-10 px-2 ss_mobile:px-10 md:px-36"
    >
      <div className="flex justify-center items-center flex-wrap">
        <CircularButton
          key={-1}
          text="ver todos"
          onClick={() => {
            filterClick(-1);
          }}
          isSelected={selected == -1}
          className={null}
        />
        {categories?.map((e, i) => {
          return (
            <CircularButton
              key={i}
              text={e.data.name as string}
              onClick={() => filterClick(i)}
              isSelected={selected == i}
              className={null}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl text-darkblue font-bold">
            {!isExpanded
              ? slice.primary.main_title
              : selected == -1
                ? "Todos as postagens"
                : categories!![selected].data.name}
          </h2>
          <p
            className="text-blue text-sm font-semibold hover:underline select-none hover:cursor-pointer hidden lg:block"
            onClick={() => setExpanded(!isExpanded)}
          >
            {!isExpanded
              ? slice.primary.see_all_text?.toUpperCase()
              : "ver postagens recentes".toUpperCase()}
          </p>
        </div>
        {isExpanded && (
          <ExpandedView
            postsView={postsView ?? null}
            categories={categories ?? null}
            router={router}
          />
        )}
        {!isExpanded && (
          <CollapsedView
            postsView={postsView ?? null}
            categories={categories ?? null}
            router={router}
          />
        )}
        <p
          className="text-blue text-sm font-semibold hover:underline select-none hover:cursor-pointer 
          lg:hidden self-center"
          onClick={() => setExpanded(!isExpanded)}
        >
          {!isExpanded
            ? slice.primary.see_all_text?.toUpperCase()
            : "ver postagens recentes".toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
}
