import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PetitionCard } from "../../../widget/ui/Cards";

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

const PetitionAndSolution = () => {
  return (
    <div className="items-center justify-center mt-10 md:p-16">
      <div>
        <div
          className="p-1 text-center mx-auto"
          style={{ backgroundColor: "#dbdbdb", maxWidth: "10%" }}
        >
          <p className="mb-0 text-white font-bold">STORY ABOUT US</p>
        </div>
        <h2 className="uppercase text-center font-bold mt-3">Petitin & Solution</h2>
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
          <PetitionCard
            image="images/img-4.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
          <PetitionCard
            image="images/img-5.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
          <PetitionCard
            image="images/img-5.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
          <PetitionCard
            image="images/img-6.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
          <PetitionCard
            image="images/img-4.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
          <PetitionCard
            image="images/img-4.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
          <PetitionCard
            image="images/img-4.jpg"
            subtitle="Lorem Ipsum"
            title="Lorem Ipsum Lorem Ipsum"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PetitionAndSolution;
