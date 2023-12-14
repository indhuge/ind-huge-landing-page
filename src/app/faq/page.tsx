import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Autocomplete, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import FaqPesquisa from "@/components/faqPesquisa";
import { FaqDocumentData, Simplify } from "../../../prismicio-types";

type Params = { uid: "faq" };

export type dados = {
  data: FaqDocumentData
}
export default async function Faq({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getSingle("faq").catch(() => notFound());
  console.log(page.data.slices);
  

  return (
    <>
      {/*Script Hubspot*/}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/43688574.js"
      />
      <FaqPesquisa/>
      <div className="w-full h-fit mt-[60px]"></div>
      <label>teste</label>
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
    .getByUID("faq", "faq")
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
