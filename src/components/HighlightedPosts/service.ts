import { createClient } from "@/prismicio";

export async function getHighlightedPosts() {
  const client = createClient();
  const _posts = client.getAllByType("blog_post");
  const _high = client.getSingle("postagens_destacadas");

  // @ts-expect-error
  const high = (await _high).data.posts.map((e) => e.data.uid as string);
  const posts = await _posts;

  return posts.filter((e) => high.find((f) => f == e.uid) != undefined);
}
