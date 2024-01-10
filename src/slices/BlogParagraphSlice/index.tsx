import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { asText } from "@prismicio/client";

/**
 * Props for `BlogParagraphSlice`.
 */
export type BlogParagraphSliceProps =
  SliceComponentProps<Content.BlogParagraphSliceSlice>;

/**
 * Component for "BlogParagraphSlice" Sli<PrismicRichText field={slice.primary.paragraph} />ces.
 */
const BlogParagraphSlice = ({
  slice,
}: BlogParagraphSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-darkgray text-base text-justify font-light">
        <PrismicRichText field={slice.primary.paragraph} />
      </div>
    </section>
  );
};

export default BlogParagraphSlice;
