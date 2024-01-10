import { createClient } from "@/prismicio";

export async function GetBlogPage(id: string) {
  const client = createClient();
  const page = await client.getByUID("blog_post", id);
  return page;
}

export async function GetCategories() {
  const client = createClient();
  return await client.getAllByType("category");
}
