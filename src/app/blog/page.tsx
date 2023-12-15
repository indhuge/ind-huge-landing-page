import { SliceZone } from "@prismicio/react";
import { getBlogPage } from "./service";
import { components } from "@/slices";

export default async function BlogPage() {
  const page = await getBlogPage();
  console.log(page.data.slices);
  return <SliceZone slices={page.data.slices} components={components} />;
}
