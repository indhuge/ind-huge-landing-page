'use client'
import borda from "../../../public/assets/bordaVideo.svg";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, styled } from "@mui/material";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { ContatoSliceDefaultItem, Simplify } from "../../../prismicio-types";
import { ContatoProps } from "@/slices/ContatoSlice";
import { KeyTextField } from "@prismicio/client";

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

export async function mandaForm(dados: any) {

    dados = JSON.stringify(dados)

    fetch("/api/formularioContato", {
        headers: { "Content-Type": "application/json" },
        body: dados,
        method: "POST"
    })

    alert("Formulario Enviado com Sucesso!");
}

export default function Contato(slice: ContatoProps) {

    // console.log(slice)

    const [cookies] = useCookies(["hubspotutk"]);

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
        slice?.slice?.items[0]?.titulo,
        slice?.slice?.items[1]?.titulo,
        "#26D07C"
    );

    return (
        <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className="vw-[100vw]">
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
                    <div className="flex-none text-[2.5vw] font-bold mx-12 my-4 TabletPortrait:text-[7vw] TabletPortrait:mx-6">
                        {highlightedText}
                    </div>
                    <p className="mx-12 mb-24 text-[1.5vw] TabletPortrait:text-[4vw] TabletPortrait:mx-6">{slice?.slice?.primary?.descricao}</p>
                </div>
                <form className={`flex flex-col items-start space-y-4 justify-center col-span-5 bg-[length:100%_100%] bg-no-repeat p-6 w-[80%] rounded TabletPortrait:w-[90vw] TabletPortrait:h-fit TabletPortrait:mb-[5vh]`} style={{ backgroundImage: "linear-gradient(118deg, #003973 0%, #016C6B 100%)" }}>
                    <CssTextField
                        id="nome"
                        type="text"
                        label="Nome Completo"
                        placeholder="Digite seu nome..."
                        inputProps={{ style: { color: "#FFFFFF"} }}
                        InputLabelProps={{ style: { color: "#FFFFFF"} }}
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
                        <input className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 float-right Mobile:text-sm" type="button" onClick={() => { mandaForm(formDados) }} value="ENVIAR MENSAGEM" />
                    </div>
                </form>
            </div>
        </div>
    );
}