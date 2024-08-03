import React from "react";
import "../App.css";
import Icon1 from "../components/images/Icon1.png";
import Icon2 from "../components/images/Icon2.png";
import Icon3 from "../components/images/Icon3.png";
import Testi1 from "../components/images/testi1.png";
import Testi2 from "../components/images/testi2.png";
import Testi3 from "../components/images/testi3.png";
import Rating from "../components/images/5 star.png";

const Section5 = () => {
  const customFontSize = {
    xxs: {
      fontSize: "0.625rem",
    },
  };
  return (
    <div className="container py-16 border-t-2 border-gray-600">
      <div className="flex flex-col lg:flex-row justify-between text-white mt-5 mx-8 px-[5%] lg:px-[6%]">
        <div className="w-full lg:w-[42%] text-left">
          <h4 className="text-normal mb-4">Testimonial</h4>
          <h1 className="text-3xl font-semibold mb-4 capitalize">
            Recommended{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              by 97%
            </span>{" "}
            of our customers
          </h1>
          <p className="mb-8 text-sm lg:mr-10">
            Discover what our clients have to say about their experience with
            Robx.ai. Our commitment to excellence in AI solutions has earned us
            their trust.
          </p>
          <div className="space-y-4 mb-8 flex flex-wrap lg:flex-nowrap">
            <div className="flex items-center space-x-2 ">
              <img src={Icon1} alt="Icon1" className="h-8 w-7" />
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">
                  87{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    +
                  </span>
                </p>
                <p className="text-xs " style={customFontSize.xxs}>
                  Trusted Partner
                </p>
              </div>
              <div className="border-l-2 border-gray-400 h-14 pl-4 "></div>
            </div>
            <div className="flex items-center space-x-2">
              <img src={Icon2} alt="Icon2" className="h-8 w-7" />
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">
                  44{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    +
                  </span>
                </p>
                <p className="text-xs" style={customFontSize.xxs}>
                  Worldwide User
                </p>
              </div>
              <div className="border-l-2 border-gray-400 h-14 pl-4  mb-2"></div>
            </div>
            <div className="flex items-center space-x-2">
              <img src={Icon3} alt="Icon3" className="h-8 w-7" />
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">
                  5{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    +
                  </span>
                </p>
                <p className="text-xs" style={customFontSize.xxs}>
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-8 py-2 font-semibold rounded-full button-hover">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-8 lg:mt-0">
          <div className="bg-gray-800 border border-gray-200 p-4 flex space-x-4 lg:w-10/12  lg:ml-0">
            <div className="flex-shrink-0">
              <img src={Testi1} alt="Testimonial 1" className="h-16 w-16" />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-2">
                <img src={Rating} alt="5 Star Rating" />
              </div>
              <p className="text-xs">
                Robx.ai transformed our operations with their AI solutions,
                delivering beyond our expectations.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-200 p-4 flex space-x-4 lg:w-10/12 lg:ml-20  ">
            <div className="flex-shrink-0">
              <img src={Testi2} alt="Testimonial 2" className="h-16 w-16" />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-2">
                <img src={Rating} alt="5 Star Rating" />
              </div>
              <p className="text-xs">
                Their team expertise and dedication ensured a seamless
                integration of AI into our business processes.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-200 p-4 flex space-x-4 lg:w-10/12 lg:ml-0">
            <div className="flex-shrink-0">
              <img src={Testi3} alt="Testimonial 3" className="h-16 w-16" />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-2">
                <img src={Rating} alt="5 Star Rating" />
              </div>
              <p className="text-xs">
                We rely on Robx.ai for their innovative approach and reliable
                support, which have been crucial to our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
