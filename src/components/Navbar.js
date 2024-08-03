import React, { useState } from "react";
import Logo from "../components/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import "../App.css";
const Navbar = () => {
  const gradientTextStyle = {
    background: "linear-gradient(to right, #c33bfe, #a443e3)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="fixed top-0 left-0 w-full z-10 h-18 bg-black bg-opacity-10 text-white font-normal border-b-2 border-gray-600 uppercase backdrop-blur-sm">
        <div className="container mx-auto px-[8%] py-[1%] flex justify-between items-center">
          <div className="flex items-center pr-5 pt-1">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          <div className="hidden lg:flex space-x-40 items-center">
            <ul className="flex space-x-6 items-center">
              <li className="hover-custom" style={gradientTextStyle}>
                Home
              </li>
              <li className="hover-custom">About Us</li>
              <li className="hover-custom">Services</li>
              <li className="hover-custom">Blogs</li>
              <li className="hover-custom">Contact</li>
            </ul>

            <div className="flex items-center space-x-1 relative ml-20">
              <HiOutlineSearch className="w-5 h-5 text-white" />
              <div className="h-[30px] w-[1px] bg-gray-300 mx-2"></div>
              <button className="relative bg-[#7828d6] text-white px-6 py-2 rounded-full button-hover font-semibold">
                Apply Now
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black">
            <ul className="space-y-2 p-4 text-center">
              <li className="hover-custom" style={gradientTextStyle}>
                Home
              </li>
              <li className="hover-custom">About Us</li>
              <li className="hover-custom">Services</li>
              <li className="hover-custom">Blogs</li>
              <li className="hover-custom">Contact</li>

              <div className="flex flex-col items-center space-y-2 mt-4">
                <button className="relative bg-[#542294] text-white px-6 py-1 rounded-full uppercase">
                  Apply Now
                </button>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
