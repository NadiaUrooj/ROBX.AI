// import React from "react";
// import "../App.css";
// const Section1 = () => {
//   return (
//     <div className="container mx-auto px-[5%] ">
//       <div className="mt-4  text-white text-start lg:w-1/2 md:w-[70%] w-[80%] ">
//         <h1 className="text-4xl sm:text-5xl md:text-5xl  font-semibold mb-4 leading-tight lg:mt-[10%] md:mt-[-30%] lg:leading-snug md:leading-relaxed font-jamjuree ">
//           Revolutionizing <br /> Your Business With <br />
//           <span
//             style={{
//               background: "linear-gradient(90deg, #d18cfe, #f569dd)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             AI Solutions
//           </span>
//         </h1>
//         <p className="text-sm md:text-sm  md:leading-loose lg:leading-normal mb-8 tracking-wide ">
//           ROBX.AI revolutionizes businesses with cutting-edge AI solutions. We
//           streamline operations, enhance decision-making, and improve customer
//           experiences. Partner with us to unlock the full potential of AI and
//           shape a more innovative future for your business.
//         </p>
//         <div className="flex flex-col sm:flex-row md:mt-20 lg:mt-10 items-center">
//           <button className="bg-[#7828d6]  px-6 py-2 rounded-full min-w-[150px] min-h-[40px] flex items-center text-white font-semibold text-base justify-center font-popin mb-4 sm:mb-0 button-hover ">
//             Explore More
//           </button>
//           <p className="text-xs sm:text-sm mx-0 sm:mx-6 flex-shrink-0 text-center sm:text-left pl-10 ">
//             <b className="text-2xl sm:text-4xl">300+</b> <br />
//             Trusted Companies
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section1;

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <div className="w-full mx-auto px-[7%]  lg:px-[10%]">
      <div className=" md:mt-4  text-white text-start lg:w-1/2 md:w-[60%] w-[100%] ">
        <h1 className="md:text-4xl lg:text-5xl text-2xl  font-semibold lg:mb-3 mb-6  lg:mt-[10%] md:mt-[10%] mt-[20%]  lg:leading-snug md:leading-relaxed font-jamjuree ">
          Revolutionizing <br /> Your Business With <br />
          <span
            style={{
              background: "linear-gradient(90deg, #d18cfe, #f569dd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Solutions
          </span>
        </h1>
        <p className="text-xs md:text-sm tracking-wide  md:leading-loose lg:leading-normal font-light mb-6 ">
          ROBX.AI revolutionizes businesses with cutting-edge AI solutions. We
          streamline operations, enhance decision-making, and improve customer
          experiences. Partner with us to unlock the full potential of AI and
          shape a more innovative future for your business.
        </p>
        <div className="flex flex-col sm:flex-row md:mt-10 lg:mt-10 items-center">
          <button className="bg-[#7828d6]  px-8 py-2 rounded-full min-w-[12px] min-h-[40px] flex items-center text-white justify-center mb-4 sm:mb-0 button-hover  md:text-normal text-sm font-semibold font-popin">
            <Link to="/contact"> Get Quote </Link>
          </button>
          <p className="text-xxs sm:text-sm mx-0 sm:mx-6 flex-shrink-0 text-center sm:text-left pl-6  ">
            <b className=" sm:text-4xl ">300+</b> <br />
            <span className="font-light">Trusted Companies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
