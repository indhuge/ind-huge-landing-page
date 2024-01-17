import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogImageSlice`.
 */
export type BlogImageSliceProps =
  SliceComponentProps<Content.BlogImageSliceSlice>;

/**
 * Component for "BlogImageSlice" Slices.
 */
const BlogImageSlice = ({ slice }: BlogImageSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-5"
    >
      <div className="flex flex-col">
        <PrismicNextImage
          className="object-cover rounded-lg w-3/2"
          width={924}
          height={320}
          field={slice.primary.image}
        />
        <p className="text-darkgray">{slice.primary.legenda}</p>
      </div>
    </section>
  );
};

export default BlogImageSlice;
