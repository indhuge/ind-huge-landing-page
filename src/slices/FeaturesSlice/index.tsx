import FeatureCard from "@/components/FeatureCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturesSlice`.
 */
export type FeaturesSliceProps =
  SliceComponentProps<Content.FeaturesSliceSlice>;

/**
 * Component for "FeaturesSlice" Slices.
 */
const FeaturesSlice = ({ slice }: FeaturesSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FeatureCard slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default FeaturesSlice;
