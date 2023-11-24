/* eslint-disable @next/next/no-async-client-component */
//"use client";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Params = { uid: string };

export default async function Page() {
    const client = createClient();
    const page = await client
        .getByUID("footer", "footer")
    //.catch(() => notFound());
    console.log(typeof page);
    const iconeLocalizacao = require("../../../public/assets/icone-localizacao.svg");
    //const [checkbox, setCheckbox] = useState(false);
    
    return (
        <div 
            className={`
                text-white       
                bg-gradient-to-br from-[#01666C] via-[#014E6C] to-[#01916B]
            `}
        >

            <div
                className={`
                    grid grid-cols-1     
                    space-x-8 px-32 py-1 
                    items-center justify-end 
                `}
            >
                <div className="grid grid-cols-7 my-12 text-sm">
                    <div className="col-span-2 mx-5">
                        <PrismicNextImage field={page?.data?.logo} />
                        <p className="my-7">{page?.data?.descricao_logo}</p>
                        <button className="flex-initial bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105">{page?.data?.cta_label}</button>
                    </div>
                    <div className="grid grid-cols-1 mx-5">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_navegacao}</h5>
                        {page?.data?.links.map((i, index) => {
                            let link = i?.link as string
                            return (
                                <Link key={index} href={link} className="text-white -mt-6">{i?.label}</Link>
                            );
                        })}
                    </div>
                    <div className="flex flex-col mx-5">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_contato}</h5>
                        {page?.data?.labels_contato.map((i, index) => {
                            return (
                                <label key={index} className="text-white my-2">{i?.label}</label>
                            );
                        })}
                        <div className="flex flex-row mt-2">
                            {page?.data?.botoes_contato.map((i, index) => {
                                let link = i?.link as string
                                return (
                                    <Link key={index} href={link} className="text-white p-2 mr-3 rounded-full border-solid border"><PrismicNextImage field={i?.icone} /></Link>
                                );
                            })}
                        </div>
                    </div>
                    <form className="col-span-3 mx-5">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_newsteller}</h5>
                        <label>{page?.data?.descricao_newsteller}</label>
                        <div className="my-4 border-2 rounded relative">
                            <label className="absolute left-2 -top-3 px-1 bg-gradient-to-br from-[#015263] to-[#015664]">E-mail</label>
                            <input className="border-none bg-transparent w-full p-2.5" type="email" name="email" placeholder="Digite seu melhor e-mail..." required />
                        </div>
                        <div className="flex items-center justify-between">
                            <input className="scale-150 -mr-12" type="checkbox" name="corcordo" /*onChange={()=>setCheckbox(!checkbox)}*/ required />
                            <label>Concordo em receber e-mails</label>
                            <input className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 " type="submit" value="INSCREVER-SE" disabled={false} />
                        </div>
                    </form>
                </div>

            </div>
            <div className="grid grid-cols-2 border-t border-[#018567] px-36 py-2">
                <div className="flex flex-col">
                    <label>{page?.data?.direitos}</label>
                    <span className="flex flex-row">
                        <Image src={iconeLocalizacao} alt="localização" className="scale-150 mr-1.5"/>
                        <label>{page?.data?.endereco}</label>
                    </span>
                </div>
                <div className="flex flex-row items-center place-content-end">
                    {page?.data?.redes_sociais.map((i, index) => {
                        let link = i?.link as string
                        return (
                            <Link key={index} href={link} className="text-white ml-4 scale-125"><PrismicNextImage field={i?.icone} /></Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("footer");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}
/*
export async function getStaticProps(){
    const client = createClient();
    const page = await client
        .getByUID("footer", "footer")
    //.catch(() => notFound());
    console.log(typeof page);
    return {props: {page}}
}
*/