import React from "react";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Section6 from "../../components/Section6";
import Section7 from "../../components/Section7";
import Section9 from "../../components/Section9";
import Section10 from "../../components/Section10";
import FAQs from "../../components/FAQs";
import { homeFAQs } from "../../constant/data";
const HomePage = () => {
  return (
    <>
      <div
        className="mt-[1%] mx-auto h-screen flex items-center justify-center"
        style={{
          //   backgroundImage: `url(${bgImage})`,
          backgroundImage: `url('/home/bg1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

      {/* <Section8 /> */}
      <FAQs faqs={homeFAQs} />
      <Section9 />
      <Section10 />
    </>
  );
};

export default HomePage;
