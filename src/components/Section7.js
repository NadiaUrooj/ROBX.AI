import React from "react";
import "../App.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { ourTeam } from "../constant/data";

const Section7 = () => {
  return (
    <div className="  border-t-2 border-gray-600  border-b">
      <div className="text-center text-white my-24 w-full md:px-28 px-6">
        <h4 className="text-sm md:text-base mb-3 ">Our Team</h4>
        <h1 className="md:text-4xl text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 lg:leading-relaxed md:leading-relaxed leading-snug">
          Meet With Our Creative Team
        </h1>
        <p className="md:text-sm  mb-12 font-light text-xs lg:w-[45%] w-[70%] mx-auto leading-snug tracking-wide ">
          Our expert team is made up of creatives with technical know-how
          strategies who thinks outside the box & developers who push
          innovation.
        </p>
        {/* Cards */}{" "}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 lg:mt-6">
          {ourTeam.map((member) => {
            return (
              <>
                <div class="bg-[#211b36] lg:flex lg:items-center lg:justify-center border px-3 py-3 rounded-md transition-all ease-in-out duration-500 hover:scale-105 hover:cursor-pointer">
                  <div class="flex-1 min-w-0  ">
                    <div class="flex">
                      <div class="flex justify-center items-center">
                        <span class="flex  items-center justify-center h-12 w-12 rounded-full ">
                          <img
                            class="rounded-full"
                            src={member.imageUrl}
                            alt={member.name}
                          />
                        </span>
                      </div>

                      <div class="ml-4">
                        <h2 class="text-lg font-popin text-start font-semibold text-white">
                          {member.name}
                        </h2>
                        <div class="mt-2 flex leading-5 text-white text-sm font-popin">
                          {member.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section7;
