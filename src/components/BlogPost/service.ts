import { getHost } from "@/host";

export function getLinkedInShareLink(title: string, pageUrl: string) {
  return `http://www.linkedin.com/shareArticle?mini=true&url=${
    getHost() + pageUrl
  }&title=${title}&summary=some%20summary%20if%20you%20want&source=indhuge.com`;
}

export function getWhatsappShareLink(pageUrl: string) {
  return `https://api.whatsapp.com/send?text=${getHost() + pageUrl}`;
}
