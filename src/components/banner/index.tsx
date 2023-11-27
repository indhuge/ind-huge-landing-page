'use client'
import { createClient } from "@/prismicio";
import Image from "next/image";
import borda from "../../../public/assets/bordaVideo.svg";
import { BannerDocument } from "../../../prismicio-types";

type Params = { uid: string };

export default function Page(page: any) {
    page = (page?.page) as BannerDocument<string>
    const detalhe = require("../../../public/assets/detalheBanner.png");

    return (
        <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className="vw-[100vw]">
            <div
                className={`
                grid grid-cols-10
                space-x-8 pl-32 py-1
                items-center
                TabletPortrait:grid-cols-1 TabletPortrait:pl-0 TabletPortrait:space-x-[5vw] 
            `}
            >
                <div className="flex flex-col flex-shrink col-span-4 mt-10 TabletPortrait:order-2 TabletPortrait:mt-0 TabletPortrait:space-x-[5vw] TabletPortrait:col-span-1">
                    <label className="text-xl mt-28 tracking-widest text-green TabletPortrait:mt-0 TabletPortrait:ml-[5vw]">{page?.data?.subtitulo}</label>
                    <label className="text-3xl text-bold">{page?.data?.titulo}</label>
                    <p className="mt-8 TabletPortrait:w-[90vw]">{page?.data?.texto}</p>
                    <div className="mt-8 mb-24"><button className="flex-initial font-bold bg-green px-6 py-2 rounded-full text-darkblue hover:scale-105 Mobile:text-sm">{page?.data?.label_cta} &#10140;</button></div>
                </div>
                <div className={`flex items-center justify-center col-span-5 bg-[length:100%_100%] bg-no-repeat mt-20 h-[280px] aspect-video TabletPortrait:w-[90vw] TabletPortrait:h-fit TabletPortrait:mb-[5vh]`} style={{ backgroundImage: `url(${borda.src})` }}>
                    <iframe className="h-[250px] aspect-video rounded-lg TabletPortrait:w-[90%] TabletPortrait:h-fit" src={page?.data?.video as string} allow="autoplay" />
                </div>
            </div>
            <Image className="flex-initial pl-1 pb-1 TabletPortrait:hidden TabletPortrait:pb-0" src={detalhe} alt="Detalhe Banner" />
        </div>
    );
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("header");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}
