import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import React from "react";
import FaqComponent from "@/components/faqComponent";
import Head from "next/head";

type Params = { uid: "faq", lang : string };

export default async function Faq({ params }: { params: Params }) {
  const client = createClient();
  const dados = {
    page: await client.getSingle("faq", { lang: params.lang }).catch(() => notFound()),
    categorias: await client.getAllByType("category", { lang: params.lang }),
    blogPosts: await client.getAllByType("blog_post", {lang: params.lang})
  }
  //const metaimage = require(dados?.page?.data?.meta_image as string)
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": ${dados?.page?.data?.item[0]?.pergunta},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>${dados?.page?.data?.item[0]?.resposta}</p>"
              }
            }, 
            {
              "@type": "Question",
              "name": ${dados?.page?.data?.item[1]?.pergunta},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>${dados?.page?.data?.item[1]?.resposta}</p>"
              }
            },
            {
              "@type": "Question",
              "name": ${dados?.page?.data?.item[2]?.pergunta},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>${dados?.page?.data?.item[2]?.resposta}</p>"
              }
            },
            {
              "@type": "Question",
              "name": ${dados?.page?.data?.item[3]?.pergunta},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>${dados?.page?.data?.item[3]?.resposta}</p>"
              }
            },
            {
              "@type": "Question",
              "name": ${dados?.page?.data?.item[4]?.pergunta},
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>${dados?.page?.data?.item[4]?.resposta}</p>"
              }
            }]
          }
        `}} />
      </Head>
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
    .getSingle("faq", { lang: params.lang }).catch(() => notFound())
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

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("faq");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
