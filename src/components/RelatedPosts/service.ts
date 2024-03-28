import { createClient } from "@/prismicio";

export async function getRelatedPosts(lang: string, uid: string, categoryUID: string) {
  const client = createClient();
  const allPosts = await client.getAllByType("blog_post", {lang: lang});
  const catPosts = allPosts
    //@ts-expect-error
    .filter((e) => e.data.category.uid == categoryUID && e.lang == lang && e.uid != uid)
    .sort(
      (a, b) =>
        new Date(b.data.date as string).getTime() -
        new Date(a.data.date as string).getTime()
    )
    .slice(0, 2);
  return catPosts;
}
