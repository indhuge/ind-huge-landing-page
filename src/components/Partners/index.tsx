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
            <PrismicNextImage alt=""
              key={i}
              className="lg:w-[15%] s_mobile:w-[30%] h-auto aspect-[1/1] object-contain Mobile:w-[100vw]"
              field={e.logo}
            />
          );
        })}
      </div>
    </div>
  );
}
