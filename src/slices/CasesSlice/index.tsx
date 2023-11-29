import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      
    </section>
  );
};

export default CasesSlice;
