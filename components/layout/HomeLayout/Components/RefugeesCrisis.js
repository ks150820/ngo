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
          style={{ backgroundColor: "#d74a38", opacity: 0.9,width: "100%"}}
        >
          <div className="h-52 w-52 mx-auto rounded-full overflow-hidden">
            <img
              src="images/urbanisation.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl " style={{width: "70%"}}>
            <p className="text-xl font-semibold" style={{ color: "#ecd4d0" }}>
              $7220 To Go
            </p>
            <h2 className="font-bold text-white text-4xl">
              Syrian Refugee Crisis
            </h2>
            <p className=" font-semibold leading-7 pt-3" style={{ color: "#ecd4d0" }}>
              Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis
              scelerisque porttitor in ac turpis. In nec imperdiet turpis.
              Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis
              ipsum. Integer eget sagittis.
            </p>
          </div>
          <div className="h-52 w-52 rounded-full mx-auto overflow-hidden">
            <CircularProgressbar
              value={66}
              text="66%"
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
