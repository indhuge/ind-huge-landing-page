import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Contato from "@/components/contato"


/**
 * Props for `Contato`.
 */
export type ContatoProps = SliceComponentProps<Content.ContatoSlice>;

/**
 * Component for "Contato" Slices.
 */
const ContatoSlice = ({ slice }: ContatoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Contato slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default ContatoSlice;
