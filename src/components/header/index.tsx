"use client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HeaderDocument } from "../../../prismicio-types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Params = { uid: string };
type Anchor = "right";

export default function Page(page: any) {
  page = page?.page as HeaderDocument<string>;
  const detalhe = require("../../../public/assets/detalheHeader.png");
  const botaoMenu = require("../../../public/assets/BotãoMenuMobile.svg");
  const iconeFechar = require("../../../public/assets/icone-fechar.svg");
  const searchParams = useSearchParams();
  const [scrollpos, setScrollpos] = useState(searchParams.get("spos"));
  const router = useRouter();
  const pathname = usePathname();

  const [lingua, setLingua] = useState("");
  const [linguaLink, setLinguaLink] = useState("");

  useEffect(() => {
    if (window.location.href.includes("/pt-br")) {
      setLingua("pt-br");
      setLinguaLink("");
    } else if (window.location.href.includes("/en-us")) {
      setLingua("en-us");
      setLinguaLink("en-us");
    } else if (window.location.href.includes("/es-es")) {
      setLingua("es-es");
      setLinguaLink("es-es");
    } else {
      setLingua("pt-br");
      setLinguaLink("");
    }

    const pos = searchParams.get("spos");
    if (pos != undefined) {
      const e = document.getElementById(pos);
      e?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  const linguas = [
    {
      id: "pt-br",
      label: "PT-BR",
      flag: require("../../../public/assets/BrasilFlag.svg"),
    },
    {
      id: "en-us",
      label: "EN-US",
      flag: require("../../../public/assets/UsaFlag.svg"),
    },
    {
      id: "es-es",
      label: "ES-ES",
      flag: require("../../../public/assets/SpainFlag.svg"),
    },
  ];

  const mudaLingua = (event: SelectChangeEvent) => {
    
      document.location.href = `/${event.target.value}`;
    
    setLingua(event.target.value as string);
  };

  const scrollToElement = (id: string) => {
    const e = document.getElementById(id);
    e?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollpos !== null) {
      var elemento = document.getElementById(scrollpos);
      elemento?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollpos]);

  // console.log(page)

  const [state, setState] = React.useState({ right: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <PrismicNextImage
        alt=""
        className="hover:scale-105 float-left my-[12px] ml-[12px] h-[40px] w-[40px]"
        field={page?.data?.logo_menu_aberto}
      />
      <Button
        className="hover:scale-105 float-right h-[64px]"
        onClick={toggleDrawer(anchor, false)}
      >
        <Image src={iconeFechar} alt="Menu" />
      </Button>
      <List>
        {page?.data?.links.map((i: any, index: undefined) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={`../${linguaLink}/${i?.link}`}>
              <ListItemText primary={i?.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {/*<ListItem>
          <input
            type="button"
            value={page?.data?.label_entrar}
            className="hover:scale-105 border-green border-2 px-6 py-2 rounded-full text-green font-bold w-[90%] ml-[5%] mt-4"
          />
        </ListItem>*/}
        <ListItem>
          <input
            type="button"
            value={page?.data?.label_cta}
            onClick={() => {
              if (pathname == "/") {
                scrollToElement("contactForm");
                window.location.hash = "contactForm";
              } else router.push(`/${linguaLink}/?spos=contactForm`);
            }}
            className="hover:scale-105 bg-green px-6 py-2 rounded-full font-bold text-darkblue w-[90%] ml-[5%]"
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      id="header"
      className={`
                fixed top-0 left-0 right-0
                w-[100vw] h-[60px]
                flex 
                z-20
                space-x-8 pl-32 py-1 TabletPortrait:pl-2
                items-center justify-end 
            `}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)",
      }}
    >
      <div className="flex-auto">
        <Link href={"https://www.indhuge.com"}>
          <PrismicNextImage
            alt=""
            className="TabletPortrait:hidden"
            field={page?.data?.logo}
          />
        </Link>
        <Link href={"https://www.indhuge.com"}>
          <PrismicNextImage
            alt=""
            className="TabletLandscape:hidden w-[40px]"
            field={page?.data?.logo_mobile}
          />
        </Link>
      </div>
      <div className="flex-none flex space-x-4 justify-center TabletPortrait:hidden">
        {page?.data?.links.map((i: any, index: undefined) => {
          let link = i?.link as string;
          return (
            <Link
              key={index}
              href={`/${linguaLink}/${link}`}
              className="text-white"
            >
              {i?.label}
            </Link>
          );
        })}
      </div>
      <Box sx={{ flex: [1, 1, "auto"] }}>
        <FormControl
          sx={{ m: 1, minWidth: 70 }}
          size="small"
          variant="standard"
        >
          <Select
            className="w-fit"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lingua}
            label="Lingua"
            onChange={mudaLingua}
            sx={{
              color: "white",
              fontSize: "0.8rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          >
            {linguas?.map((i, index) => {
              return (
                <MenuItem key={index} value={i?.id}>
                  <Image
                    className="w-[40px] h-[25px] object-cover mr-1 drop-shadow-sm inline items-center"
                    src={i?.flag}
                    alt="Flag"
                  />
                  <label className="TabletPortrait:hidden">{i?.label}</label>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <div className="flex flex-none space-x-4">
        <button
          onClick={() => {
            if (pathname == "/") {
              scrollToElement("contactForm");
              window.location.hash = "contactForm";
            } else router.push(`/${linguaLink}/?spos=contactForm`);
          }}
          className="flex-initial bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 TabletPortrait:hidden"
        >
          {page?.data?.label_cta}
        </button>

        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className="hover:scale-105 TabletLandscape:scale-0"
              onClick={toggleDrawer(anchor, true)}
            >
              <Image src={botaoMenu} alt="Menu" />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      <Image
        className="flex-initial TabletPortrait:hidden"
        src={detalhe}
        alt="Detalhe Header"
      />
    </div>
  );
}
