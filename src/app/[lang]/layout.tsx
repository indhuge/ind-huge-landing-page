import type { Metadata } from "next";
import { createClient, repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import { PrismicPreview } from "@prismicio/next";

const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
  title: "ind[huge]",
  description: "ind[huge]",
};
*/
type Params = { lang: string };
export const dynamic = 'force-dynamic'

export default async function RootLayout({params, children}: {params: Params, children: React.ReactNode} ) {
  const client = createClient();
  const header = await client
    .getByUID("header", "header", { lang: params.lang })
  //.catch(() => notFound());
  const footer = await client
    .getByUID("footer", "footer", { lang: params.lang })
  //.catch(() => notFound());

  console.log(header);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header page={header} />
        <main>{children}</main>
        <Footer page={footer} />
      </body>
    </html>
  );
}

/*
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const header = await client
    .getByUID("header", "header", { lang: params.lang })
    .catch(() => notFound());

  const footer = await client
    .getByUID("footer", "footer", { lang: params.lang })
    .catch(() => notFound());

  return {
  };
}
*/