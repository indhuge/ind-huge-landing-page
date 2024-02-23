import { SliceZone } from "@prismicio/react";
import { getBlogPage } from "./service";
import { components } from "@/slices";
import Head from "next/head";

export default async function BlogPage() {
  const page = await getBlogPage();
  const metaimage = require(page?.data?.meta_image as string)
  return (
    <>
      <Head>
        <title>{page?.data?.meta_title}</title>
        <meta name="description" content={page?.data?.meta_description as string} />
        <meta property="og:image" content={metaimage} />
        <meta property="image" content={metaimage} />
        <meta property="og:description" content={page?.data?.meta_description as string} />
        <meta property="og:title" content={page?.data?.meta_title as string} />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
