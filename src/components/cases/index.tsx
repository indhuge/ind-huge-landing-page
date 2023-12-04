"use client";
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";

export default function Cases({ slice }: CasesSliceProps) {
  const [selected, setSelected] = useState(1);
  const [transition, setTranslation] = useState(0);

  const getTranslateValue = () => {
    console.log((2 - selected) * 35);
    return (2 - selected) * 35;
  };

  const onClick = () => {
    setSelected(selected == 2 ? 0 : selected + 1);
    setTranslation(getTranslateValue());
  };

  return (
    <div className="w-full h-fit py-[100px] TabletPortrait:p-[0px] flex-col justify-center items-center gap-8 flex bg-white">
      <button className="bg-blue" onClick={onClick}>
        click me
      </button>
      <div className="flex-col justify-center items-center flex">
        <div className="text-green text-sm font-semibold uppercase tracking-[8.26px]">
          {slice?.primary.subtitle}
        </div>
        <div className="text-blue text-4xl font-bold mb-[32px] TabletPortrait:mb-[0px]">
          {slice?.primary.title}
        </div>
      </div>
      <div
        className={`flex-row flex gap-8 translate-x-[${transition}%] transition-all duration-300`}
      >
        {slice.items.map((e, i) => {
          return (
            <div
              className={`${
                selected == i ? "scale-110" : "blur-sm"
              } justify-center items-center gap-8 flex w-[40vw] mx-10 transition-all duration-300`}
              id={`card-${i}`}
            >
              <div className="w-full h-full overflow-hidden rounded-2xl ">
                <div className="grid w-auto h-full">
                  <PrismicNextImage
                    field={e.image}
                    className="w-full h-full aspect-video object-fill row-start-1 row-end-2 col-start-1 col-end-2"
                  />
                  <div
                    className="row-start-1 row-end-2 col-start-1 col-end-2 relative h-109"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.46) 100%);",
                    }}
                  >
                    <div className="m-4">
                      <PrismicNextImage
                        field={e.lefticon}
                        className="inline "
                      />
                      <label className=" ml-1">{e.lefticontext}</label>
                      <label className="float-right ml-1">
                        {e.rigthicontext}
                      </label>
                      <PrismicNextImage
                        field={e.rigthicon}
                        className="inline float-right"
                      />
                    </div>
                    <div
                      className="w-full absolute bottom-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%);",
                      }}
                    >
                      <div className="m-[5vh] text-center">
                        <label className="text-xl font-bold uppercase tracking-widest ">
                          {e.title}
                        </label>
                        <p className="pt-3">{e.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
