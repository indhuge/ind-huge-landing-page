import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturePage`.
 */
export type FeaturePageSliceProps = SliceComponentProps<Content.FeaturePageSlice>;

/**
 * Component for "FeaturePage" Slices.
 */
const FeaturePageSlice = ({ slice }: FeaturePageSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     
    <div className="bg-white min-h-screen pt-16">
        <div className="min-h-screen flex flex-col items-center p-5" style={{ color: '#002748' }}>
            <h2 className="text-4xl leading-15 tracking-tight font-normal font-inter my-10">
                <>{slice.primary.title}</>
            </h2>

            <PrismicNextImage field={slice.primary.image} className="w-full max-w-3xl max-h-96 mb-12"/>


            <div className="w-full max-w-6xl text-justify md:text-center">
              <PrismicRichText field={slice.primary.description} components={{
                  paragraph:  ({ children }) => (
                    <p className="font-inter font-normal text-base tracking-tighter"> {children}</p>
                  )
              }} />
            </div>

        </div>
    </div>
  
    </section>
  );
};

export default FeaturePageSlice;
