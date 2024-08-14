import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="rounded-xl p-3 mb-4"
      key={faq.id}
      style={{ border: "1px solid #f569dd" }}
    >
      <button
        // onClick={() => setIsOpen(!isOpen)}
        onClick={() => toggleAccordion(faq.id)}
        className="w-full flex justify-between items-center text-left font-semibold focus:outline-none"
      >
        <span>{faq.question}</span>
        <IoIosArrowDropdownCircle
          size={28}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <>
          <hr className="my-4 border-t-2" style={{ borderColor: "#7828d6" }} />
          <p className="text-sm mt-4 font-light !text-white font-popin">
            {faq.answer}
          </p>
        </>
      )}
    </div>
  );
};

const FAQs = ({ faqs }) => {
  return (
    <div className="mx-auto px-6 md:px-32 py-10 md:py-20">
      <div className="flex flex-col lg:flex-row text-white gap-16">
        <div className="w-full lg:w-[68%] text-left mb-8 lg:mb-0">
          <h4 className="text-base md:text-lg mb-3 font-popin">FAQs</h4>
          <h1 className="md:text-4xl text-2xl font-semibold lg:mb-8 md:mb-8 mb-3 font-jamjuree">
            Frequently Asked Questions
          </h1>
          <div className="mt-8 text-sm font-popin">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>

        <div className="hidden w-[40%] h-full mx-auto lg:flex justify-center items-center mt-10">
          <img src="/images/FAQs.png" alt="FAQs" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
