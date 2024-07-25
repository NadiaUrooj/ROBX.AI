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
      <div className="text-center text-white mt-[10%]">
        <h4 className="text-normal mb-3">Our Portfolio</h4>
        <h1 className="text-4xl font-semibold mb-6">
          Take a Look at Our Projects
        </h1>
        <p className="text-sm mb-8">
          Each project highlights our expertise and the transformative impact{" "}
          <br />
          of our services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[900px] mx-auto mb-8">
          <img
            src={card1}
            alt="Project 1"
            className="w-full h-auto rounded-lg"
          />
          <div className="grid grid-cols-1">
            <img
              src={card2}
              alt="Project 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src={card3}
              alt="Project 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <img
              src={card4}
              alt="Project 4"
              className="w-full h-auto rounded-lg"
            />
            <img
              src={card5}
              alt="Project 5"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="flex items-center">
            <BsDiamond className="text-lg " />
            <span className="ml-2 text-2xl" style={borderTextStyle}>
              Skilled Experts
            </span>
          </div>
          <div className="flex items-center">
            <BsDiamond className="text-lg " />
            <span className="ml-2 text-2xl" style={borderTextStyle}>
              Creativity
            </span>
          </div>
          <div className="flex items-center">
            <BsDiamond className="text-lg " />
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
