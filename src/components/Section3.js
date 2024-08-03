import React from "react";
import card1 from "../components/images/card1.png";
import card2 from "../components/images/card2.png";
import card3 from "../components/images/card3.png";
import card4 from "../components/images/card4.png";
import card5 from "../components/images/card5.png";
import { BsDiamond } from "react-icons/bs";

const borderTextStyle = {
  color: "transparent",
  WebkitTextStroke: "1px white",
};

const Section3 = () => {
  return (
    <div className="container">
      <div className="text-center text-white mt-[10%] px-[5%]">
        <h4 className="text-normal mb-3">Our Portfolio</h4>
        <h1 className="text-4xl font-semibold mb-6">
          Watch Our Advanced AI Projects
        </h1>
        <p className="text-sm mb-8">
          Our portfolio demonstrates an extensive range of AI-driven solutions
          we <br /> have created to improve businesses and change industries.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap max-w-[900px] mx-auto mb-8">
          <div className="w-full lg:w-1/3 lg:h-[80vh]">
            <img
              src={card1}
              alt="Project 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:h-[78vh] flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:h-1/2">
              <img
                src={card2}
                alt="Project 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:h-1/2">
              <img
                src={card3}
                alt="Project 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:h-1/2">
              <img
                src={card4}
                alt="Project 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:h-1/2">
              <img
                src={card5}
                alt="Project 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="flex items-center">
            <BsDiamond className="text-lg" />
            <span className="ml-2 text-2xl" style={borderTextStyle}>
              Skilled Experts
            </span>
          </div>
          <div className="flex items-center">
            <BsDiamond className="text-lg" />
            <span className="ml-2 text-2xl" style={borderTextStyle}>
              Creativity
            </span>
          </div>
          <div className="flex items-center">
            <BsDiamond className="text-lg" />
            <span className="ml-2 text-2xl" style={borderTextStyle}>
              Magical World
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
