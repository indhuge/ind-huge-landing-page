"use client";

import React, { useEffect, useState } from "react";
import { BigNumbersSliceProps } from "@/slices/BigNumbersSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import BigNumbersItens from "../BigNumbersItem/";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { KeyTextField } from "@prismicio/client";
import BigNumbersCarousel from "../BigNumbersCarousel";

export default function BigNumbers({ slice }: BigNumbersSliceProps) {
  const [isCarousel, setIsCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCarousel(window.innerWidth < 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bigNumbersList = (
    <div
      id="BigNumberItensList"
      className="flex flex-col md:flex-row justify-center items-center gap-8 my-8"
    >
      {slice.items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="bg-[#177686] md:w-[0.1rem] md:h-16 bg-gradient-to-r from-teal-600 to-transparent w-0 h-0"></div>
          )}
          <BigNumbersItens
            number={item.bignumberslicetriggernumber ?? 0}
            title={item.bignumberslicetriggertitle ?? ""}
            isFraction={!!item.bignumberslicetriggernumberfraction}
          />
        </React.Fragment>
      ))}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function highlightTextWithColor(
    text: KeyTextField,
    highlights: KeyTextField,
    color: string
  ): React.ReactNode {
    if (!highlights) return text;

    const splitWords = highlights.split(" ");
    let highlightedText = text;

    splitWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      highlightedText = highlightedText!!.replace(
        regex,
        `<span style="color: ${color}">${word}</span>`
      );
    });

    return <div dangerouslySetInnerHTML={{ __html: highlightedText!! }} />;
  }

  const highlightedText = highlightTextWithColor(
    slice.primary.bignumberstitle,
    slice.primary.bignumberstitlehighlights,
    "#26D07C"
  );

  return (
    <div className="bg-gradient-to-br from-[#026C73] to-[#0C6F76] via-[#014E6C]">
      <div className="py-24 w-full text-center text-white flex justify-center items-center">
        <ParallaxProvider>
          <div className="absolute left-0 float">
            <Parallax translateY={[-80, 80]}>
              <PrismicNextImage
                alt=""
                test-id="BigNumbersImageParallax"
                field={slice.primary.bignumbersimage}
              />
            </Parallax>
          </div>
        </ParallaxProvider>
        <div className="z-10">
          <h2 id="BigNumbersSliceTitle" className="text-5xl py-4 font-bold">
            {highlightedText}
          </h2>
          {isCarousel ? (
            <BigNumbersCarousel bigNumberProps={slice.items} />
          ) : (
            <div>{bigNumbersList}</div>
          )}
          <PrismicNextLink
            className="block w-full max-w-xs mx-auto bg-green text-darkblue rounded-full py-3 text-center text-sm font-semibold hover:scale-105 transition duration-300 ease-in-out font-inter uppercase"
            field={slice.primary.bignumbersslicebuttonlink}
          >
            {slice.primary.bignumbersslicebuttontext}
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
}
