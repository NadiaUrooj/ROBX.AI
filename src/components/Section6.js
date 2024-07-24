import React from "react";

import companyLogo1 from "../components/images/C logo1.png";
import companyLogo2 from "../components/images/C logo2.png";
import companyLogo3 from "../components/images/C logo3.png";
import companyLogo4 from "../components/images/C logo4.png";

const Section6 = () => {
  return (
    <div className="bg-[#211b36] py-[5%] px-[5%] lg:px-0 border-b-2 border-gray-600 overflow-hidden">
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

        <div className="w-full lg:w-[70%] flex flex-wrap justify-center lg:justify-around items-center lg:space-x-12">
          <img src={companyLogo1} alt="Company 1" className="h-14 mx-2 my-2" />
          <img src={companyLogo2} alt="Company 2" className="h-14 mx-2 my-2" />
          <img src={companyLogo3} alt="Company 3" className="h-14 mx-2 my-2" />
          <img src={companyLogo4} alt="Company 4" className="h-14 mx-2 my-2" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
