import { PartnersSliceProps } from "@/slices/PartnersSlice";
import { PrismicNextImage } from "@prismicio/next";

export default function Partners({ slice }: PartnersSliceProps) {
  return (
    <div className="px-28 py-10 bg-white">
      <h2 className="text-4xl text-black font-bold TabletPortrait:text-center">
        {slice.primary.title}
      </h2>
      <div className="py-5 flex justify-between TabletPortrait:flex-col TabletPortrait:items-center">
        {slice.items.map((e, i) => {
          return (
            <PrismicNextImage
              key={i}
              className="w-[15%] h-auto aspect-[1/1] object-contain TabletPortrait:w-[30%]"
              field={e.logo}
            />
          );
        })}
      </div>
    </div>
  );
}
