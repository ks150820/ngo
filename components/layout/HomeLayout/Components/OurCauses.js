import React from "react";
import StoryAboutus from "../../../widget/ui/StoryAboutus";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderCard } from "../../../widget/ui/Cards";

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

const OurCauses = () => {
  return (
    <div className="items-center justify-center mt-10 md:p-16">
      <div>
        <div
          className="p-1 text-center mx-auto"
          style={{ backgroundColor: "#dbdbdb", maxWidth: "15%" }}
        >
          <p className="mb-0 text-white font-bold">STORY ABOUT US</p>
        </div>
        <h2 className="uppercase text-center font-bold mt-3 ">Our Causes</h2>
      </div>
      <div className="mt-12 px-16">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          autoPlay={true}
        >
          <SliderCard
            img="images/img-3.jpg"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slideValue="30"
            price="450"
            title="Desperate for Clean Water & Safe Water"
            percentage="30"
            status={true}
            Date=" July 21 2021"
          />
          <SliderCard
            img="images/img-4.jpg"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slideValue="20"
            price="450"
            title="Desperate for Clean Water & Safe Water"
            percentage="20"
            status={true}
            Date=" July 21 2021"
          />
          <SliderCard
            img="images/img-5.jpg"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slideValue="35"
            price="450"
            title="Desperate for Clean Water & Safe Water"
            percentage="35"
            status={true}
            Date=" July 21 2021"
          />

          <SliderCard
            img="images/img-6.jpg"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slideValue="60"
            price="450"
            title="Desperate for Clean Water & Safe Water"
            percentage="60"
            status={true}
            Date=" July 21 2021"
          />
          <SliderCard
            img="images/img-7.jpg"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slideValue="70"
            price="450"
            title="Desperate for Clean Water & Safe Water"
            percentage="70"
            status={true}
            Date=" July 21 2021"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default OurCauses;
