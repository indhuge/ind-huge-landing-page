import { createClient } from "@/prismicio";
import { getBlogPage } from "../service";

export async function GetBlogPage(id: string) {
  const client = createClient();
  const page = await client.getByUID("blog_post", id);
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
