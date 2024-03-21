"use client"
import Image from "next/image";
import { BlogPostDocument, CategoryDocument, FaqDocument } from "../../../prismicio-types";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { blue } from "@mui/material/colors";
import { PrismicNextImage } from "@prismicio/next";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FaqPesquisa(dados: { page: FaqDocument<string>, categorias: CategoryDocument<string>[], blogPosts: BlogPostDocument<string>[] }) {
    const router = useRouter();
    const page = dados.page;
    const categorias = dados.categorias;
    const blogPosts = dados.blogPosts;
    const iconePesquisa = require("../../../public/assets/Icone-pesquisa.svg");
    const [pesquisa, setPesquisa] = useState("");

    var limitador = 0

    categorias?.map((i, index) => { console.log(i?.data?.name, i?.data?.is_visible) });

    const [topico, setTopico] = useState('');

    const mudaTopico = (event: SelectChangeEvent) => {
        setTopico(event.target.value as string);
    };

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className="grid grid-cols-1 w-full h-[50vh] pb-[10vh] items-center justify-items-center">
                <label className="text-4xl font-bold mt-24 text-center">{page?.data?.banner_texto}</label>
                <div className="relative">
                    <input
                        className="w-[50vw] h-[70px] rounded-xl px-5 text-[#002748] TabletPortrait:px-2 TabletPortrait:w-[90vw] TabletPortrait:text-sm"
                        type="text"
                        value={pesquisa}
                        onChange={(e) => { setPesquisa(e.target.value) }}
                        placeholder={page?.data?.placeholder_pesquisa as string}
                    />
                    <Image className="absolute right-4 top-[35%]" src={iconePesquisa} alt="pesquisar" />
                </div>
            </div>
            <div className="px-[7vw] grid grid-cols-3 bg-white TabletPortrait:grid-cols-1 w-full">
                <div className="col-span-2">
                    <Box className="mt-12 w-[40%] TabletPortrait:w-[80%]" sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel className="text-blue" id="demo-simple-select-label">{page?.data?.label_topico_selecionar}</InputLabel>
                            <Select
                                className="rounded-full"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={topico}
                                label="Tópico"
                                onChange={mudaTopico}
                                sx={{ color: blue[900] }}
                            >
                                <MenuItem value={""}>{page?.data?.label_topico_nenhum}</MenuItem>
                                {categorias?.map((i, index) => {
                                    if (i?.data?.is_visible){
                                        return (
                                            <MenuItem key={index} value={i?.uid} >{i?.data?.name}</MenuItem>
                                        );
                                    }
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    {page?.data?.item?.map((i: any, index) => {
                        if ((i?.topico.uid as string === topico || topico === "") && (i?.pergunta?.toLowerCase().includes(pesquisa.toLowerCase()) || i?.resposta?.toLowerCase().includes(pesquisa.toLowerCase()) || pesquisa === "")) {
                            return (
                                <Accordion key={index} className="my-3">
                                    <AccordionSummary
                                        expandIcon={<AddIcon sx={{ color: blue[900] }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="text-blue font-bold">{i?.pergunta}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="text-[#5F5F5F]">{i?.resposta}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        }
                    })}
                </div>
                <div className="pt-16">
                    <label className="text-2xl text-blue font-bold ml-5 mb-7 TabletPortrait:ml-0">{page?.data?.titulo_blog_slice}</label>
                    {blogPosts.map((i: any, index) => {
                        if (i?.data?.category?.uid as string === topico || topico === "") {
                            if (limitador < 3) {
                                limitador++;
                                return (
                                    <Link key={index} href={`./blog/${i?.uid}`}>
                                        <div className="grid grid-cols-2 mt-2 TabletPortrait:grid-cols-3">
                                            <PrismicNextImage field={i?.data.image} alt="" className="h-[15vh] w-full ml-5 rounded-2xl TabletPortrait:ml-0" />
                                            <div className="ml-8 mt-2 TabletPortrait:col-span-2 TabletPortrait:ml-2">
                                                <label className="text-blue text-sm font-bold">{i?.data?.title}</label>
                                                <p className="text-[#5F5F5F] text-sm mb-1">{i?.data?.description}</p>
                                                <label className="text-[#5F5F5F] text-xs">{i?.data?.date}</label>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        }
                    })}
                    <button className="bg-green py-2 rounded-full text-darkblue font-bold hover:scale-105 Mobile:text-sm w-[90%] ml-5 mt-5 mb-16 TabletPortrait:ml-[5%]" type="button" onClick={() => { router.push(`./blog?category=${topico}`) }}>{page?.data?.cta_blog} &#10140;</button>
                </div>
            </div>
        </>
    )
}