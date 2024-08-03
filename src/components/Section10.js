import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#211b36] text-gray-400 py-4 lg:pb-0 px-[10%]">
      <div className="container flex flex-col items-center lg:flex-row lg:justify-between">
        <p className="text-sm mb-4 lg:mb-0  text-center lg:text-left">
          Copyright{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #d18cfe, #f569dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ROBX
          </span>{" "}
          &copy; 2024. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <FaFacebookF
              style={{ border: "1px solid #1b92ff" }}
              className="rounded-full p-2 w-8 h-8"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <FaTwitter
              style={{ border: "1px solid #1b92ff" }}
              className="rounded-full p-2 w-8 h-8"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <FaInstagram
              style={{ border: "1px solid #1b92ff" }}
              className="rounded-full p-2 w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <FaLinkedinIn
              style={{ border: "1px solid #1b92ff" }}
              className="rounded-full p-2 w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
