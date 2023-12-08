/**
 * Renders the BigNumbers component.
 *
 * @param {BigNumbersSliceProps} props - The component props.
 * @returns {JSX.Element} The rendered BigNumbers component.
 */

"use client";
import { BigNumbersSliceProps } from "@/slices/BigNumbersSlice";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export default function BigNumbers({ slice }: BigNumbersSliceProps) {
  return (
    <div className="bg-gradient-to-br from-[#026C73] to-[#0C6F76] via-[#014E6C]">
      {/* This div will position the image */}
      {/* Rest of the content */}
      <div className="py-24 w-full text-center text-white border flex justify-center items-center">
        <div className="absolute left-1">
          <PrismicNextImage field={slice.primary.bignumbersimage} />
        </div>
        {/* Adjust the left margin based on your design */}
        <div className="z-10">
          <h2 className="text-5xl py-4">{slice.primary.bignumberstitle}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-8">
            {slice.items.map((e, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className="flex flex-col items-center mb-4 md:mb-0"
                    key={i}
                  >
                    <p className="text-5xl font-bold text-green">
                      {e.bignumberslicetriggernumber}
                    </p>
                    <h3 className="text-white text-center leading-trim text-cap font-inter text-xs font-normal uppercase">
                      {e.bignumberslicetriggertitle}
                    </h3>
                  </div>
                  <div className="bg-[#177686] w-[0.1rem] h-16 bg-gradient-to-r from-teal-600 to-transparent"></div>
                </React.Fragment>
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
