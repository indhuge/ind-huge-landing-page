"use client";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { getRelatedPosts } from "./service";
import { BlogPostDocument } from "../../../prismicio-types";
import Link from "next/link";
import BlogCardSkeleton from "../BlogCard/skeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function RelatedPosts({
  uid,
  categoryUID,
}: {
  uid: string;
  categoryUID: string;
}) {
  const [posts, setPosts] = useState<BlogPostDocument<string>[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRelatedPosts(uid, categoryUID).then((e) => {
      setPosts(e);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence mode="popLayout">
        <motion.div
          key={Math.random()}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-darkblue text-2xl font-bold mb-4">
            Posts Relacionados
          </h2>
          <div className="flex gap-5">
            {[1, 2].map((e, i) => {
              return (
                <BlogCardSkeleton key={i} className="animate-pulse h-[30rem]" />
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!isLoading)
    return (
      <motion.div
        key={Math.random()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="text-darkblue text-2xl font-bold mb-4">
          Posts Relacionados
        </h2>
        <div className="flex gap-5">
          {posts.map((e, i) => {
            return (
              <Link href={e.url!!}>
                <BlogCard
                  key={i}
                  className="max-h-[30rem]"
                  onClick={() => null}
                  post={{
                    title: e.data.title as string,
                    description: e.data.description as string,
                    date: e.data.date?.toString() as string,
                    image: e.data.image,
                    // @ts-expect-error
                    tag: e.data.category.uid,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </motion.div>
    );
}
