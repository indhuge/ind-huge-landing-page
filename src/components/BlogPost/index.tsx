import Image from "next/image";
import { BlogDocumentDataSlicesSlice, BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import tag from "/public/assets/tag.svg";
import { ResolvingMetadata } from "next";
import Newsletter from "@/components/Newsletter/basic";
import RelatedPosts from "../RelatedPosts";
import Link from "next/link";
import Facebook from "/public/assets/share/logo-facebook.svg";
import Linkedin from "/public/assets/share/logo-linkedin.svg";
import Whatsapp from "/public/assets/share/logo-whatsapp.svg";
import HighlightedPosts from "../HighlightedPosts";
import Clock from "/public/assets/Clock.svg";
import {
  getFacebookShareLink,
  getLinkedInShareLink,
  getWhatsappShareLink,
} from "./service";

export default function BlogPost({
  post,
  categories,
  newsletter
}: {
  post: BlogPostDocument<string>;
  categories: CategoryDocument<string>[];
  newsletter: BlogDocumentDataSlicesSlice;
}) {
  const date = new Date(post.data.date as string);
  console.log(post.data.title)
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="LaptopS:container px-5 LaptopS:px-0 py-16 grid grid-cols-[3fr_1fr] MaxBlogGrid:grid-cols-1 gap-10">
        <div>
          <h1 className="text-darkblue font-bold text-3xl">
            {post.data.title}
          </h1>
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
                className="aspect-square w-11 rounded-full border-1 border-darkblue flex items-center justify-center px-2 transition-all duration-500 hover:px-0 hover:border-transparent"
                target="_blank"
              >
                <Image
                  src={Whatsapp}
                  alt="Whatsapp logo"
                  className="fill-darkblue h-full w-full"
                />
              </Link>
              <Link
                href={getFacebookShareLink(post.url ?? "")}
                className="aspect-square w-11 rounded-full border-1 border-darkblue flex items-center justify-center px-2 transition-all duration-500 hover:px-0 hover:border-transparent"
                target="_blank"
              >
                <Image
                  src={Facebook}
                  alt="Facebook logo"
                  className="fill-darkblue h-full w-full"
                />
              </Link>
              <Link
                href={getLinkedInShareLink(
                  post.data.title as string,
                  post.url ?? ""
                )}
                className="aspect-square w-11 rounded-full border-1 border-darkblue flex items-center justify-center px-2 transition-all duration-500 hover:px-0 hover:border-transparent"
                target="_blank"
              >
                <Image
                  src={Linkedin}
                  alt="LinkedIn logo"
                  className="fill-darkblue h-full w-full"
                />
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
          <div className="sticky top-20 mt-10 TabletPortrait:grid-cols-1 BlogGrid:grid BlogGrid:grid-cols-2 BlogGrid:pl-0 gap-7">
            <Newsletter
              //@ts-expect-error
              titulo={newsletter.primary.titulo}
              //@ts-expect-error
              subtitulo={newsletter.primary.subtitulo}
              type={true}
            />
            <HighlightedPosts />
          </div>
        </div>
      </div>
    </div>
  );
}
