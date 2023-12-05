"use client";
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";

export default function Cases({ slice }: CasesSliceProps) {
  const [selected, setSelected] = useState(1);
  const middleElementIndex = Math.floor(slice.items.length / 2);
  const indexTotal = slice.items.length - 1;

  const MakeTranslation = (value: number) => {
    var e = document.getElementById("cardHolder");
    if (e != null) e.style.transform = `translate(${value}%, 0)`;
  };

  const CalcTranslation = (value: number) =>
    (middleElementIndex - value) * 33.33;

  const toRight = () => {
    const value = selected == indexTotal ? 0 : selected + 1;
    setSelected(value);
    MakeTranslation(CalcTranslation(value));
  };

  const toLeft = () => {
    const value = selected == 0 ? 2 : selected - 1;
    setSelected(value);
    MakeTranslation(CalcTranslation(value));
  };

  return (
    <div className="w-full h-fit py-[100px] TabletPortrait:p-[0px] flex-col justify-center items-center gap-8 flex bg-white overflow-hidden">
      <button className="bg-blue" onClick={toLeft}>
        click -
      </button>
      <button className="bg-blue" onClick={toRight}>
        click +
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
        className={`flex-row flex gap-8 transition-all duration-700 transform-gpu ease-circular-0-0-0-1`}
        id="cardHolder"
      >
        {slice.items.map((e, i) => {
          return (
            <div
              className={`${
                selected == i ? "scale-110" : "blur-sm"
              } justify-center items-center gap-8 flex w-[40vw] mx-10 transition-all duration-700`}
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
