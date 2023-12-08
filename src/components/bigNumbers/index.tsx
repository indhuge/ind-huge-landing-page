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
import { useState } from "react";
import Button from "@mui/material/Button";

export default function BigNumbers({ slice }: BigNumbersSliceProps) {
  return (
    <div className=" text-white text-center py-10">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-5xl py-4">{slice.primary.bignumberstitle}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-8">
          {slice.items.map((e, i) => {
            return (
              <>
                <div
                  className="flex flex-col items-center mb-4 md:mb-0"
                  key={i}
                >
                  <p className="text-5xl font-bold text-green">
                    {e.bignumberslicetriggernumber}
                  </p>
                  <h3 className="ext-white text-center leading-trim text-cap font-inter text-xs font-normal uppercase">
                    {e.bignumberslicetriggertitle}
                  </h3>
                </div>
                <div className="bg-white w-[0.2rem] h-16 bg-gradient-to-r from-teal-600 to-transparent"></div>
              </>
            );
          })}
        </div>
        <PrismicNextLink
          className="block w-full max-w-xs mx-auto bg-green text-darkblue rounded-full py-3 text-center text-xl font-semibold hover:bg-red-600 transition duration-300 ease-in-out"
          field={slice.primary.bignumbersslicebuttonlink}
        >
          {slice.primary.bignumbersslicebuttontext}
        </PrismicNextLink>
        <div className="mt-8">
          <PrismicNextImage field={slice.primary.bignumbersimage} />
        </div>
      </div>
    </div>
  );
}
