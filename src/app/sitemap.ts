import { createClient } from "@/prismicio";
import { getHost } from "@/host";
import { Route } from "@prismicio/client";

type RouterMap = {
    url: string;
    lastModified: string;
}

export default async function sitemap() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");
  const host = getHost()
  let _sitemap : RouterMap[] = [];
  //@ts-expect-error
  client.routes.map((e : Route) => {
    if(e.path.indexOf(":") == -1)
        _sitemap.push({url: host + e.path, lastModified: new Date().toISOString()})
  })
  pages.map((e) => _sitemap.push({url : host + (e.url ?? ""), lastModified : e.last_publication_date ?? new Date()}))
  return _sitemap;
}