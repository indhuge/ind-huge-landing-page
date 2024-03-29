import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Banner from "@/components/banner";
import { pages } from "next/dist/build/templates/app-page";
import BlogCard from "@/components/BlogCard";
import Head from "next/head";

type Params = { uid: "landing_page", lang : string };
export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getSingle("landing_page", {lang : params.lang}).catch(() => notFound());
  const banner = await client
    .getByUID("banner", "banner", {lang : params.lang})
    .catch(() => notFound());
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "image": "https://www.example.com/example_image.jpg",
            "url": "https://www.indhuge.com",
            "sameAs": ["https://indhuge.com/en-us", "https://indhuge.com/es-es"],
            "logo": "https://www.indhuge.com/assets/card-image.svg",
            "name": "indhuge",
            "description": "Prevenimos falhas antes de ocorrerem usando tecnologia avançada, economizando tempo e dinheiro, para que sua operação siga sem interrupções indesejadas.",
            "email": "indhuge@gmail.com",
            "telephone": "+5546999114345",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Alberto Fracasso, 250",
              "addressLocality": "Brasil",
              "addressCountry": "BR",
              "addressRegion": "Dois Vizinhos, Parana",
              "postalCode": "85660000"
            }
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
    .getByUID("landing_page", "landing_page", {lang : params.lang})
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
  const pages = await client.getAllByType("landing_page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
