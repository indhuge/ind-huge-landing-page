"use client";

import React, { useEffect, useState } from "react";
import { BigNumbersSliceProps } from "@/slices/BigNumbersSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import BigNumbersItens from "../BigNumbersItem/";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { KeyTextField } from "@prismicio/client";
import BigNumbersCarousel from "../BigNumbersCarousel";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BigNumbers({ slice }: BigNumbersSliceProps) {
  const [isCarousel, setIsCarousel] = useState(false);

  const [lingua, setLingua] = useState('');
    const [linguaLink, setLinguaLink] = useState('');

    const searchParams = useSearchParams();

    useEffect(() => {
        if (window.location.href.includes("/pt")) {
            document.location.href = "../"
        }
        else if (window.location.href.includes("/en")) {
            setLingua("en");
            setLinguaLink("en");
        }
        else if (window.location.href.includes("/es")) {
            setLingua("es");
            setLinguaLink("es");
        }
        else {
            setLingua("pt");
            setLinguaLink("");
        }

        const pos = searchParams.get("spos");
        if (pos != undefined) {
            const e = document.getElementById(pos);
            e?.scrollIntoView({ behavior: "smooth" });
        }
    }, [searchParams])

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

  const imageParallax = (
    <div id="ImageParallax">
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
    </div>
  );

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

  function hideImageParallax(hidden: boolean) {
    if (typeof document === "undefined" || hidden) return;
    const element = document.getElementById("ImageParallax");
    if (element) {
      element.style.display = "none";
    }
  }

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
        <>{imageParallax}</>
        <div className="z-10">
          <h2 id="BigNumbersSliceTitle" className="text-5xl py-4 font-bold">
            {highlightedText}
          </h2>
          {isCarousel ? (
            <>
              {hideImageParallax(slice.primary.bignumbersimagevisibility)}
              <BigNumbersCarousel bigNumberProps={slice.items} />
            </>
          ) : (
            <>
              <div>{bigNumbersList}</div>
            </>
          )}
          <>
            <Link
              className="block w-full max-w-xs mx-auto bg-green text-darkblue rounded-full py-3 text-center text-sm font-semibold hover:scale-105 transition duration-300 ease-in-out font-inter uppercase"
              href={""}
              onClick={()=>{window.location.href = `../${linguaLink}/?spos=contactForm`}}
            >
              {slice.primary.bignumbersslicebuttontext}
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}
