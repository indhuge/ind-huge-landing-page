import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-dynamic'
type Params = { lang : string };

export default async function RootLayout({children, params}: {children: React.ReactNode, params: Params} ) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}> 
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return{
    metadataBase: new URL('https://www.indhuge.com'),
    alternates: {
      canonical: '/',
      languages: {
        'pt-br': '/',
        'en-us': '/en-us',
        'es-es': '/es-es',
      },
    },
  };
}