'use client'
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import { FooterDocument } from "../../../prismicio-types";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Alert, AlertTitle, FormControlLabel, Snackbar, styled } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import rmAutoStyle from "../contato/removeAutocomplete.module.css"
import { useSearchParams } from "next/navigation";

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

async function register(email: string, setEmail: Dispatch<SetStateAction<string>>, setSucesso: Dispatch<SetStateAction<boolean>>, setFalha: Dispatch<SetStateAction<boolean>>, setRegistrado: Dispatch<SetStateAction<boolean>>) {
    const res = await fetch("/api/mailchimp", {
        body: JSON.stringify({
            email: email,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST"
    });

    //const {id, emailrec, response} = await res.

    const { error } = await res.json();
    if (error) console.log(error);

    if (res.status === 200) { setEmail(""); setSucesso(true); }
    else if (res.status === 400) { setRegistrado(true); }
    else setFalha(true);
}

export default function Page(page: any) {
    page = (page?.page) as FooterDocument<string>
    const iconeLocalizacao = require("../../../public/assets/icone-localizacao.svg");
    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const [registrado, setRegistrado] = useState(false);
    const [falha, setFalha] = useState(false);

    const [lingua, setLingua] = useState('');
    const [linguaLink, setLinguaLink] = useState('');

    const searchParams = useSearchParams();

    useEffect(() => {
        if (window.location.href.includes("/pt-br")) {
            setLingua("pt-br");
            setLinguaLink("");
        } else if (window.location.href.includes("/en-us")) {
            setLingua("en-us");
            setLinguaLink("en-us/");
        } else if (window.location.href.includes("/es-es")) {
            setLingua("es-es");
            setLinguaLink("es-es/");
        } else {
            setLingua("pt-br");
            setLinguaLink("");
        }

        const pos = searchParams.get("spos");
        if (pos != undefined) {
            const e = document.getElementById(pos);
            e?.scrollIntoView({ behavior: "smooth" });
        }
    }, [searchParams])

    return (
        <div
            className={`
                text-white       
                bg-gradient-to-br from-[#01666C] via-[#014E6C] to-[#01916B]
                ${rmAutoStyle.wrapper}
            `}
        >

            <div
                className={`
                    grid grid-cols-1     
                    space-x-8 px-[5vw] py-1 
                    items-center justify-end 
                    TabletPortrait:px-0
                `}
            >
                <div className="grid grid-cols-7 my-12 text-sm TabletPortrait:grid-cols-1">
                    <div className="col-span-2 mx-5 TabletPortrait:col-span-1 TabletPortrait:mb-8">
                        <Link href={"https://www.indhuge.com"}><PrismicNextImage alt="" field={page?.data?.logo} /></Link>
                        <p className="my-7 TabletPortrait:w-[70vw]">{page?.data?.descricao_logo}</p>
                        <button onClick={() => { window.location.href = `../${linguaLink}?spos=contactForm` }} className="flex-initial bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105">{page?.data?.cta_label}</button>
                    </div>
                    <div className="grid grid-cols-1 mx-5">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_navegacao}</h5>
                        {page?.data?.links.map((i: any, index: undefined) => {
                            let link = i?.link as string
                            return (
                                <Link key={index} href={`../${linguaLink}${link}`} className="text-white text-sm TabletPortrait:text-[1vw] -mt-6 TabletPortrait:text-base TabletPortrait:mt-4 hover:font-bold">{i?.label}</Link>
                            );
                        })}
                    </div>
                    <div className="flex flex-col mx-5 TabletPortrait:mt-8">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_contato}</h5>
                        {page?.data?.labels_contato.map((i: any, index: undefined) => {
                            return (
                                <label key={index} className="text-white text-sm TabletPortrait:text-[1vw] my-2 TabletPortrait:text-base">{i?.label}</label>
                            );
                        })}
                        <div className="flex flex-row mt-2">
                            {page?.data?.botoes_contato.map((i: any, index: undefined) => {
                                let link = i?.link as string
                                return (
                                    <Link key={index} href={link} className="text-white p-2 mr-3 rounded-full border-solid border hover:border-2"><PrismicNextImage alt="" field={i?.icone} /></Link>
                                );
                            })}
                        </div>
                    </div>
                    <form className="col-span-3 mx-5 TabletPortrait:col-span-1 TabletPortrait:mt-8 TabletPortrait:w-[90vw]">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_newsletter}</h5>
                        <label className="my-2">{page?.data?.descricao_newsletter}</label>
                        <CssTextField
                            style={{ margin: "1rem 0", }}
                            id="email"
                            type="email"
                            label="E-mail"
                            inputProps={{ style: { color: "#FFFFFF" } }}
                            InputLabelProps={{ style: { color: "#FFFFFF" } }}
                            value={email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value); console.log(email) }}
                            fullWidth
                            required
                        />
                        <div className="flex items-center justify-between Mobile:flex-col">
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={() => { setChecked(!checked) }} style={{ color: "white" }} />}
                                label={<span className="text-sm">{page?.data?.label_checkbox}</span>}
                            />
                            <input className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 disabled:bg-slate-700 disabled:hover:scale-100 Mobile:text-sm" type="button" onClick={() => { register(email, setEmail, setSucesso, setFalha, setRegistrado) }} value={page?.data?.label_enviar} disabled={!checked} />
                        </div>
                    </form>
                </div>

            </div>
            <div className="grid grid-cols-2 border-t border-[#018567] px-[5vw] py-2 TabletPortrait:grid-cols-1 TabletPortrait:px-4 TabletPortrait:text-[12px]">
                <div className="flex flex-col">
                    <label>{page?.data?.direitos}</label>
                    <span className="flex flex-row">
                        <Image src={iconeLocalizacao} alt="localização" className="scale-150 mr-1.5 ml-0.5" />
                        <label>{page?.data?.endereco}</label>
                    </span>
                </div>
                <div className="flex flex-row items-center place-content-end TabletPortrait:place-content-start TabletPortrait:h-[8vh] pr-6">
                    {page?.data?.redes_sociais.map((i: any, index: undefined) => {
                        let link = i?.link as string
                        return (
                            <Link key={index} href={link} className="text-white mr-4 scale-125 hover:scale-150"><PrismicNextImage alt="" field={i?.icone} /></Link>
                        );
                    })}
                </div>
            </div>
            {
                sucesso ?
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        open={sucesso}
                        autoHideDuration={6000}
                        onClose={() => setSucesso(false)}
                    >
                        <Alert severity="success" onClose={() => setSucesso(false)} sx={{ width: '100%' }}> <AlertTitle>Obrigado por assinar nosso Newsletter!</AlertTitle>Verifique sua Caixa de Entrada</Alert>
                    </Snackbar>
                    :
                    <></>
            }
            {
                registrado ?
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        open={registrado}
                        autoHideDuration={6000}
                        onClose={() => setRegistrado(false)}
                    >
                        <Alert severity="warning" onClose={() => setRegistrado(false)} sx={{ width: '100%' }}> <AlertTitle>Esse e-mail já foi registrado na Newsletter!</AlertTitle>Cheque sua Caixa de Entrada!</Alert>
                    </Snackbar>
                    :
                    <></>
            }
            {
                falha ?
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        open={falha}
                        autoHideDuration={6000}
                        onClose={() => setFalha(false)}
                    >
                        <Alert severity="error" onClose={() => setFalha(false)} sx={{ width: '100%' }}> <AlertTitle>Ocorreu um erro ao tentar assinar a Newsletter!</AlertTitle></Alert>
                    </Snackbar>
                    :
                    <></>
            }
        </div>
    );
}