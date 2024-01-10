import { createClient } from "@/prismicio";

export async function getRelatedPosts(uid: string, categoryUID: string) {
  const client = createClient();
  const allPosts = await client.getAllByType("blog_post");
  const catPosts = allPosts
    //@ts-expect-error
    .filter((e) => e.data.category.uid == categoryUID && e.uid != uid)
    .sort(
      (a, b) =>
        new Date(b.data.date as string).getTime() -
        new Date(a.data.date as string).getTime()
    )
    .slice(0, 2);
  return catPosts;
}
