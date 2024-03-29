"use client";

import { useEffect, useState } from "react";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import { getHighlightedPosts } from "./service";
import PostSticker from "../PostSticker";
import { BlogPost } from "../BlogCard";
import PostStickerSkeleton from "../PostSticker/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HighlightedPosts({
  lang,
  className,
}: {
  lang: string;
  className?: string;
}) {
  const [pages, setPages] = useState<BlogPostDocument<string>[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [titulo, setTitulo] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (lang === "pt-br") { setTitulo("Postagens Populares") }
    else if (lang === "en-us") { setTitulo("Highlighted Posts") }
    else if (lang === "es-es") { setTitulo("Publicaciones Populares") }
    getHighlightedPosts(lang).then((e) => {
      setPages(e);
      setTimeout(() => {
        setIsLoading(false);
      }, 750);
    });
  }, [lang]);

  if (isLoading) {
    return (
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={className}
        >
          <h2 className="text-darkblue font-bold text-xl mb-4">
            {titulo}
          </h2>
          <div className="flex flex-col gap-5">
            {[1, 2, 3].map((e, i) => {
              return <PostStickerSkeleton key={i} />;
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (pages) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-darkblue font-bold text-xl mb-4">
          {titulo}
        </h2>
        <div className="flex flex-col gap-5">
          {pages.map((e, i) => {
            const bp: BlogPost = {
              image: e.data.image,
              title: e.data.title as string,
              description: e.data.description as string,
              tag: "",
              date: e.data.date?.toString() as string,
            };

            return (
              <PostSticker
                post={bp}
                key={i}
                postUrl={e.url ?? ""}
                router={router}
              />
            );
          })}
        </div>
      </motion.div>
    );
  }
}
