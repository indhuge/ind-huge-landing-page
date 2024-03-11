import { SliceZone } from "@prismicio/react";
import { getBlogPage } from "./service";
import { components } from "@/slices";
import Head from "next/head";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

type Params = { uid: "blog" };

export default async function BlogPage({ params }: { params: Params }) {
  const page = await getBlogPage();
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
    .getSingle("blog")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page?.data?.meta_title as string,
      description: page?.data?.meta_title as string,
      images: [page.data.meta_image.url ?? ""],
      url: page.data.meta_url as string,
    },
  };
}