"use client"
import { Autocomplete, TextField, styled } from "@mui/material";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { FaqDocument, FaqDocumentData, Simplify } from "../../../prismicio-types";





export default function FaqPesquisa(/*dados: FaqDocument<string>*/) {
    //console.log(dados);
    const iconePesquisa = require("../../../public/assets/Icone-pesquisa.svg");
    const [pesquisa, setPesquisa] = useState("");
    const options = ["teste", "teste2"]//dados?.item?.pergunta;

    return (
        <div style={{ backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)" }} className="flex w-[100vw] h-[50vh] items-center justify-center">
            <label className="text-4xl font-bold mt-52"></label>
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
            {/*<Autocomplete
          value={pesquisa}
          onChange={(event: any, newValue: string | null) => {
            setPesquisa(newValue as SetStateAction<string>);
          }}
          //inputValue={inputValue}
          /*onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
          options={options}
          id="controllable-states-demo"
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Controllable" />}
        />*/
            }
        </div>
    )
}