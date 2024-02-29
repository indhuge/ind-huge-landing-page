'use client'
import borda from "../../../public/assets/bordaVideo.svg";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, styled } from "@mui/material";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { ContatoProps } from "@/slices/ContatoSlice";
import { KeyTextField } from "@prismicio/client";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Styles from "./removeAutocomplete.module.css"

type Params = { uid: string };

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#FFFFFF',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#FFFFFF',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#FFFFFF',
        },
        '&:hover fieldset': {
            borderColor: '#FFFFFF',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FFFFFF',
        },
    },
});

export async function mandaForm(
    formDados:{
        nome: string;
        telefone: string;
        email: string;
        mensagem: string;
        newsletter: boolean;
        cookie: any;
    },
    setFormDados: React.Dispatch<React.SetStateAction<{
        nome: string;
        telefone: string;
        email: string;
        mensagem: string;
        newsletter: boolean;
        cookie: any;
    }>>) {

    const dados = await JSON.stringify(formDados)

    fetch("/api/formularioContato", {
        headers: { "Content-Type": "application/json" },
        body: dados,
        method: "POST"
    })
    setFormDados({
        ...formDados,
        nome: "",
        telefone: "",
        email: "",
        mensagem: ""
    })
    alert("Formulario Enviado com Sucesso!");
}

export default function Contato(slice: ContatoProps) {

    // console.log(slice)

    const [cookies] = useCookies(["hubspotutk"]);
    const email = require("../../../public/assets/emailicone.svg");
    const whatsapp = require("../../../public/assets/whatsappicone.svg");

    const [formDados, setFormDados] = useState({
        "nome": "",
        "telefone": "",
        "email": "",
        "mensagem": "",
        "newsletter": true,
        "cookie": cookies.hubspotutk
    });

    function highlightTextWithColor(
        text: KeyTextField,
        highlights: KeyTextField,
        color: string
    ): React.ReactNode {
        if (!highlights) return text;

        const splitWords = highlights.split(" ");
        let highlightedText = text;

        splitWords.forEach((word) => {
            const regex = new RegExp(`\\b${word}\\b`, "gi");
            highlightedText = highlightedText!!.replace(
                regex,
                `<span style="color: ${color}">${word}</span>`
            );
        });

        return <div dangerouslySetInnerHTML={{ __html: highlightedText!! }} />;
    }

    const highlightedText = highlightTextWithColor(
        slice?.slice?.primary?.titulo,
        slice?.slice?.primary?.destaque_titulo,
        "#26D07C"
    );

    return (
        <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className={`vw-[100vw] ${Styles.wrapper}`}>
            <div
                id="contactForm"
                className={`
                grid grid-cols-10
                space-x-8 pl-16 py-1
                items-center
                TabletPortrait:grid-cols-1 TabletPortrait:pl-0 TabletPortrait:space-x-[5vw] 
            `}
            >
                <div className={`flex flex-col items-start justify-center col-span-5 bg-[length:100%_100%] bg-no-repeat my-52 w-full aspect-video TabletPortrait:bg-[length:0_0] TabletPortrait:w-full TabletPortrait:h-fit TabletPortrait:my-0`} style={{ backgroundImage: `url(${borda.src})` }}>
                    <div className="flex-none text-[2.5vw] font-bold mx-[2vw] my-4 TabletPortrait:text-[7vw] TabletPortrait:mx-6">
                        {highlightedText}
                    </div>
                    <p className="mx-[2vw] mb-[2vh] text-[1.5vw] TabletPortrait:text-[4vw] TabletPortrait:mx-6">{slice?.slice?.primary?.descricao}</p>
                    <div className="flex flex-row] TabletPortrait:mb-[2vh]">
                        <Link href={slice?.slice?.primary?.link_whatsapp as string} className="bg-green p-[1vw] mr-3 ml-[2vw] rounded-full TabletPortrait:mx-6 TabletPortrait:p-[3vw] hover:border-2"><PrismicNextImage field={slice?.slice?.primary?.logo_whatsapp} alt="" className="w-[1.5vw] aspect-square TabletPortrait:w-[5vw]"/></Link>
                        <Link href={slice?.slice?.primary?.link_email as string} className="bg-green p-[1vw] mr-3 rounded-full TabletPortrait:p-[3vw] hover:border-2"><PrismicNextImage field={slice?.slice?.primary?.logo_email} alt="" className="w-[1.5vw] aspect-square TabletPortrait:w-[5vw]"/></Link>
                    </div>
                </div>
                <form className={`flex flex-col items-start space-y-4 justify-center col-span-5 bg-[length:100%_100%] bg-no-repeat p-6 w-[80%] rounded TabletPortrait:w-[90vw] TabletPortrait:h-fit TabletPortrait:mb-[5vh]`} style={{ backgroundImage: "linear-gradient(118deg, #003973 0%, #016C6B 100%)" }}>
                    <CssTextField
                        id="nome"
                        type="text"
                        label="Nome Completo"
                        placeholder="Digite seu nome..."
                        inputProps={{ style: { color: "#FFFFFF" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.nome}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setFormDados({ ...formDados, nome: event.target.value }); //console.log(formDados) 
                        }}
                        fullWidth
                        required
                    />
                    <CssTextField
                        id="telefone"
                        type="text"
                        label="Telefone(apenas números)"
                        placeholder="46912345678"
                        inputProps={{ pattern: "[0-9]{10,11}", style: { color: "#FFFFFF" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.telefone}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setFormDados({ ...formDados, telefone: event.target.value }); //console.log(formDados)
                        }}
                        fullWidth
                        required
                    />
                    <CssTextField
                        id="email"
                        type="email"
                        label="E-mail"
                        placeholder="Digite seu melhor e-mail..."
                        inputProps={{ style: { color: "#FFFFFF" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setFormDados({ ...formDados, email: event.target.value }); //console.log(formDados) 
                        }}
                        fullWidth
                        required
                    />
                    <CssTextField
                        id="mensagem"
                        type="text"
                        label="Mensagem"
                        placeholder="Escreva sua dúvida ou motivo de contato..."
                        inputProps={{ style: { color: "#FFFFFF", height: "100px" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.mensagem}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setFormDados({ ...formDados, mensagem: event.target.value }); //console.log(formDados)
                        }}
                        fullWidth
                        multiline
                        required
                    />
                    <div className="flex items-center justify-between w-full TabletPortrait:flex-col">
                        <FormControlLabel
                            control={
                                <Checkbox checked={formDados.newsletter}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFormDados({ ...formDados, newsletter: event.target.checked }); //console.log(formDados)
                                    }}
                                    style={{ color: "white" }}
                                />
                            }
                            label={<span className="text-sm Mobile:text-[4vw]">Concordo em receber e-mails</span>}
                        />
                        <input className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 float-right Mobile:text-sm" type="button" onClick={() => { mandaForm(formDados, setFormDados) }} value="ENVIAR MENSAGEM" />
                    </div>
                </form>
            </div>
        </div>
    );
}