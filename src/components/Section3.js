import React from "react";
import { BsDiamond } from "react-icons/bs";
import { projectImages } from "../constant/data";

const borderTextStyle = {
  color: "transparent",
  WebkitTextStroke: "1px gray",
};
const Section3 = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-32">
      <div className="text-center text-white mt-[3%]">
        <h4 className="md:text-base text-sm  mb-3  ">Our Portfolio</h4>
        <h1 className="lg:text-4xl md:text- text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug font-popin">
          Watch Our Advanced AI Projects
        </h1>
        <p className="text-sm md:text-base mb-12 font-light lg:w-[50%] w-[70%] mx-auto ">
          Our portfolio demonstrates an extensive range of AI-driven solutions
          we have created to improve businesses and change industries.
        </p>
        {/* <div className="flex flex-col lg:flex-row gap-3 mx-auto mb-8 w-full">
          <div className="lg:w-1/2 border rounded-md">
            <img
              src="/images/card1.png"
              alt="Project 1"
              className="w-full h-full rounded-md "
            />
          </div>
          <div className="w-full lg:w-2/3  flex flex-wrap gap-3">
            <div className="w-full lg:w-[48%] lg:[48%]">
              <img
                src="/images/card2.png"
                alt="Project 2"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-full lg:w-[48%]  lg:[48%] ">
              <img
                src="/images/card3.png"
                alt="Project 3"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-full lg:w-[48%] lg:[48%] ">
              <img
                src="/images/card4.png"
                alt="Project 4"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-full lg:w-[48%]  lg:[48%] ">
              <img
                src="/images/card5.png"
                alt="Project 5"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div> */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-80 overflow-hidden group border-2 border-gray-300 rounded-md"
            >
              <div className="w-full h-full transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-150%] scroll-smooth">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-auto rounded-md image-filter"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4 mb-8 lg:space-x-10 py-3">
          <div className="flex items-center">
            <span
              className="lg:text-4xl md:text-2xl text-xs"
              style={borderTextStyle}
            >
              Skilled Experts
            </span>
          </div>
          <div className="flex items-center space-x-10">
            <BsDiamond className="lg:text-lg md:text-base text-sm text-gray-500" />
            <span
              className="lg:text-4xl md:text-2xl text-xs"
              style={borderTextStyle}
            >
              Creativity
            </span>
          </div>
          <div className="flex items-center space-x-10">
            <BsDiamond className="lg:text-lg md:text-base text-sm text-gray-500" />
            <span
              className=" lg:text-4xl md:text-2xl text-xs "
              style={borderTextStyle}
            >
              Magical World
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
