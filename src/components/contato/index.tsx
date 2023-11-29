'use client'
import { createClient } from "@/prismicio";
import borda from "../../../public/assets/bordaVideo.svg";
import { ContatoDocument } from "../../../prismicio-types";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, styled } from "@mui/material";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

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
    const d = new Date();

    var form = {
        "submittedAt": d.getTime(), // This millisecond timestamp is optional. Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
        "fields": [
            {
                "objectTypeId": "0-1",
                "name": "firstname",
                "value": dados?.nome
            },
            {
                "objectTypeId": "0-1",
                "name": "phone",
                "value": dados?.telefone
            },
            {
                "objectTypeId": "0-1",
                "name": "email",
                "value": dados?.email
            },
            {
                "objectTypeId": "0-1",
                "name": "message",
                "value": dados?.mensagem
            },
            {
                "objectTypeId": "0-1",
                "name": "newsletter",
                "value": dados?.newsletter
            },

        ],
        "context": {
            "hutk": dados?.cookie, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
            "pageUri": "www.indhuge.com",
            "pageName": "Landing Page"
        },
        "legalConsentOptions": {
            "consent": { // Include this object when GDPR options are enabled
                "consentToProcess": true,
                "text": "I agree to allow indhuge to store and process my personal data.",
                "communications": [
                    {
                        "value": true,
                        "subscriptionTypeId": 999,
                        "text": "I agree to receive marketing communications from Example Company."
                    }
                ]
            }
        }
    }

    var jsondados = await JSON.stringify(form)
    console.log(jsondados);
    fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTALID}/${process.env.HUBSPOT_FORMGUID}`, {
        headers: { 'Content-Type': 'application/json' },
        body: jsondados,
        method: 'POST'
    }).then((res) => { console.log(res) }).catch()
}

export default function Page(page: any) {
    page = (page?.page) as ContatoDocument<string>

    const [cookies] = useCookies(["hubspotutk"]);

    const [formDados, setFormDados] = useState({
        "nome": "",
        "telefone": "",
        "email": "",
        "mensagem": "",
        "newsletter": true,
        "cookie": cookies.hubspotutk
    });

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
                <div className={`flex flex-col items-start justify-center col-span-5 bg-[length:100%_100%] bg-no-repeat my-52 h-[250px] aspect-video TabletPortrait:bg-[length:0_0] TabletPortrait:w-full TabletPortrait:h-fit TabletPortrait:my-0`} style={{ backgroundImage: `url(${borda.src})` }}>
                    <p className=" flex-none text-[26px] font-bold mx-12 my-4 TabletPortrait:text-[7vw] TabletPortrait:mx-6">
                        {page?.data?.titulo.map((i: any, index: undefined) => {
                            return (
                                <span key={index} style={{ color: i?.cor }}>{i?.texto}</span>
                            )
                        })}
                    </p>
                    <p className="mx-12 mb-24 text-[10px] TabletPortrait:text-[4vw] TabletPortrait:mx-6">{page?.data?.descricao}</p>
                </div>
                <form className={`flex flex-col items-start justify-center col-span-5 bg-[length:100%_100%] bg-no-repeat p-6 w-[40vw] rounded TabletPortrait:w-[90vw] TabletPortrait:h-fit TabletPortrait:mb-[5vh]`} style={{ backgroundImage: "linear-gradient(118deg, #003973 0%, #016C6B 100%)" }}>
                    <CssTextField
                        className="my-4"
                        id="nome"
                        type="text"
                        label="Nome Completo"
                        placeholder="Digite seu nome..."
                        inputProps={{ style: { color: "#FFFFFF" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.nome}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFormDados({ ...formDados, nome: event.target.value }); console.log(formDados) }}
                        fullWidth
                        required
                    />
                    <CssTextField
                        className="my-4"
                        id="telefone"
                        type="text"
                        label="Telefone(apenas números)"
                        placeholder="46912345678"
                        inputProps={{ pattern: "[0-9]{10,11}", style: { color: "#FFFFFF" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.telefone}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFormDados({ ...formDados, telefone: event.target.value }); console.log(formDados) }}
                        fullWidth
                        required
                    />
                    <CssTextField
                        className="my-4"
                        id="email"
                        type="email"
                        label="E-mail"
                        placeholder="Digite seu melhor e-mail..."
                        inputProps={{ style: { color: "#FFFFFF" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFormDados({ ...formDados, email: event.target.value }); console.log(formDados) }}
                        fullWidth
                        required
                    />
                    <CssTextField
                        className="my-4"
                        id="mensagem"
                        type="text"
                        label="Mensagem"
                        placeholder="Escreva sua dúvida ou motivo de contato..."
                        inputProps={{ style: { color: "#FFFFFF", height: "100px" } }}
                        InputLabelProps={{ style: { color: "#FFFFFF" } }}
                        value={formDados.mensagem}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFormDados({ ...formDados, mensagem: event.target.value }); console.log(formDados) }}
                        fullWidth
                        multiline
                        required
                    />
                    <div className="flex items-center justify-between w-full TabletPortrait:flex-col">
                        <FormControlLabel
                            control={
                                <Checkbox checked={formDados.newsletter}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFormDados({ ...formDados, newsletter: event.target.checked }); console.log(formDados) }}
                                    style={{ color: "white" }} defaultChecked
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