"use client";
import { RecentsPostsAndCategoriesProps } from "@/slices/RecentsPostsAndCategories";
import {
  filterByTag,
  getCategoriesAndPosts,
  seeAll,
} from "../RecentsPostsAndCategoriesComponent/service";
import CircularButton from "../CircularButton";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import Link from "next/link";
import ExpandedView from "../RecentsPostsAndCategoriesComponent/expandedView";
import CollapsedView from "../RecentsPostsAndCategoriesComponent/collapsedView";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SkeletonCardView from "../RecentsPostsAndCategoriesComponent/skeletonCardView";
import ArrowIcon from "/public/assets/arrow.svg";
import Image from "next/image";
import { RecentPostsProps } from "@/slices/RecentPosts";

export default function RecentsPostsComponent({ slice }: RecentPostsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoryDocument<string>[]>();
  const [posts, setPosts] = useState<BlogPostDocument<string>[]>();
  const router = useRouter();

  useEffect(() => {
    getCategoriesAndPosts().then((e) => {
      setCategories(e.categories);
      setPosts(seeAll(e.posts, e.categories));
      setTimeout(() => setIsLoading(false), 1000);
    });
  }, []);

  if (isLoading)
    return (
      <div className="bg-white flex flex-col py-10 px-2 ss_mobile:px-10 md:px-36">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex flex-row justify-between items-center text-gray animate-pulse">
            <h2 className="text-3xl font-bold">{slice.primary.main_title}</h2>
            <button className="w-48 h-10 hidden rounded-full bg-gray text-darkblue items-center justify-center py-2 px-6 gap-2 lg:flex"></button>
          </div>
          <SkeletonCardView />
          <button className="h-10 flex rounded-full bg-gray text-darkblue items-center justify-center py-2 px-6 gap-2 lg:hidden"></button>
        </div>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white flex flex-col py-10 px-2 ss_mobile:px-10 md:px-36"
    >
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl text-darkblue font-bold">
            {slice.primary.main_title}
          </h2>
          <button
            className="hidden rounded-full gradient-green text-darkblue items-center justify-center py-2 px-6 gap-2 lg:flex hover:scale-110 transition-transform duration-300"
            onClick={() => {
              router.push("/blog", { fetch: true });
            }}
          >
            {slice.primary.call_to_action_text}
            <Image src={ArrowIcon} width={15} height={15} alt="arrow" />
          </button>
        </div>
        <CollapsedView
          categories={categories!!}
          postsView={posts!!}
          router={router}
        />
        <button className="flex rounded-full gradient-green text-darkblue items-center justify-center py-2 px-6 gap-2 lg:hidden">
          {slice.primary.call_to_action_text}
          <Image src={ArrowIcon} width={15} height={15} alt="arrow" />
        </button>
      </div>
    </motion.div>
  );
}
