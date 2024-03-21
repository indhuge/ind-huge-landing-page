import { createClient } from "@/prismicio";

export async function getBlogPage() {
  const client = createClient();
  const page = await client.getSingle("blog");
  return page;
}
