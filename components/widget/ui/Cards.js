import React from "react";
import { ProgressBar } from "react-bootstrap";

export const Cards = (props) => {
  return (
    <div
      className="p-12 text-left"
      style={{ backgroundColor: `${props.color}` }}
    >
      <h4 className="text-white uppercase">{props.title}!</h4>
      <div className="my-3">
        <p className="text-white leading-7 text-sm">{props.intro}</p>
      </div>
      <button className="py-1 px-3 rounded-sm outline-0 items-center cursor-pointer border-2 border-white bg-transparent text-white text-xl">
        Read More
      </button>
    </div>
  );
};

export const SliderCard = ({
  img,
  intro,
  title,
  price,
  percentage,
  status,
  movement,
}) => {
  return (
    <div
      className="ml-1 mr-1 rounded-md overflow-hidden shadow-md m-2 "
      style={{ textAlign: `${movement}` }}
    >
      <img src={img} alt="pic" className="w-full h-64 border-t-xl" />
      <h3 className="text-red-600 py-2.5">{title}</h3>
      <div className="pt-3 pr-3 pb-3 pl-0">
        <div className="mt-2">
          <p className="intro-section-p">{intro}</p>
        </div>
        {status && (
          <div>
            <div>
              <div className="justify-between flex">
                <p className="font-semibold">DONATED</p>
                <p className="text-red-400">{percentage}%</p>
              </div>
              <ProgressBar variant="danger" now={percentage} className="h-2" />
            </div>
            <p className="text-gray-300 ">${price} to go</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const BlogCards = () => {
  return (
    <div className="md:max-w-sm shadow-md text-center my-3 mx-2 rounded-sm overflow-hidden">
      <div className="w-full h-62 ">
        <img
          src="images/unnamed.jpg"
          alt="unnamed"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-3 py-4">
        <h4 className="mb-4" style={{ color: "#d94b38" }}>
          Lorem Ipsum is Lorem Ipsum
        </h4>
        <p style={{ color: "#869ab8" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <p className="font-semibold">Read more</p>
        <p className="mb-1 " style={{ color: "#c1c1c1" }}>
          November 10,2020
        </p>
      </div>
    </div>
  );
};

export const PetitionCard = ({ subtitle, title, image }) => {
  return (
    <div className=" rounded-md text-center  m-2 overflow-hidden shadow-md  p-8  ">
      <div className="rounded-full w-52 h-52 overflow-hidden mx-auto">
        <img
          src={image}
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-4">
        <p className="text-xl font-semibold">{subtitle}</p>
        <h4 style={{ color: "#d94b38" }} className="font-semibold">
          {title}
        </h4>
      </div>
    </div>
  );
};

export const CardItem = (props) => {
  console.log(props.src);
  return (
    <>
      <div className="flex flex-1 my-0 mx-4  hover:transition hover:duration-700 hover:ease-in-out">
        <div className="flex flex-col w-full  shadow-md rounded-lg overflow-hidden ">
          <div
            className="relative w-full h-full overflow-hidden"
            data-category={props.label}
          >
            <img
              className="top-0 right-0 left-0 bottom-0 block w-full max-w-full h-full max-h-full object-cover "
              alt="Travel gallery"
              src={props.src}
            />
          </div>
        </div>
      </div>
    </>
  );
};
