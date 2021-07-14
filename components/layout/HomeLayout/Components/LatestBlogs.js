import React from "react";
import StoryAboutus from "../../../widget/ui/StoryAboutus";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BlogCards } from "../../../widget/ui/Cards";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1,
  },
};

const LatestBlogs = () => {
  return (
    <div className="items-center justify-center mt-10 md:p-16">
      <div>
        <h2 className="uppercase text-center mt-3 font-bold">Latest Blogs</h2>
      </div>
      <div className="mt-12 md:px-16 md:flex mx-auto items-center justify-center rounded-xl overflow-hidden">
          <BlogCards />
          <BlogCards />
          <BlogCards />
      </div>
    </div>
  );
};

export default LatestBlogs;
