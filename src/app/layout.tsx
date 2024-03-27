import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-dynamic'

export default async function RootLayout({children}: {children: React.ReactNode} ) {
  var lang = "pt-br"
  if (window.location.href.includes("en-us")){
    lang = "en-us"
  }
  else if (window.location.href.includes("es-es")){
    lang = "es-es"
  }
  return (
    <html lang={lang}>
      <body className={inter.className}> 
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}