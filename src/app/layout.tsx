import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-dynamic'

export default async function RootLayout({children}: {children: React.ReactNode} ) {
  return (
    <html>
      <body className={inter.className}> 
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}