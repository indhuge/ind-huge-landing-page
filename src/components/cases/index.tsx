import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage } from "@prismicio/next";




export default function Cases({slice}:CasesSliceProps) {
    return (
    <div className="w-full h-fit p-[100px] TabletPortrait:p-[0px] flex-col justify-center items-center gap-8 inline-flex bg-white">
        <div className="flex-col justify-center items-center gap-3 flex">
            <div className="text-green text-sm font-semibold uppercase tracking-[8.26px]">{slice?.primary.subtitle}</div>
            <div className="text-blue text-4xl font-bold mb-[32px] TabletPortrait:mb-[0px]">{slice?.primary.title}</div>
        </div>
        <div className="justify-center items-center gap-8 inline-flex ">
            <div className="w-199 h-109 overflow-hidden rounded-2xl ">
                <div className="grid">
                    <PrismicNextImage field={slice?.items[0].image} className="object-cover row-start-1 row-end-2 col-start-1 col-end-2"/>
                    <div className="row-start-1 row-end-2 col-start-1 col-end-2 relative h-109" style={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.46) 100%);"}}>
                        <div className="m-4">
                            <PrismicNextImage field={slice.items[0].rigthicon} className="inline "/>    
                            <label className=" ml-1">{slice.items[0].lefticontext}</label>
                            <label className="float-right ml-1">{slice.items[0].rigthicontext}</label>
                            <PrismicNextImage field={slice.items[0].lefticon} className="inline float-right"/>                      
                        </div>
                        <div className="w-full h-[25vh] absolute bottom-0" style={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%);"}}>
                            <div className="m-[5vh] text-center">
                                <label className="text-xl font-bold uppercase tracking-widest ">{slice.items[0].title}</label>
                                <p className="pt-3">{slice.items[0].text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
