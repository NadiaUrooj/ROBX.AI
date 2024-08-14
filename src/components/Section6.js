import React from "react";

const Section6 = () => {
  return (
    <div className="bg-[#211b36] py-[5%] px-[2%] md:px-[8%] border-b-1 border-white overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center text-white max-w-screen-xl mx-auto">
        <div className="text-lg w-full lg:w-[20%] text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="font-semibold">
            <span
              style={{
                background: "linear-gradient(90deg, #d18cfe, #f569dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trusted By
            </span>{" "}
            <br />
            Big Companies
          </h1>
        </div>

        <div className="w-full lg:w-[70%] flex flex-wrap justify-center lg:justify-around items-center">
          <div className="w-1/2 md:w-1/4 flex justify-center my-2">
            <img
              src="/images/C logo1.png"
              alt="Company 1"
              className="h-14 mx-2"
            />
          </div>
          <div className="w-1/2 md:w-1/4 flex justify-center my-2">
            <img
              src="/images/C logo2.png"
              alt="Company 2"
              className="h-14 mx-2"
            />
          </div>
          <div className="w-1/2 md:w-1/4 flex justify-center my-2">
            <img
              src="/images/C logo3.png"
              alt="Company 3"
              className="h-14 mx-2"
            />
          </div>
          <div className="w-1/2 md:w-1/4 flex justify-center my-2">
            <img
              src="/images/C logo4.png"
              alt="Company 4"
              className="h-14 mx-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
