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
  return (
    <>
      <Head>
        <title>{page?.data?.meta_title}</title>
        <meta name="description" content={page?.data?.meta_description as string} />
        {/*<meta property="og:image" content={metaimage} />
        <meta property="image" content={metaimage} />*/}
        <meta property="og:description" content={page?.data?.meta_description as string} />
        <meta property="og:title" content={page?.data?.meta_title as string} />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog", "blog")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
