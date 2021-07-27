import React from "react";
import HeroSection from "./components/HeroSection";
import Threecards from "./components/Threecards";
import EveryOne from "./components/EveryOne";
import RefugeesCrisis from "./components/RefugeesCrisis";
import OurCauses from "./components/OurCauses";
import ThoughtOfTheDay from "./components/ThoughtOfTheDay";
import LatestBlogs from "./components/LatestBlogs";
import PetitionAndSolution from "./Components/PetitionAndSolution";
import Gallery from "./Components/Gallery";
import ContactLayout from "../contact/ContactLayout";
import Visionlayout from "../VisionLayout/Visionlayout";

const HomeLayout = () => {
  return (
    <div>
      <HeroSection />
      <div className="bg-white">
        <Threecards />
        <div className="flex justify-center items-center" id="everyone">
          <EveryOne />
        </div>
        <RefugeesCrisis />
        {/* <Historyfound_trackrecord /> */}
        <OurCauses />
        <ThoughtOfTheDay />
        {/* <LatestBlogs /> */}
        <PetitionAndSolution />
      </div>
    </div>
  );
};

export default HomeLayout;
