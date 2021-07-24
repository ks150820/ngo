import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TrackRecordLayout = () => {
  return (
    <div className="my-3 p-3">
      <div>
        <h1 className="uppercase text-red-700 text-2xl font-semibold">
          Track Record ...
        </h1>
        <div className="w-full h-0.5 bg-red-700 mt-2" />
      </div>
      <div>
        {/* header */}
        <div className="md:flex items-center justify-evenly">
          <div className=" w-96 h-96 ">
            <img
              src="/images/track-record.jpg"
              className="w-full h-full object-cover"
              alt="tract record"
            />
          </div>
          <div className="max-w-4xl">
            <p>
              The ABCD roadmap for Global Health Cities prototypes is based upon
              a unique concept for multi party cooperation that has been
              developed and successfully applied by the Dutch Ministry of
              Infrastructure and Water Management between 1993 en 2007.
              Co-founder of the Foundation Ad de Rooij led this program for the
              Ministry as a project director together with hundreds of experts.
            </p>
            <p>
              The program realized numerous innovations and innovative national
              infrstructural and spatial projects, always with the end-users as
              driving force. This approach was revolutionary because the usual
              approach started with politicians and experts giving their
              solution. The broad experiences and comprehensive new knowledge
              have been recorded by over one hundred authors in two books (in
              Dutch), downloadable from <a href="#">www.procesmetselaars.nl/</a>
              .
            </p>
          </div>
        </div>
        {/* content */}
        <div className="container mx-auto my-10">
          <div className="my-10">
            <h1 style={{ color: "#ef3f49" }} class="text-2xl font-semibold ">
              Some examples of national projects where the end-users led
              successful the way are :
            </h1>
            <div className="ml-8 mt-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">Extending Rotterdam harbour into the sea;</p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">Improving waterquality in national lakes;</p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">
                  Public-private-societal cocreation and decision making for the
                  A4 sustainable highway;
                </p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">
                  Enlarging the drain capacity of the river Rhine through
                  public-private-societal cocreation and decision making;
                </p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">
                  Connecting citizens with administrators for the river Waal,
                  see <a href="#">https://waalweelde.gelderland.nl</a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 style={{ color: "#ef3f49" }} class="text-2xl font-semibold ">
              Some examples of local projects where the Foundation is one of the
              co-founders and ABCD roadmap is applied are :
            </h1>
            <div className="ml-8 mt-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">
                  Youth, farmers, local government and knowledge institutions
                  cocreating innovations for water, food and health on the
                  island of Schouwen-Duiveland, see{" "}
                  <a href="#">https://livinglabschouwen-duiveland.nl/</a>
                </p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-xl text-red-600 mr-3" />
                <p className="leading-7">
                  Local citizen driven cocreation for the sustainable
                  development of the Broekpolder Vlaardingen, The Netherlands,
                  see https://www.broekpolder-vlaardingen.nl/
                </p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 style={{ color: "#ef3f49" }} class="text-2xl font-semibold ">
              A project that recently started and applies (with help of the
              Foundation) the ABCD method with youth as driving force :
            </h1>
            <div className="ml-8 mt-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-2xl text-red-600 mr-3" />
                <p >
                  Youth, knowledge institutions, administrators and policy makes
                  developing multiple youth-drive innovations in the Rhine
                  basin. The project has been adopted by the Unesco IHE
                  university with support of the international Rhine commission
                  and the Dutch Ministry for Infrastructure and Watermanagement
                  see https://www.youthfortherhine.org/
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecordLayout;
