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

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": ${tPage?.data?.title},
            "image": [
              ${tPage?.data?.image}
            ],
            "datePublished": ${tPage?.data?.date},
            "dateModified": ${tPage?.data?.date},
            "author": [{
                "@type": "Organization",
                "name": "indhuge",
                "url": "https://www.indhuge.com"
            }]
          }
        `}} />
      </Head>
      <BlogPost lang={ params.lang } post={await tPage} categories={await tCategories} newsletter={(await newsletterInfo)!!} />
    </>
  );
}

export async function generateMetadata(
  { params }: { params: { id: string, lang: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tPage = await GetBlogPage(params);
  return {
    metadataBase: new URL('https://www.indhuge.com'),
    alternates: {
      canonical: '/',
      languages: {
        'pt-br': '/',
        'en-us': '/en-us',
        'es-es': '/es-es',
      },
    },
    title: tPage?.data?.meta_title,
    description: tPage?.data?.meta_description,
    openGraph: {
      type: "website",
      title: tPage?.data?.meta_title as string,
      description: tPage?.data?.meta_title as string,
      images: [tPage.data.meta_image.url ?? ""],
      url: tPage.data.meta_url as string,
    },
    twitter: {
      card: 'summary_large_image',
      title: tPage.data.meta_title as string,
      site: "https://www.indhuge.com",
      description: tPage.data.meta_description as string,
      images: [tPage.data.meta_image.url ?? ""], // Must be an absolute URL
    },
  };
}
