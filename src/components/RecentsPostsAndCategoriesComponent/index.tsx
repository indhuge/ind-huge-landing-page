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
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import SkeletonCardView from "./skeletonCardView";
import ArrowIcon from "/public/assets/arrow.svg";
import Image from "next/image";

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
  const searchParams = useSearchParams();

  const filterClick = (
    index: number,
    cats: CategoryDocument<string>[],
    posts: BlogPostDocument<string>[]
  ) => {
    setSelected(index);
    const tmp =
      index == -1
        ? seeAll(posts, cats)
        : filterByTag(cats[index].uid as string, posts);
    setPostsView(tmp);
  };

  useEffect(() => {
    getCategoriesAndPosts(slice?.primary?.lang as string).then((e) => {
      setCategories(e.categories);
      setPosts(e.posts);
      setPostsView(seeAll(e.posts, e.categories));
      const cat = searchParams.get("category");
      if (cat != undefined) {
        const tmp = e.categories.findIndex((e) => e.uid == cat);
        console.log(cat, tmp);
        filterClick(tmp ?? -1, e.categories, e.posts);
        const el = document.getElementById("RecentPosts");
        el?.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => setIsLoading(false), 1000);
    });
  }, []);

  if (isLoading)
    return (
      <div
        className="bg-white flex flex-col py-10 px-2 ss_mobile:px-10 md:px-36"
        id="RecentPosts"
      >
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
            <div className="flex-row gap-2 justify-center items-center hover:border-b-1 border-blue select-none hover:cursor-pointer hidden lg:flex">
              <p
                className="text-blue text-sm font-semibold"
                onClick={() => setExpanded(!isExpanded)}
              >
                {slice.primary.see_all_text?.toUpperCase()}
              </p>
              <Image src={ArrowIcon} width={20} height={20} alt="arrow" />
            </div>
          </div>

          <SkeletonCardView />

          <div className="flex-row gap-2 justify-center items-center hover:border-b-1 border-blue select-none hover:cursor-pointer flex lg:hidden">
            <p
              className="text-blue text-sm font-semibold"
              onClick={() => setExpanded(!isExpanded)}
            >
              {slice.primary.see_all_text?.toUpperCase()}
            </p>
            <Image src={ArrowIcon} width={20} height={20} alt="arrow" />
          </div>
        </div>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white flex flex-col py-10 px-2 ss_mobile:px-10 md:px-36"
      id="RecentPosts"
    >
      <div className="flex justify-center items-center flex-wrap">
        <CircularButton
          key={-1}
          text="ver todos"
          onClick={() => {
            filterClick(-1, categories!!, posts!!);
          }}
          isSelected={selected == -1}
          className={null}
        />
        {categories?.map((e, i) => {
          return (
            <CircularButton
              key={i}
              text={e.data.name as string}
              onClick={() => filterClick(i, categories!!, posts!!)}
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
          <div className="flex-row gap-2 justify-center items-center hover:border-b-1 border-blue select-none hover:cursor-pointer hidden lg:flex">
            <p
              className="text-blue text-sm font-semibold"
              onClick={() => setExpanded(!isExpanded)}
            >
              {!isExpanded
                ? slice.primary.see_all_text?.toUpperCase()
                : "ver postagens recentes".toUpperCase()}
            </p>
            <Image src={ArrowIcon} width={20} height={20} alt="arrow" />
          </div>
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
        <div className="flex-row gap-2 justify-center items-center hover:border-b-1 border-blue select-none hover:cursor-pointer flex lg:hidden">
          <p
            className="text-blue text-sm font-semibold"
            onClick={() => setExpanded(!isExpanded)}
          >
            {!isExpanded
              ? slice.primary.see_all_text?.toUpperCase()
              : "ver postagens recentes".toUpperCase()}
          </p>
          <Image src={ArrowIcon} width={20} height={20} alt="arrow" />
        </div>
      </div>
    </motion.div>
  );
}
