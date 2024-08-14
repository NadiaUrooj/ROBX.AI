import React from "react";
import contactImage from "../components/images/Contact.png";
import Logo from "../components/images/logo.png";
import { Link } from "react-router-dom";

const Section10 = () => {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      duration: 1500,
      behavior: "smooth",
    });
  };
  return (
    <div className=" mx-auto px-6 md:px-32 border-y-2 border-gray-600 w-full">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-[12%] mt-[10%]">
        <div className="lg:w-[50%] mt-[-18%] mb-8 lg:mb-0 relative">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="lg:w-[35%] text-white text-left lg:mt-[-8%] flex flex-col items-center md:items-start ">
          <h1 className="text-2xl font-semibold mb-4 font-popin">
            Revolutionized the Potential <br /> of AI and Robotics with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #d18cfe, #f569dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ROBX
            </span>
          </h1>
          <p className="text-sm mb-4 text-gray-400">
            We make good AI engineers. They, in turn, make good AI solutions.
          </p>
          <button className="bg-[#7828d6] text-white px-6 py-2 w-fit rounded-full md:text-normal  text-sm  font-semibold">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>

      <div className="container mx-auto pt-6  flex flex-col lg:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="text-white mb-4 lg:mb-0">
          <ul className="flex flex-wrap justify-center lg:justify-start space-x-6 lg:space-x-6 items-center">
            <li className="hover-custom py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover-custom py-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover-custom py-2">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover-custom py-2">
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="hover-custom py-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex items-center mb-4 lg:mb-0" onClick={ScrollTop}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="text-white mb-4 lg:mb-0">
          <ul className="flex flex-wrap justify-center lg:justify-end space-x-6 lg:space-x-6 items-center">
            <li className="hover-custom py-2">Privacy & Policy</li>
            <li className="hover-custom py-2">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section10;
