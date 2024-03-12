import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { asText } from "@prismicio/client";
import Style from "./Paragraph.module.css";

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
  slice.primary.paragraph.forEach((e) => {
    //@ts-expect-error
    e.text = (e.text as string).replaceAll("\\line", "\n");
  });
  slice.primary.paragraph.forEach((e) => console.log(e));
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`${Style.wrapper} mb-5`}>
        <PrismicRichText field={slice.primary.paragraph} />
      </div>
    </section>
  );
};

export default BlogParagraphSlice;
