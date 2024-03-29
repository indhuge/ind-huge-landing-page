import { createClient } from "@/prismicio";

export async function GetNewsPosts(lang: string) {
  const client = createClient();
  // Pega todas as paginas
  const _posts = await client.getAllByType("blog_post", {lang: lang});
  
  // Filtra todas as paginas que possuem .data.category.uid iquais a news
  // @ts-expect-error
  const _news = _posts.filter((e) => e.data.category.uid == "news");


  return _news
}