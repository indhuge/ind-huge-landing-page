import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogParagraphSlice`.
 */
export type BlogParagraphSliceProps =
  SliceComponentProps<Content.BlogParagraphSliceSlice>;

/**
 * Component for "BlogParagraphSlice" Slices.
 */
const BlogParagraphSlice = ({
  slice,
}: BlogParagraphSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_paragraph_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default BlogParagraphSlice;
