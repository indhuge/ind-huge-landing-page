import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-dynamic'

export default async function RootLayout({children}: {children: React.ReactNode} ) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}