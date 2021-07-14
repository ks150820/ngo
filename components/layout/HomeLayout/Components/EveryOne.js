import React from "react";
import StoryAboutus from "../../../widget/ui/StoryAboutus";
import Link from "next/link";

const EveryOne = () => {
  return (
    <div
      className="text-center md:max-w-7xl  mx-3   md:px-32 md:py-24"
      style={{ border: "2px solid #c1c1c1" }}
    >
      <div className="mx-auto">
        <div className="py-4">
          <StoryAboutus />
        </div>
        <div className=" py-3">
          <h2 className="text-3xl uppercase" style={{ color: "#d94b38" }}>
            Invitation to. Stakeholders.
          </h2>
          <h2 className="text-3xl uppercase " style={{ color: "#d94b38" }}>
            for coorperation.
          </h2>
        </div>
        <p className="py-4" style={{ color: "#c1c1c1" }}>
          This website is meant to inform all public and private stakeholders
          including knowledge institutions and NGO's which may be interested in
          our "HealthyRiversAndCities" initiative. When an Organisation is
          interested we invite that organisation to get in touch with us. Then
          we can explore possible cooperation. As we will explain here the
          "HealthyRiversAndCities" initiative is in its core a project of
          worldwide co-learning and cooperation.Please see{" "}
          <span className="text-red-500">contact</span>.
        </p>
        <Link href="/">
          <p className="outline-0 border-0 text-red-500 cursor-pointer">
            Learn more...
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EveryOne;
