import { SliceZone } from "@prismicio/react";
import { getBlogPage } from "./service";
import { components } from "@/slices";

export default async function BlogPage() {
  const page = await getBlogPage();
  return <SliceZone slices={page.data.slices} components={components} />;
}
