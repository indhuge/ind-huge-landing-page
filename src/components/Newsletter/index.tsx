'use client'

import { NewsletterProps } from "@/slices/NewsletterSlice";
import { Alert, AlertTitle, Checkbox, FormControlLabel, Snackbar, TextField, styled } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import rmAutoStyle from "../contato/removeAutocomplete.module.css"

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

export default function Newsletter(slice: NewsletterProps) {

    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(true);
    const [sucesso, setSucesso] = useState(false);
    const [registrado, setRegistrado] = useState(false);
    const [falha, setFalha] = useState(false);

    return (
        <div className={`bg-white w-full h-fit pb-8 ${rmAutoStyle.wrapper}`}>
            <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className="grid grid-cols-2 w-[90vw] rounded-lg ml-[3vw] px-[2vw] py-[7vh] TabletPortrait:grid-cols-1">
                <div className="grid grid-cols-1">
                    <label className="text-[3vw] TabletPortrait:text-2xl font-bold">{slice?.slice?.primary?.titulo}</label>
                    <p className="text-[1.2vw] TabletPortrait:text-lg mt-8 TabletPortrait:w-[88vw]">{slice?.slice?.primary?.subtitulo}</p>
                </div>
                <form className="mx-[10%] TabletPortrait:col-span-1 TabletPortrait:mt-8 w-[80%]">
                    <CssTextField
                        //className="my-4 TabletPortrait:w-[75vw]"
                        style={{margin: "1rem 0", width: "100%"}}
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
                            label={<span className="text-sm">{slice?.slice?.primary?.label_checkbox}</span>}
                        />
                        <input className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 disabled:bg-slate-700 disabled:hover:scale-100 Mobile:text-sm TabletPortrait:m-0" type="button" onClick={() => { register(email, setEmail, setSucesso, setFalha, setRegistrado) }} value={slice?.slice?.primary?.label_botao as string} disabled={!checked} />
                    </div>
                </form>

            </div>
            {sucesso ?
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
