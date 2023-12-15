import { Content } from "@prismicio/client";
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
    >
      Placeholder component for blog_image_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogImageSlice;
