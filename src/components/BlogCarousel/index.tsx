"use client";
import { getHighlightedPosts } from "../HighlightedPosts/service";
import { BlogDocumentDataSlicesSlice, BlogPostDocument, CategoryDocument } from "../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useState } from "react";



export default function Cases({ slice }: any) {
  const middleElementIndex = 1;
  const [selected, setSelected] = useState(middleElementIndex);
  const indexTotal = 2;
  const [interval, _setInterval] = useState<NodeJS.Timeout | null>();
  const [posts, _setPosts] = useState<BlogPostDocument<string>[]>();
  const MakeTranslation = (value: number) => {
    var e = document.getElementById("cardHolder");
    if (e != null) e.style.transform = `translate(${value}%, 0)`;
  };

  const CalcTranslation = (value: number) =>
    (middleElementIndex - value) * Math.ceil(100 / 3);

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
      (10) * 1000
    );
    _setInterval(tmp);
    getHighlightedPosts().then((p)=>{
      _setPosts(p)
    })
    
  }, [selected]);
  
  return (
    <div className="w-full h-fit py-24 Mobile:pt-4 Mobile:pb-0 flex-col justify-center items-center gap-8 flex Mobile:gap-0 bg-white overflow-hidden relative">
      <div
        className={`w-fit flex-row flex gap-8 Mobile:gap-0 Mobile:pb-8 transition-all duration-700 transform-gpu`}
        id="cardHolder"
      >
        {posts?.map((e:BlogPostDocument<string>, i:number) => {
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
                    field={e.data.image}
                    className="w-full h-full Mobile:aspect-square object-fill row-start-1 row-end-2 col-start-1 col-end-2"
                  />
                  <div
                    className="row-start-1 row-end-2 col-start-1 col-end-2 relative h-109 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="w-[50%] Mobile:w-[80%] text-center">
                        <label className="text-3xl Mobile:text-2xl font-bold ">
                          {e.data.title}
                        </label>
                        <p className="pt-3 text-base Mobile:text-sm pb-6">
                          {e.data.description}
                        </p>                      
                        <button className="border-1 px-3 py-1.5 rounded-2xl hover:bg-slate-600 transition-all">
                          <PrismicNextLink field={e.data.category}>
                            <p className="uppercase text-base Mobile:text-sm">
                              {e.data.carouselbutton}
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
