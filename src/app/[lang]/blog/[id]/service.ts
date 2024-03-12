import { createClient } from "@/prismicio";
import { getBlogPage } from "../service";
import { notFound } from "next/navigation";

export async function GetBlogPage(params: {id: string, lang: string}) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.id, { lang: params.lang }).catch(() => notFound());
  return page;
}

export async function GetCategories() {
  const client = createClient();
  return await client.getAllByType("category");
}

export async function GetNewsletter()
{
  const blog = await getBlogPage();
  return blog.data.slices.find((e) => e.slice_type == "newsletter");
}
