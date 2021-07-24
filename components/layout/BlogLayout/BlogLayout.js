import React from "react";
import BlogCards from "./components/BlogCards";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const BlogLayout = () => {
  return (
    <div className="w-full h-full items-center justify-center ">
      <div className="relative">
        <div
          style={{ backgroundImage: "url('/images/img-5.jpg')" }}
          className="w-full h-56 opacity-60"
        />
        <div className="absolute bottom-16 left-10">
          <h1 className="font-semibold text-4xl">Blogs</h1>
        </div>
      </div>
      <div className="md:flex my-10">
        <div className=" px-3 justify-center items-center border-gray-300 md:border-r-2 border-b-2 md:border-b-0">
          <BlogCards
            img="/images/img-1.jpg"
            title="Lorem Ipsum Lorem Ipsum"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <BlogCards
            img="/images/img-2.jpg"
            title="Lorem Ipsum Lorem Ipsum"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />

          <BlogCards
            img="/images/img-5.jpg"
            title="Lorem Ipsum Lorem Ipsum"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
          />
          <BlogCards
            img="/images/img-6.jpg"
            title="Lorem Ipsum Lorem Ipsum"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
        <div className="max-w-4xl md:w-1/3">
          <div className="px-5">
            <h1 className="font-semibold text-2xl">Newsletter Subscription</h1>
            <form className="flex justify-center mt-4">
              <input
                className="py-2 px-3 rounded-lg mr-2 outline-0   text-lg mb-4 border-2 border-gray-300"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <button
                className="py-2 px-5 h-12 rounded-lg border-0 outline-none border-none font-semibold cursor-pointer text-white transition-all duration-700 ease-out"
                style={{ backgroundColor: "#ff0000", color: "#fff" }}
                onClick={() => console.log("submit")}
                type="reset"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="px-5 bottom-0 ">
            <h1 className="font-semibold text-2xl">Follow us on</h1>
            <div className="flex px-5 justify-evenly mt-5">
              <IoLogoInstagram className="text-red-600 text-xl hover:text-blue-400 cursor-pointer" />
              <IoLogoFacebook className="text-red-600 text-xl hover:text-blue-400 cursor-pointer" />
              <IoLogoTwitter className="text-red-600 text-xl hover:text-blue-400 cursor-pointer" />
              <IoLogoYoutube className="text-red-600 hover:text-blue-400 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
