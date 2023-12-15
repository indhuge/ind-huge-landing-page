import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RecentsPostsAndCategories`.
 */
export type RecentsPostsAndCategoriesProps =
  SliceComponentProps<Content.RecentsPostsAndCategoriesSlice>;

/**
 * Component for "RecentsPostsAndCategories" Slices.
 */
const RecentsPostsAndCategories = ({
  slice,
}: RecentsPostsAndCategoriesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <p>Teste</p>
    </section>
  );
};

export default RecentsPostsAndCategories;
