import React from "react";
import { IoStarHalf } from "react-icons/io5";

const HistoryLayout = () => {
  return (
    <div>
      <div className="my-12">
        <div className="md:flex items-center justify-center ">
          <div className="max-w-2xl mr-5">
            <p className="leading-7 text-xl">
              <span className="text-2xl font-semibold">
                The International Foundation
              </span>{" "}
              for Global knowledge cities was founded in 2013 by{" "}
              <i> prof. Maurits van Rooijen </i> and <i> en Ir Ad de Rooij </i>{" "}
              after they published their study . The Global Knowledge Cities
              concept . The Foundation is a Public Benefit Organisation.
            </p>
          </div>
          <div className="w-96 h-72">
            <img
              src="/images/placholder.jpg"
              className="w-full h-full object-cover"
              alt="foundation image"
            />
          </div>
        </div>

        <div className="mx-auto">
          <div className="my-16 text-center">
            <h2 className="uppercase m-0 text-center font-bold underline mt-10 mb-6 text-2xl">
              Goal of the foundation
            </h2>
            <div>
              <p>
                The general goal of the foundation is to develop global
                knowledge using local experiments for integrated social,{" "}
                <br></br>
                economic and ecological solutions, supported by a global
                dialogue. The foundation initiated or co-developed three
                international pilot cases : <i>Khajuraho</i> (india),{" "}
                <i>Schouwen-Duiveland</i> ( The Netherlands ) and the{" "}
                <i>Rhine basin</i> ( Western Europe ).
              </p>
            </div>
          </div>
          {/* ---countries cards --- */}
          <div className="md:flex  items-center justify-center">
            <div className="flex items-center justify-center my-5 mx-2">
              <div className="max-w-4xl rounded-md md:flex  overflow-hidden shadow-md">
                <div className="w-full h-56">
                  <img
                    src="/images/khajuraho-india-temple.jpg"
                    alt="khajuraho india"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center flex items-center justify-center leading-9">
                  <p>
                    The pilot case khajuraho reached in 2013 the status of
                    memorandum of understanding between the foundation and the
                    government of Madhya pradesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-5 mx-2">
              <div className="max-w-4xl rounded-md md:flex  overflow-hidden shadow-md">
                <div className="w-full h-56">
                  <img
                    src="/images/permanent-residence-netherlands.jpg"
                    alt="netherlands"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center flex items-center justify-center leading-9">
                  <p>
                    The pilot case Schouwen-Duiveland reached in 2018 the status
                    of active living lab, supported by public-private
                    cooperation. In the Living Lab youth, farmers, local
                    government , regional water board and knowledge institutions
                    experiment and learn together.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-5">
            <div className="max-w-4xl rounded-md md:flex  overflow-hidden shadow-md">
              <div className="w-full h-56">
                <img
                  src="/images/western_europe_2.png"
                  alt="western europe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center flex items-center justify-center leading-9">
                <p>
                  The pilot case of the Rhine basin reached in 2020 the status
                  of active international research project, connnecting
                  knowledge institutions in six countries and addressing the
                  challenge of local youth drive innovations in water, food,
                  energy and biodiversity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4 cards --- */}

        <div className="my-16">
          <div className="md:flex items-center justify-center">
            <div className="flex p-8 max-w-3xl rounded-sm shadow-sm mx-3">
              <div>
                <IoStarHalf className="text-red-600 text-xl" />
              </div>
              <div className="p-3">
                <p className="leading-7 text-md">
                  In 2018 Peof. Van Rooijan and Ad de Rooij presented the first
                  draft of the ABCD roadmap for global health city prototypes at
                  the high level round table smposium "Water Security and Food
                  security : Agriculture is a thirsty Business" in Lugano,
                  switzerland. The model's objective is to support the end-user
                  co-creation in the pilots projects.
                </p>
              </div>
            </div>
            <div className="flex p-8 max-w-3xl rounded-sm shadow-sm mx-3">
              <div>
                <IoStarHalf className="text-red-600 text-xl" />
              </div>
              <div className="p-3">
                <p className="leading-7 text-md">
                  In fall 2020 the foundation presented in a world-wide-webinar
                  from lead india the proposal for a new global health knowledge
                  center: the Dr. Kalam Global Health University.
                </p>
              </div>
            </div>
          </div>
          {/* --2-- */}
          <div className="md:flex items-center justify-center">
            <div className="flex p-8 max-w-3xl rounded-sm shadow-sm mx-3">
              <div>
                <IoStarHalf className="text-red-600 text-xl" />
              </div>
              <div className="p-3">
                <p className="leading-7 text-md">
                  When in early 2020 the covid 19 pandemic came and shocked the
                  world, the foundation decided to focus furthur activities to
                  develop new kknowledge on global health. This lead to the
                  global health cities initiative and a dedicated vision and
                  roadmap.
                </p>
              </div>
            </div>
            <div className="flex p-8 max-w-3xl rounded-sm shadow-sm mx-3">
              <div>
                <IoStarHalf className="text-red-600 text-xl" />
              </div>
              <div className="p-3">
                <p className="leading-7 text-md">
                  In spring 2021 the foundation was asked by water academy
                  sustainable and responsible development ( based in switzerland
                  ) to consider a possible engagement in a pre-G 20 forum on
                  water in Rome, Autumn 2021, to be held on invitation of the
                  italian prime minsister, with a follow up in 2022 when india
                  will be the G20 host.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLayout;
