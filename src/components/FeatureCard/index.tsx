import { FeaturesSliceProps } from "@/slices/FeaturesSlice";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Style from "./style.module.css";

export default function FeatureCard({ slice }: FeaturesSliceProps) {
  return (
    <div id="funcionalidades" className="p-6 flex flex-col bg-white lg:px-28 lg:py-24 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between my-8 gap-4">
        <h2 className="text-darkblue text-4xl font-bold flex flex-col md:flex-row">
          {slice.primary.main_title?.split(" ")[0]}
          <span className="text-green md:mx-2">
            {slice.primary.main_title?.split(" ")[1]}
          </span>
        </h2>
        <p className="text-darkblue text-justify font-light lg:w-[30rem]">
          {slice.primary.right_text}
        </p>
      </div>
      <div className="flex gap-4 self-stretch flex-wrap">
        {slice.items.map((e, i) => (
          <PrismicNextLink key={i} field={e.link_to_page} className="flex-[1_1_25%]">
            <div
              className={`${Style.pai} flex flex-col p-6 gap-6
              bg-white border border-green rounded-lg transition-all duration-300 min-w-full s_mobile:min-w-[25rem]
              hover:text-darkblue hover:bg-green hover:drop-shadow-base text-gray`}
            >
              <div
                className={`${Style.filho} flex border-[1.5px] border-solid border-inherit p-4 w-fit rounded-full transition-all duration-300`}
              >
                <PrismicNextImage
                  alt=""
                  className="w-12 h-12 transition-all"
                  field={e.icon}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-darkblue text-base font-semibold">
                  {e.card_title}
                </h3>
                <p className="text-justify text-base leading-tight font-light">
                  {e.content}
                </p>
              </div>
            </div>
          </PrismicNextLink>
        ))}
      </div>
    </div>
  );
}
