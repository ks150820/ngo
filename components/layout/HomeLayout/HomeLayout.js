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

const HomeLayout = () => {
  return (
    <div>
      <HeroSection />
      <Threecards />
      <div className="flex justify-center items-center">
        <EveryOne />
      </div>
      <RefugeesCrisis />
      <OurCauses />
      <ThoughtOfTheDay />
      <LatestBlogs />
      <PetitionAndSolution />
      <Gallery />
    </div>
  );
};

export default HomeLayout;
