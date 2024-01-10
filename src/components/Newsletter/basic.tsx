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

async function register(
  email: string,
  setSucesso: Dispatch<SetStateAction<boolean>>
) {
  const res = await fetch("/api/mailchimp", {
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  //const {id, emailrec, response} = await res.

  const { error } = await res.json();
  if (error) console.log(error);

  if (res.status === 200) {
    setSucesso(true);
  }
}

export default function Newsletter({
  type,
  titulo,
  subtitulo,
}: {
  type: boolean;
  titulo: string;
  subtitulo: string;
}) {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);
  const [sucesso, setSucesso] = useState(false);

  if (!type) {
    return (
      <div className="bg-white w-full h-fit pb-8">
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)",
          }}
          className="grid grid-cols-2 w-[90vw] rounded-lg ml-[3vw] px-[2vw] py-[7vh] TabletPortrait:grid-cols-1"
        >
          <div className="grid grid-cols-1">
            <label className="text-[3vw] TabletPortrait:text-2xl font-bold">
              {titulo}
            </label>
            <p className="text-[1.2vw] TabletPortrait:text-lg mt-8 TabletPortrait:w-[88vw]">
              {subtitulo}
            </p>
          </div>
          <form className="mx-5 TabletPortrait:col-span-1 TabletPortrait:mt-8 TabletPortrait:w-fit">
            <CssTextField
              className="my-4 TabletPortrait:w-[75vw]"
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
            <div className="flex items-center justify-between Mobile:flex-col">
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
                  <span className="text-sm">Concordo em receber e-mails</span>
                }
              />
              <input
                className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 disabled:bg-slate-700 disabled:hover:scale-100 Mobile:text-sm TabletPortrait:m-0"
                type="button"
                onClick={() => {
                  register(email, setSucesso);
                }}
                value="INSCREVER-SE"
                disabled={!checked}
              />
            </div>
          </form>
        </div>
        {sucesso ? (
          <Snackbar
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
        )}
      </div>
    );
  } else {
    return (
      <div className="h-fit pb-8 TabletPortrait:static TabletPortrait:bg-white TabletPortrait:w-full">
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)",
          }}
          className="grid grid-cols-1 w-[90%] rounded-lg ml-[3vw] px-[2vw] py-[3vh]"
        >
          <div className="grid grid-cols-1">
            <label className="text-2xl font-bold">{titulo}</label>
            <p className="text-sm mt-1 w-[88%]">{subtitulo}</p>
          </div>
          <form className="mx-0 col-span-1 mt-2 w-full">
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
                  <span className="text-sm">Concordo em receber e-mails</span>
                }
              />
              <input
                className="bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 disabled:bg-slate-700 disabled:hover:scale-100 Mobile:text-sm :m-0"
                type="button"
                onClick={() => {
                  register(email, setSucesso);
                }}
                value="INSCREVER-SE"
                disabled={!checked}
              />
            </div>
          </form>
        </div>
        {sucesso ? (
          <Snackbar
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
        )}
      </div>
    );
  }

  return <></>;
}
