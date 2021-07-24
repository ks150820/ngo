import React from "react";
import Link from "next/link";

const BlogCards = ({ img, title, desc }) => {
  return (
    <Link href="/">
      <div className="w-full shadow-md text-center cursor-pointer my-3 mx-2 rounded-sm overflow-hidden flex">
        <div className="max-w-xl h-56 ">
          <img src={img} alt="unnamed" className="w-full h-full object-cover" />
        </div>
        <div className="px-3 py-4">
          <h4 className="mb-4 text-xl" style={{ color: "#d94b38" }}>
            {title}
          </h4>
          <p style={{ color: "#869ab8" }}>{desc}</p>
          <p className="font-semibold">Read more</p>
          <p className="mb-1 " style={{ color: "#c1c1c1" }}>
            November 10,2020
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCards;
