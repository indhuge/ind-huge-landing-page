import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient();
  const page = await client.getSingle("galery").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("galery").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
