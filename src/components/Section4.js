import React from "react";
import "../App.css";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div className="  border-t-2 border-gray-600  bg-[#211b36]  ">
      <div className="text-center text-white mt-[5%] px-[3%] md:px-[10%] ">
        <h4 className="text-sm md:text-base mb-3 font-popin">Our Services</h4>
        <h2 className="md:text-4xl text-2xl font-semibold md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug font-popin">
          Explore Our Best AI Services
        </h2>
        <p className="text-sm md:text-base  font-popin mb-12 font-light md:w-[43%] w-[90%] mx-auto">
          Each project highlights our expertise and the transformative impact of
          our services
        </p>
      </div>
      <div className="flex flex-wrap justify-center  mb-4 text-white ">
        <div className="md:w-[26%] w-[90%] lg:w-[27%]  text-center">
          <img
            src="/images/Service1.png"
            alt="Service 1"
            className="w-full h-auto object-cover mb-2"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Solution Development
          </h3>
        </div>
        <div className="md:w-[26%] w-[90%] lg:w-[27%]  text-center">
          <img
            src="/images/Service2.png"
            alt="Service 2"
            className="w-full h-auto object-cover mb-2 "
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            Vision Solutions
          </h3>
        </div>
        <div className="md:w-[26%] w-[90%] lg:w-[27%]  text-center">
          <img
            src="/images/Service3.png"
            alt="Service 3"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Powered Analytics
          </h3>
        </div>
        <div className="md:w-[26%] w-[90%] lg:w-[27%]  text-center">
          <img
            src="/images/Service4.png"
            alt="Service 4"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Chat Bots
          </h3>
        </div>{" "}
        <div className="md:w-[26%] w-[90%] lg:w-[27%]  text-center">
          <img
            src="/images/Service5.png"
            alt="Service 5"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Integration Development
          </h3>
        </div>{" "}
        <div className="md:w-[26%] w-[90%] lg:w-[27%]  text-center">
          <img
            src="/images/Service6.png"
            alt="Service 6"
            className="w-full h-auto object-cover mb-2 rounded-lg"
          />
          <h3 className="lg:text-xl md:text-sm text-xs font-semibold mb-4">
            AI Model Tuning
          </h3>
        </div>
      </div>{" "}
      <div className="flex justify-center ">
        {" "}
        <button className="bg-[#7828d6] px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center mb-10 button-hover  md:text-normal text-sm font-semibold ">
          <Link to="/services"> Explore More </Link>
        </button>
      </div>
      {/* whychooseus */}
      <div className="flex flex-col lg:flex-row md:flex-row  items-center text-white px-[15%] lg:px-[9%]  mt-[6%] md:space-x-10 lg:space-x-28">
        <div className="w-[80%] md:w-[42%] md:pl-3 lg:w-[40%]    ">
          <img
            src="/images/Whychoose.webp"
            alt="Why Choose Us"
            className="w-100 rounded-lg transform scale-x-[-1] lg:pb-20 md:pb-20 pb-10"
          />
        </div>

        <div className=" md:w-[45%]  lg:w-1/2   text-left lg:text-left">
          <h4 className="md:text-base text-sm mb-3 ">Why Choose Us</h4>
          <h2 className="md:text-3xl md:text- text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug ">
            Choose ROBX For Leading Edge
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #d18cfe, #f569dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Solutions
            </span>
          </h2>
          <p className=" mb-4 font-light text-sm md:text-base">
            Choose Robx.ai for leading-edge AI solutions and dedicated support.
            We specialize in customized AI development, ensuring transformative
            results tailored to your business needs and supported 24/7.
          </p>

          <div className="flex flex-col gap-1 mb-10">
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#af40ed]  mt-2 mr-2 " />
              <div>
                <h5 className=" text-sm font-normal mb-1 ">
                  Customized AI Development:
                </h5>
                <p className="text-xs  ">
                  Tailored solutions to meet your specific business challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#af40ed]   mr-2 mt-2 " />
              <div>
                <h5 className=" text-sm font-normal  mb-1 ">Expert Team:</h5>
                <p className="text-xs  ">
                  Leaders in AI technology with a track record of innovation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#af40ed] mr-2 mt-2 " />
              <div>
                <h5 className=" text-sm font-normal  mb-1 ">24/7 Support:</h5>
                <p className="text-xs  ">
                  Dedicated assistance ensuring seamless integration and ongoing
                  success.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#7828d6]  rounded-full lg:px-8 px-6 py-2 flex items-center text-white justify-center mb-4 sm:mb-0 md:text-normal  text-sm  font-semibold button-hover">
            <Link to="/contact"> Contact Us </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
