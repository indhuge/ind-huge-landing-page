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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const header = await client
    .getByUID("header", "header")
    //.catch(() => notFound());

  const footer = await client
    .getByUID("footer", "footer")
    //.catch(() => notFound());


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header page={header} />
        <main>{children}</main>
        <Footer page={footer} />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
