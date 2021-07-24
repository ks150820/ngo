import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const ContactLayout = () => {
  return (
    <div style={{ backgroundColor: "#1a252e" }} className="p-5">
      <div className="mx-auto text-center">
        <h1 className="text-4xl text-white font-normal">CONTACT US</h1>
        <div className="bg-gray-300 w-full h-0.5 mx-auto mt-3" />
      </div>
      <div className="my-16">
        <div className="md:flex items-center justify-evenly ">
          <div className="w-96 h-72 ">
            <img
              src="/images/map.png"
              className="w-full h-full object-cover"
              alt="foundation image"
            />
          </div>
          <div>
            <div className="flex my-10">
              <IoLocationOutline className="text-white text-xl" />
              <div className="ml-8">
                <p className="text-center text-xl text-white">
                  Madhya predesh <br></br> Khajuraho
                </p>
              </div>
            </div>
            <div className="flex my-10">
              <IoCallOutline className="text-white text-xl" />
              <div className="ml-8">
                <p className="text-center text-xl text-white">+91-23455566</p>
              </div>
            </div>
            <div className="flex my-10">
              <IoMailOutline className="text-white text-xl" />
              <div className="ml-8">
                <p className="text-center text-xl text-white">
                  ravi@eurostarinn.com
                </p>
              </div>
            </div>
            <div className="bg-gray-300 w-64 h-0.5" />
            <div className="flex px-5 justify-evenly mt-5">
              <IoLogoInstagram className="text-white text-xl hover:text-blue-400 cursor-pointer" />
              <IoLogoFacebook className="text-white text-xl hover:text-blue-400 cursor-pointer" />
              <IoLogoTwitter className="text-white text-xl hover:text-blue-400 cursor-pointer" />
              <IoLogoYoutube className="text-white  hover:text-blue-400 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
