import { createClient } from "@/prismicio";

export async function getBlogPage(lang: string) {
  const client = createClient();
  const page = await client.getSingle("blog", {lang: lang});
  return page;
}
