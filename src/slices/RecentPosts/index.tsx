import RecentsPostsComponent from "@/components/LP-RecentsPosts";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RecentPosts`.
 */
export type RecentPostsProps = SliceComponentProps<Content.RecentPostsSlice>;

/**
 * Component for "RecentPosts" Slices.
 */
const RecentPosts = ({ slice }: RecentPostsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <RecentsPostsComponent
        slice={slice}
        index={0}
        slices={[]}
        context={undefined}
      />
    </section>
  );
};

export default RecentPosts;
