import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1a252e" }}>
      <div className="md:container text-center mx-auto py-10">
        <div>
          <p className="text-xl font-semibold text-white">
            Join the Foundation to recieve latest events notification
          </p>
          <p className="text-sm font-semibold text-white">
            You can unsubscribe anytime
          </p>
        </div>
        <div className="input-areas">
          <form>
            <input
              className="py-2 px-5 rounded-sm mr-2 outline-0 border-0 text-lg mb-4 border-1 border-white"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button
              className="py-2 px-5 rounded-sm outline-none border-none font-semibold cursor-pointer text-white transition-all duration-700 ease-out"
              style={{ backgroundColor: "#ff0000" }}
              onClick={() => console.log("submit")}
              type="reset"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-xs font-normal text-white">
            All Right Reserved @OnewonLabs Pvt. Ltd.
          </p>
        {/* <div class="md:flex justify-center">
          <div className="flex">
            <div class="flex flex-col flex-start m-4 text-left w-48 box-border">
              <h2 className="mb-8 text-white">About Us</h2>
              <p className="text-white mb-2">How it works</p>
              <p className="text-white mb-2">Testimonials</p>
              <p className="text-white mb-2">Careers</p>
              <p className="text-white mb-2">Investors</p>
              <p className="text-white mb-2">Terms of Service</p>
            </div>
            <div class="flex flex-col flex-start m-4 text-left w-48 box-border">
              <h2 className="mb-8 text-white">Contact Us</h2>
              <p className="text-white mb-2">Contact</p>
              <p className="text-white mb-2">Support</p>
              <p className="text-white mb-2">Destinations</p>
              <p className="text-white mb-2">Sponsorships</p>
            </div>
          </div>
          <div className="flex">
            <div class="flex flex-col flex-start m-4 text-left w-48 box-border">
              <h2 className="mb-8 text-white">Videos</h2>
              <p className="text-white mb-2">Submit Video</p>
              <p className="text-white mb-2">Ambassadors</p>
              <p className="text-white mb-2">Agency</p>
              <p className="text-white mb-2">Influencer</p>
            </div>
            <div class="flex flex-col flex-start m-4 text-left w-48 box-border">
              <h2 className="mb-8 text-white">Social Media</h2>
              <p className="text-white mb-2 cursor-pointer">Instagram</p>
              <p className="text-white mb-2 cursor-pointer">Facebook</p>
              <p className="text-white mb-2 cursor-pointer">Youtube</p>
              <p className="text-white mb-2 cursor-pointer">Twitter</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
