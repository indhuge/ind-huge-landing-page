import { SliceZone } from "@prismicio/react";
import { getBlogPage } from "./service";
import { components } from "@/slices";
import Head from "next/head";

export default async function BlogPage() {
  const page = await getBlogPage();
  return (
    <>
      <Head>
        <title>Mãos a obra - ind[huge]</title>
        <meta name="description" content="Mãos a obra - indhuge" />
        <meta property="og:image" content="https://indhuge.com/assets/card-image.svg" />
        <meta property="image" content="https://indhuge.com/assets/card-image.svg" />
        <meta property="og:description" content="Mãos a obra - indhuge" />
        <meta property="og:title" content="Mãos a obra - ind[huge]" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
