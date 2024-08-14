import React from "react";
import "../App.css";

const Section2 = () => {
  return (
    <div
      className="border-t-2 border-gray-600 w-full px-6 md:px-24"
      id="about"
      name="about"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-4  md:flex-row items-center lg:items-start lg:my-20 my-8  lg:pb-0 pb-[2%] ">
        <div className="w-full md:w-[45%] text-white mx-auto   ">
          <h4 className=" mb-3 uppercase text-sm  md:text-base ">About Us</h4>
          <h2 className="lg:text-4xl md:text- text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug ">
            Delivering &nbsp;
            <span
              style={{
                background: "linear-gradient(90deg, #d18cfe, #f569dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Solutions
            </span>
            <br className="hidden md:block" /> Since 2015
          </h2>

          <p className=" md:text-sm text-xs mb-8 font-light">
            At Robx.ai, we are committed to delivering reliable, transparent,
            and efficient software development services. Our client-centric
            approach ensures we understand your business challenges, crafting
            customized AI solutions that meet your expectations, deadlines, and
            budget.
          </p>

          <div className="mb-12">
            <div className="mb-4">
              <p className="text-xs mb-1">Artificial Intelligence</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] lg:h-2 md:h-2 h-1 rounded-full"
                  style={{ width: "81%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white lg:text-sm md:text-sm text-xxs lg:mr-0 md:mr-0 mr-4">
                  81%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs mb-1">Customer Satisfaction</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] lg:h-2 md:h-2 h-1 rounded-full"
                  style={{ width: "99%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white lg:text-sm md:text-sm text-xxs lg:mr-0 md:mr-0 mr-4">
                  99%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs mb-1">Quality</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] lg:h-2 md:h-2 h-1 rounded-full"
                  style={{ width: "76%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white lg:text-sm md:text-sm text-xxs lg:mr-0 md:mr-0 mr-4">
                  76%
                </span>
              </div>
            </div>
          </div>

          {/* <button className="bg-[#7828d6] text-white font-semibold lg:px-8 px-6 py-2 rounded-full button-hover  md:text-normal text-sm">
            Read More
          </button> */}
        </div>

        <div className="w-full md:w-[30%] mx-auto">
          <img
            src="/images/sec.png"
            alt="AI Solutions"
            className="w-full object-contain h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
