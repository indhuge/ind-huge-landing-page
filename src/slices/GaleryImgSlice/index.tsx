import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  paragraph: ({children}) => (
   <p className="text-base font-medium font-body text-black sm:text-left text-center">
     {children}
   </p>
 )
};

/**
 * Props for `GaleryImgSlice`.
 */
export type GaleryImgSliceProps =
  SliceComponentProps<Content.GaleryImgSliceSlice>;

/**
 * Component for "GaleryImgSlice" Slices.
 */
const GaleryImgSlice = ({ slice }: GaleryImgSliceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid Tablet:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-x-20 gap-y-14 mx-auto sm:place-items-start place-items-center">
        {slice.primary.cards.map((item) => (
          <div 
          className="max-w-xs grid sm:place-items-start place-items-center min-w-[18rem] min-h-[16rem] border"
          >
            <div className="w-full h-[16rem] overflow-hidden">
            <PrismicNextImage field={item.image} className="object-fill w-full h-full" />
            </div>
            <div className="line-clamp-3 border min-w-full min-h-[4.5rem] bg-slate-500">
            <PrismicRichText components={components} field={item.description} />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default GaleryImgSlice;
