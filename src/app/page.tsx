import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Banner from "@/components/banner";
import { pages } from "next/dist/build/templates/app-page";
import BlogCard from "@/components/BlogCard";
import Head from "next/head";

type Params = { uid: "landing_page" };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getSingle("landing_page").catch(() => notFound());
  const banner = await client
    .getByUID("banner", "banner")
    .catch(() => notFound());
  // console.log(page.data.slices);
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
      {/*Script Hubspot*/}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/43688574.js"
      />
      <Banner page={banner} />
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
    .getByUID("landing_page", "landing_page")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("landing_page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
