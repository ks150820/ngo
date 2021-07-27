import { useState } from "react";
import { IoMenu, IoEllipsisVerticalSharp } from "react-icons/io5";
import onClickOutside from "react-onclickoutside";
import Link from "next/link";

const NavigationBar = () => {
  const [toggleBlock, setToggleBlock] = useState(false);

  const handleToggleBlock = () => setToggleBlock(!toggleBlock);

  NavigationBar.handleClickOutside = () => setToggleBlock(false);
  return (
    <div
      className="px-10 flex justify-between items-center sticky top-0 z-50"
      style={{ backgroundColor: "#1a252e" }}
    >
      <div className="w-16 h-16">
        <img 
          src="/images/logo-2.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:block hidden">
        <div className="flex items-center justify-center">
          <Link href="/">
            <h1
              className="text-xl bg-red-500 hover:text-xl font-normal text-white px-6 py-3 cursor-pointer"
              onClick={() => setToggleBlock(false)}
            >
              Home
            </h1>
          </Link>
          <Link href="/Vision">
            <h1
              className="text-xl hover:bg-red-500 hover:text-xl font-normal text-white px-6 py-3  cursor-pointer"
              onClick={() => setToggleBlock(false)}
            >
              Our Vision
            </h1>
          </Link>
          <Link href="/Roadmap">
            <h1
              className="text-xl hover:bg-red-500 hover:text-xl font-normal text-white px-6 py-3 cursor-pointer"
              onClick={() => setToggleBlock(false)}
            >
              Our Roadmap
            </h1>
          </Link>
          <Link href="/">
            <h1
              className="text-xl hover:bg-red-500 hover:text-xl font-normal text-white px-6 py-3 cursor-pointer"
              onClick={() => setToggleBlock(false)}
            >
              who we are
            </h1>
          </Link>
          {/* <Link href="/Blog">
            <h1
              className="text-xl hover:bg-red-500 hover:text-xl font-normal text-white px-6 py-3 cursor-pointer"
              onClick={() => setToggleBlock(false)}
            >
              Blogs
            </h1>
          </Link> */}
          <Link href="#contact">
            <h1
              className="text-xl hover:bg-red-500 hover:text-xl font-normal text-white px-6 py-3 cursor-pointer"
              onClick={() => setToggleBlock(false)}
            >
              Contact
            </h1>
          </Link>
          <div className="flex flex-col items-center justify-center">
            <div
              className=" p-1 w-9 h-9  items-center justify-center flex  rounded-full cursor-pointer"
              onClick={handleToggleBlock}
            >
              <IoEllipsisVerticalSharp className="text-white font-bold text-3xl " />
            </div>
            {toggleBlock && (
              <div className="absolute top-full mt-1  right-5">
                <div
                  style={{ backgroundColor: "#1a252e" }}
                  className="p-2 rounded-sm"
                >
                  <Link href="/HistoryFoundationAndTrackRecord">
                    <p
                      className="text-white text-lg rounded-sm font-normal px-6 py-1 hover:bg-red-500 cursor-pointer"
                      onClick={() => setToggleBlock(false)}
                    >
                      History foundation & track record
                    </p>
                  </Link>
                  <p
                    className="text-white text-lg font-normal px-6 py-1 hover:bg-red-500 cursor-pointer"
                    onClick={() => setToggleBlock(false)}
                  >
                    Proposal for global health university <br></br> and health
                    city india
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden block py-3">
        <IoMenu className="text-white font-semibold text-3xl " />
      </div>
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavigationBar.handleClickOutside,
};

export default onClickOutside(NavigationBar, clickOutsideConfig);
