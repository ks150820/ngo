import React from "react";
import { Cards } from "../../../widget/ui/Cards";

const Threecards = () => {
  return (
    <div className="md:flex items-center justify-center md:container px-5 md:px-0 mx-auto py-16">
      <Cards
        color="#1a252e"
        title="Urgency & Ambitious goal"
        intro="The covid-19 pandemic has made health worldwide a matter of the highest urgency. Several vaccines have been developed which are presently being adopted. Hopefully the pandemic will be over shortly in all parts of the world!"
      />
      <Cards
        color="#af9659"
        title="initiative"
        intro="How to realize the goal of new knowledge ? In 2020 foundation started the HealthyRiversAndCities initiative and developed a dedicated approach for the initiative."
      />
      <Cards
        color="#d94b38"
        title="role foundation & youth"
        intro="The Foundation is not a project developer but assists all stakeholders in guarding the modern principles of the Global Knowledge cities and putting health innovation as new inspiring and leading principle in the roles..."
      />
    </div>
  );
};

export default Threecards;
