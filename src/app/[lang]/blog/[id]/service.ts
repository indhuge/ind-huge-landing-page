import { createClient } from "@/prismicio";
import { getBlogPage } from "../service";
import { notFound } from "next/navigation";

export async function GetBlogPage(params: {id: string, lang: string}) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.id, { lang: params.lang }).catch(() => notFound());
  return page;
}

export async function GetCategories(lang: string) {
  const client = createClient();
  return await client.getAllByType("category", {lang: lang});
}

export async function GetNewsletter(lang: string)
{
  const blog = await getBlogPage(lang);
  return blog.data.slices.find((e) => e.slice_type == "newsletter");
}
