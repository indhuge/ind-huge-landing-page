// @ts-nocheck
import { createClient } from "@/prismicio";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";

export async function getCategoriesAndPosts() {
  const client = createClient();
  const c = client.getAllByType("category");
  const p = client.getAllByType("blog_post");

  return {
    categories: (await c).filter(
      (e) => e.data.is_visible == true || e.data.is_visible == undefined
    ),
    posts: await p,
  };
}

export function seeAll(
  posts: BlogPostDocument<string>[],
  categories : CategoryDocument<string>[]
): BlogPostDocument<string>[] {
  return posts.filter((p) => categories.find((e) => e.uid == p.data.category.uid)?.data.is_visible).sort(
    (e, a) =>
      Date.parse(a.last_publication_date as string) - Date.parse(e.last_publication_date as string)
  );
}

export function filterByTag(tagUid: string, posts: BlogPostDocument<string>[]) {
  return posts.filter((e) => e.data.category.uid == tagUid);
}

export function getNumberOfNPages(posts: any[]) {
  return Math.ceil(posts.length / 6);
}
