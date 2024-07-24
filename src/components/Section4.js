import React from "react";
import serviceImage1 from "../components/images/Service1.png";
import serviceImage2 from "../components/images/Service2.png";
import serviceImage3 from "../components/images/Service3.png";
import serviceImage4 from "../components/images/Service4.png";
import whyChooseImage from "../components/images/Whychoose.webp";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Section4 = () => {
  return (
    <div className="py-16 bg-[#211b36] border-t-2 border-gray-600">
      <div className="text-center mb-12 text-white">
        <h4 className="text-normal mb-3">Our Services</h4>
        <h2 className="text-4xl font-semibold mb-6">
          Explore Our Best AI Services
        </h2>
        <p className="text-sm mb-8">
          Each project highlights our expertise and the transformative impact{" "}
          <br />
          of our services
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:space-y-0 space-y-20 gap-2 mb-12 text-white ">
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
          <img
            src={serviceImage1}
            alt="Service 1"
            className="w-full h-96 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
          <p className="text-sm p-1">
            We specialize in creating bespoke AI solutions tailored to your
            specific business.
          </p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
          <img
            src={serviceImage2}
            alt="Service 2"
            className="w-full h-96 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">ML Solutions</h3>
          <p className="text-sm p-1">
            We specialize in creating bespoke AI solutions tailored to your
            specific business.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
          <img
            src={serviceImage3}
            alt="Service 3"
            className="w-full h-96 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
          <p className="text-sm p-1">
            We specialize in creating bespoke AI solutions tailored to your
            specific business.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 text-center">
          <img
            src={serviceImage4}
            alt="Service 4"
            className="w-full h-96 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">AI Services</h3>
          <p className="text-sm p-1">
            We specialize in creating bespoke AI solutions tailored to your
            specific business.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center mb-12 text-white mx-[10%] mt-[12%] md:space-x-10">
        <div className="w-full lg:w-1/2  mb-8 lg:mb-0">
          <img
            src={whyChooseImage}
            alt="Why Choose Us"
            className="w-96 rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2   text-left lg:text-left">
          <h4 className="text-normal mb-3">Why Choose Us</h4>
          <h2 className="text-3xl font-semibold mb-4">
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
          <p className="text-sm mb-8">
            Choose Robx.ai for leading-edge AI solutions and dedicated support.
            We specialize in customized AI development, ensuring transformative
            results tailored to your business needs and supported 24/7.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#7828d6] text-2xl mr-4" />
              <div>
                <h5 className="font-semibold mb-1">
                  Customized AI Development:
                </h5>
                <p className="text-sm">
                  Tailored solutions to meet your specific business challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#7828d6] text-2xl mr-4" />
              <div>
                <h5 className="font-semibold mb-1">Expert Team:</h5>
                <p className="text-sm">
                  Leaders in AI technology with a track record of innovation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosArrowDroprightCircle className="text-[#7828d6] text-2xl mr-4" />
              <div>
                <h5 className="font-semibold mb-1">24/7 Support:</h5>
                <p className="text-sm">
                  Dedicated assistance ensuring seamless integration and ongoing
                  success.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-10 bg-[#7828d6] text-white px-8 py-2 rounded-full text-center font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
