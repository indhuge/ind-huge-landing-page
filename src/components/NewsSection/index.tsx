"use client"
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function Cases({ slice }: any) {
    return(
      <div className="w-full h-fit pt-20 px-36 bg-white">
        <h2 className="text-3xl text-blue font-bold pb-2 ">{slice.primary.title}</h2>
        <div className="pb-20 grid grid-flow-col-dense grid-cols-2 grid-rows-2 w-full h-full gap-4">
        {slice.items.map((item:any, i:number) => {
          const isLastRow = (i === 2);
          console.log(item.image.url)
          const style = {
            backgroundImage:`url(${item.image.url})`
          }
          return(
            <div 
            style={style}
            className={`flex flex-col p-4 bg-blend-overlay bg-black bg-opacity-50 bg-center bg-cover rounded-xl overflow-hidden relative  ${isLastRow ? 'row-span-2' : 'h-[200px]'}`}>
              <div className={`${isLastRow ? 'flex-1' : 'hidden'}`}>
                <PrismicNextImage 
                alt=""
                field={item.lefticon}
                className="inline">
                </PrismicNextImage>
                <label className=" Mobile:text-xs ml-1">
                    {item.lefticontext}
                </label>
              </div>
              <h2 className="text-white text-2xl">
                {item.title}
              </h2>
              <p className="text-white text-m pb-14">
                {item.text}
              </p>
              <div className="flex flex-row">
                <button className="w-fit border-1 px-3 py-1 rounded-2xl hover:bg-slate-600 transition-all">
                  <PrismicNextLink field={item.buttonlink}>
                    <p className="uppercase text-base Mobile:text-sm">
                      {item.buttontext}
                    </p>
                  </PrismicNextLink>
                </button>
                <div className="flex-1"></div>
                <div className={`${isLastRow ? 'absolute right-4 top-4' : 'py-2'}`}>
                  <PrismicNextImage
                    alt=""
                    field={item.rigthicon}
                    className="inline"
                  />
                  <label className=" Mobile:text-xs ml-1">
                    {item.rigthicontext}
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