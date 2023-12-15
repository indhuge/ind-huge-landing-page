"use client"
import Image from "next/image";
import { FaqDocument } from "../../../prismicio-types";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { blue } from "@mui/material/colors";





export default function FaqPesquisa(page: FaqDocument) {
    const iconePesquisa = require("../../../public/assets/Icone-pesquisa.svg");
    const options = ["teste", "teste2"]//dados?.item?.pergunta;
    const [pesquisa, setPesquisa] = useState("");

    const topicos: Array<string> = [""]

    page?.data?.item?.map((i, index) => {
        if (!topicos.includes(i?.topico as string)) {
            topicos.push(i?.topico as string);
        }
        console.log(topicos);
    })

    const [topico, setTopico] = useState('Todos');

    const mudaTopico = (event: SelectChangeEvent) => {
        setTopico(event.target.value as string);
    };

    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className="grid grid-cols-1 w-[100vw] h-[50vh] pb-[10vh] items-center justify-items-center">
                <label className="text-4xl font-bold mt-24">{page?.data?.banner_texto}</label>
                <div className="relative">
                    <input
                        className="w-[50vw] h-[70px] rounded-xl px-5 text-[#002748]"
                        type="text"
                        value={pesquisa}
                        onChange={(e) => { setPesquisa(e.target.value) }}
                        placeholder="Alguma dúvida? Busque em nossa central"
                    />
                    <Image className="absolute right-4 top-[35%]" src={iconePesquisa} alt="pesquisar" />
                </div>
            </div>
            <div className="px-[7vw] grid grid-cols-3 bg-white">
                <div className="col-span-2">
                    <Box className="mt-12 w-[40%]" sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel className="text-blue" id="demo-simple-select-label">Selecionar tópico</InputLabel>
                            <Select
                                className="rounded-full"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={topico}
                                label="Tópico"
                                onChange={mudaTopico}
                                sx={{color: blue[900]}}
                            >
                                {topicos?.map((i, index) => {
                                    return (
                                        <MenuItem key={index} value={i} >{i}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    {page?.data?.item?.map((i, index) => {
                        if ((i?.topico as string === topico || topico === "") && (i?.pergunta?.toLowerCase().includes(pesquisa.toLowerCase()) || i?.resposta?.toLowerCase().includes(pesquisa.toLowerCase()) || pesquisa === "")) {
                            return (
                                <Accordion key={index} className="my-3">
                                    <AccordionSummary
                                        expandIcon={<AddIcon sx={{color: blue[900]}}/>}
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
                <></>
            </div>
        </>
    )
}