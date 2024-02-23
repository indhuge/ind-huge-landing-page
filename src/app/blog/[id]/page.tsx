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
  const newsletterInfo = GetNewsletter()
  const metaimage = require(tPage?.data?.meta_image as string)
  return (
    <>
      <Head>
        <title>{tPage?.data?.meta_title}</title>
        <meta name="description" content={tPage?.data?.meta_description as string} />
        <meta property="og:image" content={metaimage} />
        <meta property="image" content={metaimage} />
        <meta property="og:description" content={tPage?.data?.meta_description as string} />
        <meta property="og:title" content={tPage?.data?.meta_title as string} />
      </Head>
      <BlogPost post={await tPage} categories={await tCategories} newsletter={(await newsletterInfo)!!} />
    </>
  );
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
