"use client";
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";

export default function Cases({ slice }: CasesSliceProps) {
  const middleElementIndex = Math.floor(slice.items.length / 2);
  const [selected, setSelected] = useState(middleElementIndex);
  const indexTotal = slice.items.length - 1;

  const MakeTranslation = (value: number) => {
    var e = document.getElementById("cardHolder");
    if (e != null) e.style.transform = `translate(${value}%, 0)`;
  };

  const CalcTranslation = (value: number) =>
    (middleElementIndex - value) * Math.ceil(100 / slice.items.length);

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
    <div className="w-full h-fit py-24 flex-col justify-center items-center gap-8 flex bg-white overflow-hidden">
      <div className="flex-col justify-center items-center flex">
        <div className="text-green text-sm font-semibold uppercase tracking-[8.26px]">
          {slice?.primary.subtitle}
        </div>
        <div className="text-blue text-4xl font-bold mb-8">
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
              } justify-center items-center gap-8 flex w-[40vw] Mobile:w-[87vw] TabletPortrait:w-[87vw] TabletLandscape:w-[60vw] mx-10 transition-all duration-700`}
              id={`card-${i}`}
            >
              <div className="w-full h-full overflow-hidden rounded-2xl ">
                <div className="grid w-auto h-full">
                  <PrismicNextImage
                    field={e.image}
                    className="w-full h-full aspect-video Mobile:aspect-square object-fill row-start-1 row-end-2 col-start-1 col-end-2"
                  />
                  <div
                    className="row-start-1 row-end-2 col-start-1 col-end-2 relative h-109"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.46) 100%);",
                    }}
                  >
                    <div className="m-4 flex justify-between">
                      <div>
                        <PrismicNextImage
                          field={e.lefticon}
                          className="inline "
                        />
                        <label className="Mobile:text-xs ml-1">
                          {e.lefticontext}
                        </label>
                      </div>
                      <div>
                        <PrismicNextImage
                          field={e.rigthicon}
                          className="inline"
                        />
                        <label className=" Mobile:text-xs ml-1">
                          {e.rigthicontext}
                        </label>
                      </div>
                    </div>
                    <div
                      className="w-full absolute bottom-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%);",
                      }}
                    >
                      <div className=" text-center">
                        <label className="text-xl Mobile:text-base font-bold uppercase tracking-widest ">
                          {e.title}
                        </label>
                        <p className="pt-3 text-base Mobile:p-2 Mobile:text-xs">
                          {e.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <button
          className="bg-green rounded-full w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4 flex items-center justify-center focus:outline-none"
          onClick={toLeft}
        >
          <span className="text-xl sm:text-2xl">&#10094;</span>
        </button>
        <button
          className="bg-green rounded-full w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4 flex items-center justify-center focus:outline-none"
          onClick={toRight}
        >
          <span className="text-xl sm:text-2xl">&#10095;</span>
        </button>
      </div>
    </div>
  );
}
