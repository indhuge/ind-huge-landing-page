import { SliceZone } from "@prismicio/react";
import { getBlogPage } from "./service";
import { components } from "@/slices";
import Head from "next/head";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

type Params = { uid: "blog", lang: string };

export default async function BlogPage({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getSingle("blog", { lang: params.lang }).catch(() => notFound());
  //const metaimage = require(page?.data?.meta_image as string)
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getSingle("blog", { lang: params.lang })
    .catch(() => notFound());

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
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      type: "website",
      title: page?.data?.meta_title as string,
      description: page?.data?.meta_title as string,
      images: [page.data.meta_image.url ?? ""],
      url: page.data.meta_url as string,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.meta_title as string,
      site: "https://www.indhuge.com",
      description: page.data.meta_description as string,
      images: [page.data.meta_image.url ?? ""], // Must be an absolute URL
    },
  };
}
