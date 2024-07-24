import React from "react";
import Navbar from "../components/Navbar";
import image from "../components/images/Section2.png";

const Section2 = () => {
  return (
    <div className="border-t-2 border-gray-600">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center mx-5 lg:items-start lg:ml-[8%] lg:mt-[6%] md:mx-[5%] lg:space-x-20">
        <div className="w-full lg:w-1/2 text-white text-left p-8  lg:pr-[5%]">
          <h4 className="text-normal mb-3">About Us</h4>
          <h2 className="text-4xl font-semibold mb-8 leading-relaxed">
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
            <br /> Since 2015
          </h2>

          <p className="text-xs mb-8">
            At Robx.ai, we are committed to delivering reliable, transparent,
            and efficient software development services. Our client-centric
            approach ensures we understand your business challenges, crafting
            customized AI solutions that meet your expectations, deadlines, and
            budget.
          </p>

          <div className="mb-12">
            <div className="mb-4">
              <p className="text-sm mb-1">Artificial Intelligence</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] h-2 rounded-full"
                  style={{ width: "81%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white text-sm">
                  81%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Customer Satisfaction</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] h-2 rounded-full"
                  style={{ width: "99%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white text-sm">
                  99%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Quality</p>
              <div className="bg-[#131b26] h-2 rounded-full relative">
                <div
                  className="absolute top-0 left-0 bg-[#7828d6] h-2 rounded-full"
                  style={{ width: "76%" }}
                ></div>
                <span className="absolute top-[-20px] right-0 transform translate-x-full text-white text-sm">
                  76%
                </span>
              </div>
            </div>
          </div>

          <button className="bg-[#7828d6] text-white font-bold px-8 py-2 rounded-full">
            Read More
          </button>
        </div>

        <div className="w-full lg:w-96 mt-[3%]">
          <img src={image} alt="AI Solutions" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
