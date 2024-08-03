import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import faqImage from "../components/images/FAQs.png";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-lg p-3 mb-4"
      style={{ border: "1px solid #f569dd" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold focus:outline-none  "
      >
        <span>{question}</span>
        <IoIosArrowDropdownCircle
          size={24}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <p className="text-sm mt-2">{answer}</p>}
    </div>
  );
};

const Section7 = () => {
  return (
    <div className="mx-auto px-[12%] lg:px-[%] ">
      <div className="flex flex-col lg:flex-row justify-between text-white mt-[10%] lg:space-x-10">
        <div className="w-full lg:w-[60%] text-left mb-8 lg:mb-0">
          <h4 className="text-base mb-4">FAQs</h4>
          <h1 className="text-3xl font-semibold mb-4 capitalize">
            Frequently Asked Questions
          </h1>
          <div className="mt-8">
            <FAQItem
              question="What happens after I Sign Up?"
              answer="After you sign up, you'll receive a welcome email with instructions to set up your account and start using our services immediately."
            />
            <FAQItem
              question="What happens after I Sign Up?"
              answer="After you sign up, you'll receive a welcome email with instructions to set up your account and start using our services immediately."
            />
            <FAQItem
              question="What happens after I Sign Up?"
              answer="After you sign up, you'll receive a welcome email with instructions to set up your account and start using our services immediately."
            />
            <FAQItem
              question="What happens after I Sign Up?"
              answer="After you sign up, you'll receive a welcome email with instructions to set up your account and start using our services immediately."
            />
            <FAQItem
              question="What happens after I Sign Up?"
              answer="After you sign up, you'll receive a welcome email with instructions to set up your account and start using our services immediately."
            />
          </div>
        </div>

        <div className="w-full lg:w-[38%] flex justify-center items-center mt-8 lg:mt-0 mb-[10%] pt-[5%]">
          <img src={faqImage} alt="FAQs" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
