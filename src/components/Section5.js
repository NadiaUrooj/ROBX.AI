import React from "react";
import "../App.css";

const Section5 = () => {
  const customFontSize = {};
  return (
    <div className="py-16 border-t-2 border-gray-600 w-full px-6 md:px-24">
      <div className="flex flex-col lg:flex-row justify-between  mx-8  text-center text-white lg:mt-[6%] mt-[6%]  pb-[2%]  ">
        <div className="w-full  lg:w-[42%] text-left">
          <h4 className="lg:text-sm md:text-sm text-xs mb-3">
            Client’s Reviews
          </h4>
          <h1 className="lg:text-4xl md:text- text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug">
            Recommended{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              by 97%
            </span>{" "}
            of our customers
          </h1>
          <p className="md:text-xs  mb-12 font-light lg:text-base  sm:text-xxs">
            Discover what our clients have to say about their experience with
            Robx.ai. Our commitment to excellence in AI solutions has earned us
            their trust.
          </p>
          <div className="space-y-4 mb-8 flex flex-wrap lg:flex-nowrap">
            <div className="flex items-center space-x-2 ">
              <img
                src="/images/Icon1.png"
                alt="Icon1"
                className="lg:h-8 md:h-6 h-4 lg:w-7 md:w-5 w-3"
              />
              <div className="flex flex-col items-start">
                <p className="text-lg font-bold">
                  87{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    +
                  </span>
                </p>
                <p className="text-xs font-thin">Trusted Partner</p>
              </div>
              <div className="border-l-2 border-gray-400 h-14 pl-4  "></div>
            </div>
            <div className="flex items-center space-x-2 lg:pb-2">
              <img
                src="/images/icon2.png"
                alt="Icon2"
                className="lg:h-8 md:h-6 h-4 lg:w-7 md:w-5 w-3"
              />
              <div className="flex flex-col items-start ">
                <p className="text-lg font-bold">
                  44{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    +
                  </span>
                </p>
                <p className="text-xs font-thin">Worldwide User</p>
              </div>
              <div className="border-l-2 border-gray-400 h-14 pl-4  mb-2"></div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/images/Icon3.png"
                alt="Icon3"
                className="lg:h-8 md:h-6 h-4 lg:w-7 md:w-5 w-37"
              />
              <div className="flex flex-col items-start p-1">
                <p className="text-lg font-bold">
                  5{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ">
                    +
                  </span>
                </p>
                <p className=" text-xs font-thin">Years of Experience</p>
              </div>
            </div>
          </div>
          {/* <button className="bg-[#7828d6]  px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center mb-4 sm:mb-0 button-hover  md:text-normal text-sm font-semibold">
            Learn More
          </button> */}
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-8 lg:mt-0">
          <div className="bg-[#1e1736] border border-gray-400 p-4 flex space-x-4 lg:w-[82%]   lg:ml-0">
            <div className="flex-shrink-0">
              <img
                src="/images/testi1.png"
                alt="Testimonial 1"
                className="h-12 w-12"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-2">
                <img src="/images/5star.png" alt="5 Star Rating" />
              </div>
              <p className="text-xs font-light">
                Robx.ai transformed our operations with their AI solutions,
                delivering beyond our expectations.
              </p>
            </div>
          </div>
          <div className="bg-[#1e1736] border border-gray-400 p-4 flex space-x-4 lg:w-[82%]  lg:ml-20  ">
            <div className="flex-shrink-0">
              <img
                src="/images/testi2.png"
                alt="Testimonial 2"
                className="h-12 w-12"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-2">
                <img src="/images/5star.png" alt="5 Star Rating" />
              </div>
              <p className="text-xs font-light">
                Their team expertise and dedication ensured a seamless
                integration of AI into our business processes.
              </p>
            </div>
          </div>
          <div className="bg-[#1e1736] border border-gray-400 p-4 flex space-x-4 lg:w-[82%] lg:ml-0">
            <div className="flex-shrink-0">
              <img
                src="/images/testi3.png"
                alt="Testimonial 3"
                className="h-12 w-12"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-2">
                <img src="/images/5star.png" alt="5 Star Rating" />
              </div>
              <p className="text-xs font-light">
                We rely on Robx.ai for their innovation and reliable support,
                crucial to our continued success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
