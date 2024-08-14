import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Section9 = () => {
  return (
    <div className=" bg-[#211b36] border-t-2 border-gray-600 ">
      <div className="text-center text-white  md:px-0 pt-[6%] pb-[16%] lg:mt-[3%] mt-[6%] px-[12%] lg:px-[10%]  ">
        <h4 className="text-sm md:text-base mb-3 ">Our Blog</h4>
        <h1 className="md:text-4xl text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug">
          Latest News and Articles
        </h1>
        <p className="text-xs md:text-sm  mb-12 font-light lg:w-[43%] w-[70%] mx-auto tracking-wide ">
          Each project highlights our expertise and the transformative impact of
          our services
        </p>
        {/* Blog Cards */}{" "}
        <div className="flex flex-wrap justify-center gap-6 mb-2 text-white">
          <div className="w-full sm:w-1/2 lg:w-[31%] text-center">
            <img
              src="/images//Blog1.png"
              alt="Service 1"
              className="object-cover mb-4 "
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-[31%] text-center">
            <img
              src="/images//Blog2.png"
              alt="Service 2"
              className="object-cover mb-4 "
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-[31%] text-center">
            <img
              src="/images//Blog3.png"
              alt="Service 3"
              className=" object-cover mb-2 "
            />
          </div>
        </div>
        <button className="bg-[#7828d6] text-white min-w-[12px] min-h-[40px] px-8 py-2 rounded-full md:text-normal  text-sm  font-semibold button-hover">
          <Link to="blog"> Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Section9;
