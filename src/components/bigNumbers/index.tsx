"use client";
import { BigNumbersSliceProps } from "@/slices/BigNumbersSlice";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import BigNumbersItens from "../BigNumbersItem/index";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function BigNumbers({ slice }: BigNumbersSliceProps) {
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
          <h2 className="text-5xl py-4 font-bold">
            {slice.primary.bignumberstitle}
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-8">
            {slice.items.map((e, i) => {
              return (
                <BigNumbersItens
                  key={i}
                  number={e.bignumberslicetriggernumber ?? 0}
                  title={e.bignumberslicetriggertitle ?? ""}
                />
              );
            })}
          </div>
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
