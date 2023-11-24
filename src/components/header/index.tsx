import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";

type Params = { uid: string };

export default async function Page() {
    const client = createClient();
    const detalhe = require("../../../public/assets/detalheHeader.png");
    const iconeUsuario = require("../../../public/assets/icone-usuario.svg")
    const page = await client
        .getByUID("header", "header")
        //.catch(() => notFound());

    return (
        <div 
            className={`
                sticky
                flex 
                space-x-8 pl-32 py-1 
                items-center justify-end 
                bg-gradient-to-br from-[#01666C] via-[#014E6C] to-[#01916B]
            `}
        >
            <div className="flex-auto justify-end">
                <PrismicNextImage field={page?.data?.logo} />
            </div>
            <div className="flex-none flex space-x-4 justify-center tablet:hidden">
                {page?.data?.links.map((i, index) => {
                    let link = i?.link as string
                    return (
                        <Link key={index} href={link} className="text-white">{i?.label}</Link>
                    );
                })}
            </div>
            <div className="flex flex-none space-x-4 tablet:hidden">
                <button className="flex-initial bg-green px-6 py-2 rounded-full text-darkblue hover:scale-105">{page?.data?.label_cta}</button>
                <button className="flex-initial bg-green px-3 py-2 rounded-full text-darkblue hover:scale-105"><Image src={iconeUsuario} alt="Icone Usuário"/></button>
            </div>
            <Image className="flex-initial tablet:hidden" src={detalhe} alt="Detalhe Header"/>
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
