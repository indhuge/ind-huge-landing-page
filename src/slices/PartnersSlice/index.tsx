import Partners from "@/components/Partners";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PartnersSlice`.
 */
export type PartnersSliceProps =
  SliceComponentProps<Content.PartnersSliceSlice>;

/**
 * Component for "PartnersSlice" Slices.
 */
const PartnersSlice = ({ slice }: PartnersSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Partners slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default PartnersSlice;
