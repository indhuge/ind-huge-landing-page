import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BigNumbers from "@/components/bigNumbers";

/**
 * Props for `BigNumbersSlice`.
 */
export type BigNumbersSliceProps =
  SliceComponentProps<Content.BigNumbersSliceSlice>;

/**
 * Component for "BigNumbersSlice" Slices.
 */
const BigNumbersSlice = ({ slice }: BigNumbersSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BigNumbers slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default BigNumbersSlice;
