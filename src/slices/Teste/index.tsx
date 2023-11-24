import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Teste`.
 */
export type TesteProps = SliceComponentProps<Content.TesteSlice>;

/**
 * Component for "Teste" Slices.
 */
const Teste = ({ slice }: TesteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for teste (variation: {slice.variation}) Slices
    </section>
  );
};

export default Teste;
