import React from "react";
import Navbar from "../components/Navbar.js";

const Section1 = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="mt-4  text-white text-start lg:w-1/2 md:mx-[5%] ">
        <h1 className="text-4xl sm:text-5xl md:text-5xl  font-semibold mb-4 leading-tight lg:mt-[10%] md:mt-[-30%] lg:leading-normal md:leading-relaxed ">
          Revolutionizing <br /> Your Business With <br />
          <span
            style={{
              background: "linear-gradient(90deg, #d18cfe, #f569dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Solutions
          </span>
        </h1>
        <p className="lg:text-sm md:text-base  md:leading-loose lg:leading-normal  text-xs mb-8">
          We make good AI engineers. They, in turn, make good AI solutions. We
          make good AI engineers. They, in turn, make good AI solutions. We make
          good AI engineers. They, in turn, make good AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row md:mt-20 lg:mt-10 items-center">
          <button className="bg-[#7828d6] text-black px-6 py-2 rounded-full min-w-[150px] min-h-[40px] flex items-center justify-center mb-4 sm:mb-0  ">
            Explore More
          </button>
          <p className="text-xs sm:text-sm mx-0 sm:mx-6 flex-shrink-0 text-center sm:text-left pl-10 ">
            <b className="text-2xl sm:text-4xl">300+</b> <br />
            Trusted Companies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
