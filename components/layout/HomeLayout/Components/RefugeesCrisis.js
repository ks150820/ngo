import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RefugeesCrisis = () => {
  return (
    <div
      className="bg-fixed mx-auto py-20 mt-16 "
      style={{
        backgroundImage: `url(${"images/img-9.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      <div className="mx-3  ">
        <div
          className="px-12 mx-auto py-14 max-w-7xl md:items-center md:flex justify-between"
          style={{ backgroundColor: "#d74a38", opacity: 0.9, width: "100%" }}
        >
          <div className="h-52 w-52 mx-auto rounded-full overflow-hidden">
            <img
              src="images/urbanisation.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl " style={{ width: "70%" }}>
            <p className="text-xl font-semibold" style={{ color: "#ecd4d0" }}>
              Urgently needed:-
            </p>
            <h2 className="font-bold text-white text-4xl">
              new approaches for global health
            </h2>
            <p
              className=" font-semibold leading-7 pt-3"
              style={{ color: "#ecd4d0" }}
            >
              Urgently needed: new approaches for global health With yet another
              global health crisis the message is clearer than ever: The world
              urgently needs a sensible global approach to health. As a
              Foundation we developed a concept to approach complex global
              issues towards new knowledge and multiple innovations: the Global
              Knowledge Cities concept. See LINK Publications. The coming post
              pandemic era offers an excellent opportunity to apply this concept
              on global health and develop new knowledge and multiple solutions.
            </p>
          </div>
          <div className="h-52 w-52 rounded-full mx-auto overflow-hidden">
            <CircularProgressbar
              value={60}
              text=" progress"
              styles={buildStyles({
                backgroundColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textColor: "#fff",
              })}
              strokeWidth="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefugeesCrisis;
