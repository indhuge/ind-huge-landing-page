import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import React from "react";
import FaqComponent from "@/components/faqComponent";
import Head from "next/head";

type Params = { uid: "faq" };

export default async function Faq({ params }: { params: Params }) {
  const client = createClient();
  const dados = {
    page: await client.getSingle("faq").catch(() => notFound()),
    categorias: await client.getAllByType("category"),
    blogPosts: await client.getAllByType("blog_post")
  }
  //const metaimage = require(dados?.page?.data?.meta_image as string)
  return (
    <>
     {/*
      <Head>
        <title>{dados?.page?.data?.meta_title}</title>
        <meta name="description" content={dados?.page?.data?.meta_description as string} />
        {/*<meta property="og:image" content={metaimage} />
        <meta property="image" content={metaimage} />}
        <meta property="og:description" content={dados?.page?.data?.meta_description as string} />
        <meta property="og:title" content={dados?.page?.data?.meta_title as string} />
      </Head>
      */}
      {/*Script Hubspot*/}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/43688574.js"
      />
      <FaqComponent {...dados}/>
      <SliceZone slices={dados.page.data.slices} components={components} />
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
    .getSingle("faq")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("faq");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
