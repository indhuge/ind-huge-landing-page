"use client";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import { getRelatedPosts } from "./service";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import Link from "next/link";
import BlogCardSkeleton from "../BlogCard/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { GetCategories } from "@/app/[lang]/blog/[id]/service";

export default function RelatedPosts({
  lang,
  uid,
  categoryUID,
}: {
  lang: string;
  uid: string;
  categoryUID: string;
}) {
  const [posts, setPosts] = useState<BlogPostDocument<string>[]>();
  const [categories, setCategories] = useState<CategoryDocument<string>[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [titulo, setTitulo] = useState("");

  const trySetIsLoading = () => {
    setIsLoading(false);
  };


  useEffect(() => {
    if (lang === "pt-br") { setTitulo("Posts Relacionados") }
    else if (lang === "en-us") { setTitulo("Related Posts") }
    else if (lang === "es-es") { setTitulo("publicaciones relacionadas") }
    getRelatedPosts(lang, uid, categoryUID).then((e) => {
      setPosts(e);
      setTimeout(() => {
        trySetIsLoading();
      }, 1000);
    });

    GetCategories(lang).then((e) => {
      setCategories(e);
      setTimeout(() => {
        trySetIsLoading();
      }, 1000);
    });
  }, [categoryUID, lang, uid]);

  if (isLoading) {
    return (
      <AnimatePresence mode="popLayout">
        <motion.div
          key={Math.random()}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-darkblue text-2xl font-bold mb-4">
            {titulo}
          </h2>
          <div className="flex gap-5 TabletPortrait:grid TabletPortrait:grid-cols-1 TabletPortrait:justify-center TabletPortrait:items-center">
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
          {titulo}
        </h2>
        <div className="flex gap-5 TabletPortrait:grid TabletPortrait:grid-cols-1 TabletPortrait:justify-center TabletPortrait:items-center">
          {posts?.map((e, i) => {
            return (
              <Link href={e.url!!} key={i}>
                <BlogCard
                  key={i}
                  className="max-h-[30rem]"
                  onClick={() => null}
                  post={{
                    title: e.data.title as string,
                    description: e.data.description as string,
                    date: e.data.date?.toString() as string,
                    image: e.data.image,
                    tag:
                      // @ts-expect-error
                      categories?.find((f) => f.uid == e.data.category.uid)
                        ?.data.name ?? "",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </motion.div>
    );
}
