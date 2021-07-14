import React from "react";
import { CardItem } from "../../../widget/ui/Cards";

const Gallery = () => {
  return (
    <div className="p-1 my-8 mb-20 bg-white">
      <h2 className="uppercase text-center font-bold mt-3">Gallery</h2>
      <div
        className="flex flex-col items-center my-0 mx-auto "
        style={{ maxWidth: 1120, width: "90%" }}
      >
        <div className="relative mt-12 mr-0 ml-11">
          <ul className=" flex mb-8">
            <CardItem src="images/img-5.jpg" label="Adventure" />
            <CardItem src="images/img-6.jpg" label="Luxury" />
          </ul>
          <ul className=" flex mb-8">
            <CardItem src="images/img-3.jpg" label="Mystery" />
            <CardItem src="images/img-4.jpg" label="Adventure" />
            <CardItem src="images/img-5.jpg" label="Adrenaline" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
