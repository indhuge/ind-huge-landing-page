"use client";
import RecentsPostsAndCategoriesComponent from "@/components/RecentsPostsAndCategoriesComponent";
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
      className="bg-white"
    >
      <RecentsPostsAndCategoriesComponent
        slice={slice}
        index={0}
        slices={[]}
        context={undefined}
      />
    </section>
  );
};

export default RecentsPostsAndCategories;
