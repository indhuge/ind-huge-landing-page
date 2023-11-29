'use client'
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import { FooterDocument } from "../../../prismicio-types";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, styled } from "@mui/material";
import { useState } from "react";

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

export default function Page(page: any) {
    page = (page?.page) as FooterDocument<string>
    const iconeLocalizacao = require("../../../public/assets/icone-localizacao.svg");
    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState("");

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
                    space-x-8 px-[5vw] py-1 
                    items-center justify-end 
                    TabletPortrait:px-0
                `}
            >
                <div className="grid grid-cols-7 my-12 text-sm TabletPortrait:grid-cols-1">
                    <div className="col-span-2 mx-5 TabletPortrait:col-span-1 TabletPortrait:mb-8">
                        <PrismicNextImage field={page?.data?.logo} />
                        <p className="my-7 TabletPortrait:w-[70vw]">{page?.data?.descricao_logo}</p>
                        <button className="flex-initial bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105">{page?.data?.cta_label}</button>
                    </div>
                    <div className="grid grid-cols-1 mx-5">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_navegacao}</h5>
                        {page?.data?.links.map((i: any, index: undefined) => {
                            let link = i?.link as string
                            return (
                                <Link key={index} href={link} className="text-white text-[1vw] -mt-6 TabletPortrait:text-base TabletPortrait:mt-4">{i?.label}</Link>
                            );
                        })}
                    </div>
                    <div className="flex flex-col mx-5 TabletPortrait:mt-8">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_contato}</h5>
                        {page?.data?.labels_contato.map((i: any, index: undefined) => {
                            return (
                                <label key={index} className="text-white text-[1vw] my-2 TabletPortrait:text-base">{i?.label}</label>
                            );
                        })}
                        <div className="flex flex-row mt-2">
                            {page?.data?.botoes_contato.map((i: any, index: undefined) => {
                                let link = i?.link as string
                                return (
                                    <Link key={index} href={link} className="text-white p-2 mr-3 rounded-full border-solid border"><PrismicNextImage field={i?.icone} /></Link>
                                );
                            })}
                        </div>
                    </div>
                    <form className="col-span-3 mx-5 TabletPortrait:col-span-1 TabletPortrait:mt-8 TabletPortrait:w-[90vw]">
                        <h5 className="text-lg font-bold">{page?.data?.subtitulo_newsletter}</h5>
                        <label>{page?.data?.descricao_newsletter}</label>
                        <CssTextField
                            className="my-4"
                            id="email"
                            type="email"
                            label="E-mail"
                            inputProps={{ style: { color: "#FFFFFF" } }}
                            InputLabelProps={{ style: { color: "#FFFFFF" } }}
                            value={email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setEmail(event.target.value); console.log(email)}}
                            fullWidth
                            required
                        />
                        <div className="flex items-center justify-between Mobile:flex-col">
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={()=>{setChecked(!checked)}} style={{ color: "white" }} defaultChecked />}
                                label={<span className="text-sm">Concordo em receber e-mails</span>}
                            />
                            <input className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 disabled:bg-slate-700 disabled:hover:scale-100 Mobile:text-sm" type="submit" value="INSCREVER-SE" disabled={!checked} />
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
                <div className="flex flex-row items-center place-content-end TabletPortrait:place-content-start TabletPortrait:h-[8vh]">
                    {page?.data?.redes_sociais.map((i: any, index: undefined) => {
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