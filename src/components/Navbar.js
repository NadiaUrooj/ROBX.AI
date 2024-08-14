import React, { useState } from "react";
import Logo from "../components/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const gradientText = {
    background: "linear-gradient(to right, #c33bfe, #a443e3)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="container">
      <nav className="fixed top-0 left-0 w-full z-10 h-18 bg-black bg-opacity-10 text-white font-normal border-b-2 border-gray-600 uppercase backdrop-blur-sm">
        <div className="container mx-auto px-[2%] py-[1%] flex justify-between items-center">
          <div className="flex items-center pr-5 pt-1">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-40 items-center">
            <ul className="flex space-x-6 items-center">
              <li
                className="hover-custom"
                style={path === "/" ? gradientText : {}}
              >
                <Link to="/"> Home</Link>
              </li>

              <li
                className="hover-custom"
                style={path === "/about" ? gradientText : {}}
              >
                <Link to="/about"> About Us</Link>
              </li>
              <li
                className="hover-custom"
                style={path === "/services" ? gradientText : {}}
              >
                <Link to="/services"> Services</Link>
              </li>

              <li
                className="hover-custom"
                style={path === "/blog" ? gradientText : {}}
              >
                <Link to="/blog"> Blogs</Link>
              </li>
              <li
                className="hover-custom"
                style={path === "/contact" ? gradientText : {}}
              >
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>

            <div className="flex items-center space-x-1 relative ml-20">
              <HiOutlineSearch className="w-5 h-5 text-white" />
              <div className="h-[30px] w-[1px] bg-gray-300 mx-2"></div>
              <a
                href="https://forms.gle/FacpYmAq5JheVNux6"
                target="_blank"
                rel="noreferrer"
              >
                <button className="relative bg-[#7828d6] text-white px-6 py-2 rounded-full button-hover font-semibold">
                  Apply Now
                </button>
              </a>
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
              <li
                className="hover-custom"
                style={path === "/" ? gradientText : {}}
              >
                <Link to="/" onClick={closeMenu}>
                  {" "}
                  Home
                </Link>
              </li>

              <li
                className="hover-custom"
                style={path === "/about" ? gradientText : {}}
              >
                <Link to="/about" onClick={closeMenu}>
                  {" "}
                  About Us
                </Link>
              </li>
              <li
                className="hover-custom"
                style={path === "/services" ? gradientText : {}}
              >
                <Link to="/services" onClick={closeMenu}>
                  {" "}
                  Services
                </Link>
              </li>

              <li
                className="hover-custom"
                style={path === "/blog" ? gradientText : {}}
              >
                <Link to="/blog" onClick={closeMenu}>
                  {" "}
                  Blogs
                </Link>
              </li>
              <li
                className="hover-custom"
                style={path === "/contact" ? gradientText : {}}
              >
                <Link to="/contact" onClick={closeMenu}>
                  {" "}
                  Contact
                </Link>
              </li>

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
