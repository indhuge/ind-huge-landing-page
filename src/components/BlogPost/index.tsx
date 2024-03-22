"use client"
import Image from "next/image";
import {
  BlogDocumentDataSlicesSlice,
  BlogPostDocument,
  CategoryDocument,
} from "../../../prismicio-types";
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
import Style from "./hoverEffect.module.css";
import { useEffect, useState } from "react";

export default function BlogPost({
  lang,
  post,
  categories,
  newsletter,
}: {
  lang: string;
  post: BlogPostDocument<string>;
  categories: CategoryDocument<string>[];
  newsletter: BlogDocumentDataSlicesSlice;
}) {
  // const date = new Date(post.data.date as string);
  const date = post.data.date?.split("-");
  const [labels, setLabels] = useState({
    leitura: "",
    compartilhar: ""
  })

  useEffect(() => {
    if (lang === "pt-br") { setLabels({ leitura: `Leitura de ${post.data.time_of_reading} ${post.data.time_of_reading === 1 ? "minuto" : "minutos"}`, compartilhar: "Compartilhar" }) }
    else if (lang === "en-us") { setLabels({ leitura: `${post.data.time_of_reading} ${post.data.time_of_reading === 1 ? "minute" : "minutes"} Read`, compartilhar: "Share" }) }
    else if (lang === "es-es") { setLabels({ leitura: `Lectura de ${post.data.time_of_reading} ${post.data.time_of_reading === 1 ? "minuto" : "minutos"}`, compartilhar: "Compartir" }) }
  },[lang, post.data.time_of_reading])

  console.log(post.data.date);
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="LaptopS:container px-5 LaptopS:px-0 py-16 grid grid-cols-[3fr_1fr] MaxBlogGrid:grid-cols-1 gap-10">
        <div>
          <h1 className="text-darkblue font-bold text-3xl">
            {post.data.title}
          </h1>
          <div className="flex gap-2 md:hidden">
            <Image src={Clock} alt="Clock icon" />
            <p className="text-darkgray">{labels.leitura}</p>
          </div>
          <div
            className={
              "grid grid-cols-1 grid-rows-1 overflow-hidden h-fit my-3 " +
              Style.wrapper
            }
          >
            <PrismicNextImage
              className="h-80 w-full object-cover rounded-lg row-start-1 row-end-2 col-start-1 col-end-2"
              field={post.data.image}
            />
            {post.data.image.alt && (
              <div
                className={
                  "bg-darkgray row-start-1 row-end-2 col-start-1 col-end-2 h-fit self-end opacity-0 translate-y-4 transition-all " +
                  Style.target
                }
              >
                <p className="text-white p-2">{post.data.image.alt}</p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center text-darkgray mb-8 MaxS_mobile:flex-col">
            <div className="flex gap-5">
              <p className="font-bold">{post.data.autor}</p>
              <p>{`${date?.at(2)}/${date?.at(1)}/${date?.at(0)}`}</p>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 MaxMd:hidden">
                <Image src={Clock} alt="Clock icon" />
                <p className="text-darkgray">{labels.leitura}</p>
              </div>
              <div className="flex gap-2">
                <Image src={tag} alt="tag" />
                <p>
                  {
                    // @ts-expect-error
                    categories.filter((e) => e.uid == post.data.category.uid)[0].data.name
                  }
                </p>
              </div>
            </div>
          </div>
          <SliceZone slices={post.data.slices} components={components} />
          <div className="grid grid-cols-[1fr_auto] items-center gap-5 my-8">
            <div className="bg-gray h-[0.05rem] w-full"></div>
            <div className="flex gap-2 items-center">
              <p className="font-light text-darkgray">{labels.compartilhar}</p>
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
            lang={lang}
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
              //@ts-expect-error
              label_checkbox={newsletter.primary.label_checkbox}
              //@ts-expect-error
              label_botao={newsletter.primary.label_botao}
            />
            <HighlightedPosts lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
