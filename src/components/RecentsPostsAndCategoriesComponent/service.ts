import { createClient } from "@/prismicio";

export async function getCategoriesAndPosts() {
  const client = createClient();
  const c = client.getAllByType("category");
  const p = client.getAllByType("blog_post");

  return {
    categories: await c,
    posts: await p,
  };
}
