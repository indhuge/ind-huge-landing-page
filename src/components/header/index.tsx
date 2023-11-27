'use client'
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HeaderDocument } from "../../../prismicio-types";

type Params = { uid: string };
type Anchor = 'right';

export default function Page(page:any) {
    page = (page?.page) as HeaderDocument<string>;
    const detalhe = require("../../../public/assets/detalheHeader.png");
    const botaoMenu = require("../../../public/assets/BotãoMenuMobile.svg");
    const iconeFechar = require("../../../public/assets/icone-fechar.svg");

    console.log(page)

    const [state, setState] = React.useState({ right: false });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
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
            <PrismicNextImage className="hover:scale-105 TabletLandscape:hidden float-left my-[12px] ml-[12px] h-[40px] w-[40px]" field={page?.data?.logo_menu_aberto}/>
            <Button className="hover:scale-105 TabletLandscape:hidden float-right h-[64px]" onClick={toggleDrawer(anchor, false)}><Image src={iconeFechar} alt="Menu" /></Button>
            <List>
                {page?.data?.links.map((i:any, index:undefined) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton href={i?.link as string}>
                            <ListItemText primary={i?.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem><Button variant="outlined" className="hover:scale-105 border-green border-2 px-6 py-2 rounded-full text-green font-bold w-[90%] ml-[5%] mt-4">{page?.data?.label_entrar}</Button></ListItem>
                <ListItem><Button className="hover:scale-105 bg-green px-6 py-2 rounded-full font-bold text-darkblue w-[90%] ml-[5%]">{page?.data?.label_cta}</Button></ListItem>
            </List>
        </Box>
    );

    return (
        <div
            className={`
                fixed top-0 left-0 right-0
                w-[100vw] h-[60px]
                flex 
                z-10
                space-x-8 pl-32 py-1 TabletPortrait:pl-8
                items-center justify-end 
            `}
            style={{backgroundImage: "linear-gradient(90deg, #01666C 0%, #014E6C 31.25%, #01506B 53.65%, #01916B 100%)"}} 
        >
            <div className="flex-auto">
                <PrismicNextImage className="TabletPortrait:hidden" field={page?.data?.logo} />
                <PrismicNextImage className="TabletLandscape:hidden" field={page?.data?.logo_mobile} />
            </div>
            <div className="flex-none flex space-x-4 justify-center TabletPortrait:hidden">
                {page?.data?.links.map((i:any, index:undefined) => {
                    let link = i?.link as string
                    return (
                        <Link key={index} href={link} className="text-white">{i?.label}</Link>
                    );
                })}
            </div>
            <div className="flex flex-none space-x-4">
                <button className="flex-initial bg-green px-6 py-2 rounded-full text-darkblue font-bold hover:scale-105 TabletPortrait:hidden">{page?.data?.label_cta}</button>
                {(['right'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button className="hover:scale-105 TabletLandscape:hidden" onClick={toggleDrawer(anchor, true)}><Image src={botaoMenu} alt="Menu" /></Button>
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
            <Image className="flex-initial TabletPortrait:hidden" src={detalhe} alt="Detalhe Header" />
        </div>
    );
}