import Newsletter from "@/components/Newsletter";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Newsletter`.
 */
export type NewsletterProps = SliceComponentProps<Content.NewsletterSlice>;

/**
 * Component for "Newsletter" Slices.
 */
const NewsletterSlice = ({ slice }: NewsletterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Newsletter slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default NewsletterSlice;
