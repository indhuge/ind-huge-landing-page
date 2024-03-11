import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogPostDocument } from "../../../../prismicio-types";
import { GetBlogPage, GetCategories, GetNewsletter } from "./service";
import BlogPost from "@/components/BlogPost";
import { Metadata, ResolvingMetadata } from "next";
import { NewsletterProps } from "@/slices/NewsletterSlice";
import Head from "next/head";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const tPage = await GetBlogPage(params.id);
  const tCategories = GetCategories();
  const newsletterInfo = GetNewsletter();

  return <BlogPost post={await tPage} categories={await tCategories} newsletter={(await newsletterInfo)!!} />;
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tPage = await GetBlogPage(params.id);
  return {
    title: tPage?.data?.meta_title,
    description: tPage?.data?.meta_description,
    openGraph: {
      title: tPage?.data?.meta_title as string,
      description: tPage?.data?.meta_title as string,
      images: [tPage.data.meta_image.url ?? ""],
      url: tPage.data.meta_url as string,
    },
  };
}