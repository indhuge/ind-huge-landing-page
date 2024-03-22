import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogPostDocument } from "../../../../../prismicio-types";
import { GetBlogPage, GetCategories, GetNewsletter } from "./service";
import BlogPost from "@/components/BlogPost";
import { Metadata, ResolvingMetadata } from "next";
import { NewsletterProps } from "@/slices/NewsletterSlice";
import Head from "next/head";

export default async function BlogPage({ params }: { params: { id: string, lang: string } }) {
  const tPage = await GetBlogPage(params);
  const tCategories = GetCategories(params.lang);
  const newsletterInfo = GetNewsletter(params.lang);

  return <BlogPost lang={ params.lang } post={await tPage} categories={await tCategories} newsletter={(await newsletterInfo)!!} />;
}

export async function generateMetadata(
  { params }: { params: { id: string, lang: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tPage = await GetBlogPage(params);
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
