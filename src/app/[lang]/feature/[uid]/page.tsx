import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type Params = { uid: "feature"; lang: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID("feature", params.uid, { lang: params.lang }).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("feature", params.uid, { lang: params.lang }).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  // Pegando todas as páginas do tipo "feature"
  const pages = await client.getAllByType("feature");

  return pages.map((page) => ({
    uid: page.uid,
    lang: page.lang,
  }));
}
