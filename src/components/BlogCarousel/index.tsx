"use client";
import { CasesSliceProps } from "@/slices/CasesSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useState } from "react";

export default function Cases({ slice }: any) {
  const middleElementIndex = Math.floor(slice.items.length / 2);
  const [selected, setSelected] = useState(middleElementIndex);
  const indexTotal = slice.items.length - 1;
  const [interval, _setInterval] = useState<NodeJS.Timeout | null>();
  
  const MakeTranslation = (value: number) => {
    var e = document.getElementById("cardHolder");
    if (e != null) e.style.transform = `translate(${value}%, 0)`;
  };

  const CalcTranslation = (value: number) =>
    (middleElementIndex - value) * Math.ceil(100 / slice.items.length);

  const toRight = (isAuto: Boolean = false) => {
    const value = selected == indexTotal ? 0 : selected + 1;
    setSelected(value);
    MakeTranslation(CalcTranslation(value));
    if (!isAuto) {
      clearTimeout(interval!!);
    }
  };

  const toLeft = () => {
    const value = selected == 0 ? 2 : selected - 1;
    setSelected(value);
    MakeTranslation(CalcTranslation(value));
  };

  useEffect(() => {
    const tmp = setTimeout(
      () => {
        toRight(true);
      },
      (slice.primary.auto_scroll_interval ?? 10) * 1000
    );
    _setInterval(tmp);
  }, [selected]);
  
  return (
    <div className="w-full h-fit py-24 Mobile:pt-4 Mobile:pb-0 flex-col justify-center items-center gap-8 flex Mobile:gap-0 bg-white overflow-hidden relative">
      <div
        className={`w-fit flex-row flex gap-8 Mobile:gap-0 Mobile:pb-8 transition-all duration-700 transform-gpu`}
        id="cardHolder"
      >
        {slice.items.map((e:any, i:number) => {
          return (
            <div 
              key={i}
              className={`${
                selected == i ? "scale-110" : "blur-sm"
              } justify-center items-center gap-8 Mobile:gap-0 flex w-[80vw] Mobile:w-[100vw] Laptop:w-[85vw] mx-10 Mobile:mx-0 transition-all duration-700`}
              id={`card-${i}`}
            >
              <div className="w-full h-full overflow-hidden rounded-2xl Mobile:rounded-none">
                <div className="grid w-auto h-full">
                  <PrismicNextImage
                    alt=""
                    field={e.image}
                    className="w-full h-full Mobile:aspect-square object-fill row-start-1 row-end-2 col-start-1 col-end-2"
                  />
                  <div
                    className="row-start-1 row-end-2 col-start-1 col-end-2 relative h-109 flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.46) 100%);",
                    }}
                  >
                      <div className="w-[50%] Mobile:w-[80%] text-center">
                        <label className="text-3xl Mobile:text-2xl font-bold ">
                          {e.title}
                        </label>
                        <p className="pt-3 text-base Mobile:text-sm pb-6">
                          {e.text}
                        </p>                      
                        <button className="border-1 px-3 py-1.5 rounded-2xl hover:bg-slate-600 transition-all">
                          <PrismicNextLink field={e.lermaisbutton}>
                            <p className="uppercase text-base Mobile:text-sm">
                              {e.buttontext}
                            </p>
                          </PrismicNextLink>
                        </button>      
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
          onClick={() => toRight()}
        >
          <span className="text-xl sm:text-2xl">&#10095;</span>
        </button>
      </div>
    </div>
  );
}
