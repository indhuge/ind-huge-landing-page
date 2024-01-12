import Image from "next/image";
import { BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import tag from "/public/assets/tag.svg";
import { ResolvingMetadata } from "next";
import Newsletter from "@/components/Newsletter/basic";
import RelatedPosts from "../RelatedPosts";
import Link from "next/link";
import { Facebook, LinkedIn, WhatsApp } from "@mui/icons-material";
import HighlightedPosts from "../HighlightedPosts";
import Clock from "/public/assets/Clock.svg";
import { getLinkedInShareLink, getWhatsappShareLink } from "./service";
import { getHost } from "@/host";

export default function BlogPost({
  post,
  categories,
}: {
  post: BlogPostDocument<string>;
  categories: CategoryDocument<string>[];
}) {
  const date = new Date(post.data.date as string);

  return (
    <div className="bg-white px-5 TabletLandscape:px-32 py-16 grid grid-cols-[3fr_1fr] MaxLg:grid-cols-1 gap-10">
      <div>
        <h1 className="text-darkblue font-bold text-3xl">{post.data.title}</h1>
        <div className="flex gap-2 md:hidden">
          <Image src={Clock} alt="Clock icon" />
          <p className="text-darkgray">{`Leitura de ${post.data.time_of_reading} minutos`}</p>
        </div>
        <PrismicNextImage
          className="h-80 w-full object-cover rounded-lg my-3"
          field={post.data.image}
        />
        <div className="flex justify-between items-center text-darkgray mb-8 MaxS_mobile:flex-col">
          <div className="flex gap-5">
            <p className="font-bold">{post.data.autor}</p>
            <p>{`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}</p>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2 MaxMd:hidden">
              <Image src={Clock} alt="Clock icon" />
              <p className="text-darkgray">{`Leitura de ${post.data.time_of_reading} minutos`}</p>
            </div>
            <div className="flex gap-2">
              <Image src={tag} alt="tag" />
              <p>
                {
                  // @ts-expect-error
                  categories.filter((e) => e.uid == post.data.category.uid)[0]
                    .data.name
                }
              </p>
            </div>
          </div>
        </div>
        <SliceZone slices={post.data.slices} components={components} />
        <div className="grid grid-cols-[1fr_auto] items-center gap-5 my-8">
          <div className="bg-gray h-[0.05rem] w-full"></div>
          <div className="flex gap-2 items-center">
            <p className="font-light text-darkgray">Compartilhar</p>
            <Link
              href={getWhatsappShareLink(post.url ?? "")}
              className="aspect-square w-8 rounded-full border-1 border-darkblue flex items-center justify-center px-5"
              target="_blank"
            >
              <WhatsApp className="fill-darkblue" />
            </Link>
            <Link
              href={`https://www.facebook.com/dialog/share?app_id=1396622270963643&display=popup&href=${
                getHost() + post.url ?? ""
              }&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer`}
              className="aspect-square w-8 rounded-full border-1 border-darkblue flex items-center justify-center px-5"
            >
              <Facebook className="fill-darkblue" />
            </Link>
            <Link
              href={getLinkedInShareLink(
                post.data.title as string,
                post.url ?? ""
              )}
              className="aspect-square w-8 rounded-full border-1 border-darkblue flex items-center justify-center px-5"
              target="_blank"
            >
              <LinkedIn className="fill-darkblue" />
            </Link>
          </div>
        </div>
        <RelatedPosts
          uid={post.uid}
          categoryUID={
            //@ts-expect-error
            post.data.category.uid
          }
        />
      </div>
      <div>
        <div className="sticky top-20 mt-10 MaxMd:block MaxLg:grid MaxLg:grid-cols-2 MaxLg:pl-0 gap-7">
          <Newsletter
            titulo="Indhuge Newsletter"
            subtitulo="Lorem ipsum dolor sit amet consectetur. A integer est eget."
            type={true}
          />
          <HighlightedPosts />
        </div>
      </div>
    </div>
  );
}
