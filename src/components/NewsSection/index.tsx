"use client"
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function Cases({ slice }: any) {
    return(
      <div className="w-full h-fit pt-20 px-36 bg-white">
        <h2 className="text-3xl text-blue font-bold pb-2 ">{slice.primary.title}</h2>
        <div className=" grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
        {slice.items.map((item:any, i:number) => {
          return(
            <div className="grid gap-4 rounded-xl overflow-hidden relative h-[200px]">
              <PrismicNextImage 
                className="h-fit w-fit row-start-1 row-end-2 col-start-1 col-end-2 "
                field={item.image}
              />
              <div className="relative row-start-1 row-end-2 col-start-1 col-end-2 p-4 bg-black bg-opacity-50">
                <h2 className="text-white text-2xl">
                  {item.title}
                </h2>
                <p className="text-white text-m pb-10">
                  {item.text}
                </p>
                <button className="absolute left-4 border-1 px-3 py-1 rounded-2xl hover:bg-slate-600 transition-all">
                  <PrismicNextLink field={item.buttonlink}>
                    <p className="uppercase text-base Mobile:text-sm">
                      {item.buttontext}
                    </p>
                  </PrismicNextLink>
                </button>
                <div className="absolute right-4 py-2">
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