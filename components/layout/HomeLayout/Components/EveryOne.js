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
          <h2 className="text-3xl uppercase font-semibold" style={{ color: "#d94b38" }}>
            Powered by the International Foundation for Global Knowledge Cities
          </h2>
        </div>
        <h2 className="text-1xl uppercase" style={{ color: "#d94b38" }}>
          Invitation
        </h2>
        <p className="py-4" style={{ color: "#374151" }}>
          Here we present the Global Health Cities initiative. We invite
          interested young professionals, multidisciplinary experts and public
          leaders who like to cooperate are invited to contact us, see{" "}
          <a className="text-red-400" href="#contact">LINK contact.</a>.
          <br />
          Board International Foundation for Global Knowledge Cities
        </p>
        <p className="py-4" style={{ color: "#374151" }}>
          Wel akkoord om opening naar vervolg locaties te expliciet te benoemen
          naast K. Voor K hebben we lokaal en regionaal bestuurlijk draagvlak
          voorbereid en een globaal plan ontwikkeld dat met weinig inspanning
          kan worden geactualiseerd (Arcadis!) en vervolgens uitgevoerd.
          Misschien goed als we dit expliciet benoemen want dan komen we
          concreter en daadkrachtiger over.
        </p>
        <Link href="/">
          <p className="outline-0 border-0 text-red-500 cursor-pointer">
            Know More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EveryOne;
