import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogPostDocument } from "../../../../prismicio-types";
import { GetBlogPage, GetCategories } from "./service";
import BlogPost from "@/components/BlogPost";
import { Metadata, ResolvingMetadata } from "next";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const tPage = GetBlogPage(params.id);
  const tCategories = GetCategories();
  return <BlogPost post={await tPage} categories={await tCategories} />;
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tPage = await GetBlogPage(params.id);
  return {
    title: tPage.data.title,
    openGraph: {
      images: [tPage.data.meta_image.url ?? ""],
    },
    description: tPage.data.meta_description,
  };
}
