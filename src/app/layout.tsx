import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({children}: {children: React.ReactNode} ) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}