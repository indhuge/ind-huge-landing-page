import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Cases from "@/components/cases";
import BlogCarousel from "@/components/BlogCarousel";

/**
 * Props for `CasesSlice`.
 */

export type CasesSliceProps = SliceComponentProps<Content.CasesSliceSlice>;

/**
 * Component for "CasesSlice" Slices.
 */

const CasesSlice = ({ slice }: CasesSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
      <Cases slice={slice} index={0} slices={[]} context={undefined} />
      )}
      {slice.variation === "blogCarousel" && (
      <BlogCarousel slice={slice} index={0} slices={[]} context={undefined} />
      )}
    </section>
  );
};

export default CasesSlice;
