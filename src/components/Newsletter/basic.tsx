"use client";

import { NewsletterProps } from "@/slices/NewsletterSlice";
import {
  Alert,
  AlertTitle,
  Checkbox,
  FormControlLabel,
  Snackbar,
  TextField,
  styled,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import rmAutoStyle from "../contato/removeAutocomplete.module.css"

type Params = { uid: string };

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FFFFFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF",
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFFFFF",
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

export default function Newsletter({
  titulo,
  subtitulo,
  label_checkbox,
  label_botao,
  className,
}: {
  titulo: string;
  subtitulo: string;
  label_checkbox: string;
  label_botao: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);
  const [sucesso, setSucesso] = useState(false);
  const [registrado, setRegistrado] = useState(false);
  const [falha, setFalha] = useState(false);

  return (
    <div
      className={
        `h-fit pb-8 TabletPortrait:static TabletPortrait:bg-white TabletPortrait:w-full` +
        className
      }
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)",
        }}
        className="grid grid-cols-1 w-[100%] rounded-lg px-[2vw] py-[3vh]"
      >
        <div className="grid grid-cols-1">
          <label className="text-2xl font-bold">{titulo}</label>
          <p className="text-sm mt-1 w-[88%]">{subtitulo}</p>
        </div>
        <form className={`mx-0 col-span-1 mt-2 w-full ${rmAutoStyle.wrapper}`}>
          <CssTextField
            className="my-4 w-[100%]"
            id="email"
            type="email"
            label="E-mail"
            inputProps={{ style: { color: "#FFFFFF" } }}
            InputLabelProps={{ style: { color: "#FFFFFF" } }}
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
              console.log(email);
            }}
            fullWidth
            required
          />
          <div className="flex items-center justify-between flex-col">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                  style={{ color: "white" }}
                />
              }
              label={
                <span className="text-sm">{label_checkbox}</span>
              }
            />
            <input
              className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 disabled:bg-slate-700 disabled:hover:scale-100 Mobile:text-sm :m-0"
              type="button"
              onClick={() => {
                register(email, setEmail, setSucesso, setFalha, setRegistrado);
              }}
              value={label_botao}
              disabled={!checked}
            />
          </div>
        </form>
      </div>
      {sucesso ? (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          style={{ top: "15vh" }}
          open={sucesso}
          autoHideDuration={6000}
          onClose={() => setSucesso(false)}
        >
          <Alert
            severity="success"
            onClose={() => setSucesso(false)}
            sx={{ width: "100%" }}
          >
            {" "}
            <AlertTitle>Obrigado por assinar nosso Newsletter!</AlertTitle>
            Verifique sua Caixa de Entrada
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )
      }
      {
        registrado ?
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            style={{ top: "15vh" }}
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
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            style={{ top: "15vh" }}
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