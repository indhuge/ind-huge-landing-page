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

export default function BlogPost({
  post,
  categories,
}: {
  post: BlogPostDocument<string>;
  categories: CategoryDocument<string>[];
}) {
  const date = new Date(post.data.date as string);

  return (
    <div className="bg-white px-32 py-16 grid grid-cols-[3fr_1fr]">
      <div>
        <h1 className="text-darkblue font-bold text-3xl">{post.data.title}</h1>
        <PrismicNextImage
          className="h-80 w-full object-cover rounded-lg my-3"
          field={post.data.image}
        />
        <div className="flex justify-between items-center text-darkgray mb-8">
          <div className="flex gap-5">
            <p className="font-bold">{post.data.autor}</p>
            <p>{`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}</p>
          </div>
          <div className="flex gap-5">
            <p>{`Leitura de ${post.data.time_of_reading} minutos`}</p>
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
        <div className="grid grid-cols-[1fr_auto] items-center gap-5">
          <div className="bg-gray h-[0.05rem] w-full"></div>
          <div className="flex gap-2 items-center">
            <p className="font-light text-darkgray">Compartilhar</p>
            <Link
              href={`https://api.whatsapp.com/send?text=teste`}
              className="aspect-square w-8 rounded-full border-1 border-darkblue flex items-center justify-center px-5"
            >
              <WhatsApp className="fill-darkblue" />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?text=teste`}
              className="aspect-square w-8 rounded-full border-1 border-darkblue flex items-center justify-center px-5"
            >
              <Facebook className="fill-darkblue" />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?text=teste`}
              className="aspect-square w-8 rounded-full border-1 border-darkblue flex items-center justify-center px-5"
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
        <div className="sticky top-20 mt-10">
          <Newsletter
            titulo="Indhuge Newsletter"
            subtitulo="Lorem ipsum dolor sit amet consectetur. A integer est eget."
            type={true}
          />
        </div>
      </div>
    </div>
  );
}
