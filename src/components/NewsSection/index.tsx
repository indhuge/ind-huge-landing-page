"use client"
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GetNewsPosts } from "./service";
import { useEffect, useState } from "react";
import { BlogPostDocument } from "../../../prismicio-types";
import calendar from "public/assets/calendar.svg"
import Link from "next/link";


export default function Cases({ slice }: any) {
  const [news,setNews] = useState<BlogPostDocument<string>[]>()
  useEffect(()=> {
    GetNewsPosts(slice?.primary?.lang as string).then((news)=>{setNews(news)});
  })
    return(
      <div className="w-full h-fit pt-20 px-10 TabletPortrait:px-4 bg-white">
        <h2 className="text-3xl text-blue font-bold pb-2 ">{slice.primary.title}</h2>
        <div className="pb-20 grid grid-flow-col-dense grid-cols-2 grid-rows-2 Mobile:grid-rows-4 Mobile:grid-cols-1 w-full h-full gap-4">
        {news?.map((item:BlogPostDocument<string>, i:number) => {
          const isLastRow = (i === 2);
          //console.log(item.data.image.url)
          const style = {
            backgroundImage:`url(${item.data.image.url})`
          }
          return(
            <div 
            style={style}
            key={i}
            className={`flex flex-col p-4 bg-blend-overlay bg-black bg-opacity-50 bg-center bg-cover 
            rounded-xl overflow-hidden relative  ${isLastRow ? 'row-span-2' : 'h-[200px]'}`}>
              <h2 className="text-white text-2xl TabletPortrait:text-xl">
                {item.data.title}
              </h2>
              <p className="text-white text-m pb-14 Laptop:pb-10 Mobile:pb-8 TabletPortrait:text-sm TabletPortrait:pb-12 ">
                {item.data.description}
              </p>
              <div className="flex flex-row">
                <button className="w-fit border-1 px-3 py-1 Mobile:py-0 rounded-2xl hover:bg-slate-600 transition-all">
                  <Link href={`/blog/${item.uid}`}>
                    <p className="uppercase text-base Mobile:text-sm">
                       {item.data.carouselbutton ||"Ler Mais"}
                    </p>
                  </Link>
                </button>                
                <div className="flex-1"></div>
                <div className={`${isLastRow ? 'absolute right-4 top-4' : ''}`}>
                  <PrismicNextImage
                    alt=""
                    field={calendar}
                    className="inline"
                  />
                  <label className=" Mobile:text-xs ml-1">
                    {item.data.date}
                  </label>
                </div>
              </div>
            </div>
            )
        })}
        </div>
      </div>
    );
}