import React from "react";

import blogImage1 from "../components/images/Blog1.png";
import blogImage2 from "../components/images/Blog2.png";
import blogImage3 from "../components/images/Blog3.png";

const Section8 = () => {
  return (
    <div className=" bg-[#211b36] border-t-2 border-gray-600 ">
      <div className="text-center text-white px-4 lg:px-0 md:px-0 pt-[6%] pb-[20%]">
        <h4 className="text-normal mb-3">Our Blog</h4>
        <h1 className="text-4xl font-semibold mb-6 capitalize">
          Latest Insights and Articles
        </h1>
        <p className="text-sm mb-8">
          Each project highlights our expertise and the transformative impact{" "}
          <br />
          of our services
        </p>
        {/* Blog Cards */}{" "}
        <div className="flex flex-wrap justify-center gap-6 mb-2 text-white">
          <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
            <img
              src={blogImage1}
              alt="Service 1"
              className="object-cover mb-4 "
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
            <img
              src={blogImage2}
              alt="Service 2"
              className="object-cover mb-4 "
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
            <img
              src={blogImage3}
              alt="Service 3"
              className=" object-cover mb-2 "
            />
          </div>
        </div>
        <button className="bg-[#7828d6] text-white px-6 py-2 rounded-full font-semibold">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Section8;
