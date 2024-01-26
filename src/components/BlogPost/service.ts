import { getHost } from "@/host";

export function getLinkedInShareLink(title: string, pageUrl: string) {
  return `http://www.linkedin.com/shareArticle?mini=true&url=${
    encodeURIComponent(getHost() + pageUrl)
  }&title=${title}&summary=some%20summary%20if%20you%20want&source=indhuge.com`;
}

export function getWhatsappShareLink(pageUrl: string) {
  return `https://api.whatsapp.com/send?text=${getHost() + pageUrl}`;
}

export function getFacebookShareLink(pageUrl: string) {
  return `https://www.facebook.com/dialog/share?app_id=${
    process.env.FACEBOOK_APP_ID
  }&display=popup&href=${getHost() + pageUrl}&redirect_uri=${
    getHost() + pageUrl
  }`;
}
