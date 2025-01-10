import React, { RefObject, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
import gradex_logo from "../assets/gradex/gradex.svg";
import gradex1 from "../assets/gradex/gradex1.png";
import gradex2 from "../assets/gradex/gradex2.png";
import gradex3 from "../assets/gradex/gradex3.png";
import bangmod_logo from "../assets/bangmod/bangmod.svg";
import bangmod1 from "../assets/bangmod/bangmod1.png";
import bangmod2 from "../assets/bangmod/bangmod2.png";
import bangmod3 from "../assets/bangmod/bangmod3.png";
import phile_logo from "../assets/phile/phile.svg";
import phile1 from "../assets/phile/phile1.png";
import phile2 from "../assets/phile/phile2.png";
import phile3 from "../assets/phile/phile3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project() {
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  const [checks, setChecks] = useState([false, false, false]);

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function Nav() {
    return (
      <Slider {...sliderSettings} className="w-full ">
        <div className="bg-red-400 h-[800px] ">
          <span className="text-black font-bold"></span>
        </div>
        <div className="bg-green-400 h-[800px]">
          <span className="text-white font-bold"></span>
        </div>
        <div className="bg-yellow-400 h-[800px] ">
          <span className="text-black font-bold"></span>
        </div>
      </Slider>
    );
  }

  const img_logo = [
    { bg: "bg-[#210D3E]", img: phile_logo },
    { bg: "bg-[#fefaf2]", img: gradex_logo },
    { bg: "bg-[#0e2a3f66]", img: bangmod_logo },
  ].map((section, index) => (
    <motion.img
      key={index}
      src={section.img}
      alt=""
      initial={{ y: 0 }}
      animate={{ y: checks[index] ? -30 : 0 }}
      className={`${section.bg} h-full w-full`}
    />
  ));

  return (
    <div className="h-full w-full grid grid-rows-[1fr_0.25fr]">
      <div className="flex-1 w-full flex justify-center items-center">
        <div className="h-full w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {[
            { bgColor: "bg-red-300", 
              img1: phile1, 
              img2: phile2, 
              img3: phile3 ,
              Name: "Phile"
            },
            {
              bgColor: "bg-green-300",
              img1: gradex1,
              img2: gradex2,
              img3: gradex3,
              Name: "Gradex"
            },
            {
              bgColor: "bg-yellow-300",
              img1: bangmod1,
              img2: bangmod2,
              img3: bangmod3,
              Name: "Bangmod"
            },
          ].map((section, index) => (
            <Section
              key={index}
              sectionRef={sectionRefs[index]}
              bgColor={section.bgColor}
              sliderSettings={sliderSettings}
              img1={section.img1}
              img2={section.img2}
              img3={section.img3}
              Name={section.Name}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 w-full items-center flex justify-center">
        <div className="flex gap-2 h-full w-1/2 justify-center items-center">
          {img_logo.map((logo, i) => (
            <motion.div
              className="h-4/5 w-10/12"
              onMouseEnter={() => {
                setChecks((prev) => {
                  const updatedChecks = [...prev]; // Clone the previous state
                  updatedChecks[i] = true; // Set the corresponding index to true
                  return updatedChecks; // Return the updated state
                });
              }}
              onMouseLeave={() => {
                setChecks((prev) => {
                  const updatedChecks = [...prev]; // Clone the previous state
                  updatedChecks[i] = false; // Set the corresponding index to false
                  return updatedChecks; // Return the updated state
                });
              }}
              onClick={() => scrollToSection(sectionRefs[i])}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  sectionRef: RefObject<HTMLElement>;
  bgColor: string;
  sliderSettings: Settings;
  img1: string;
  img2: string;
  img3: string;
  Name: string;
}

const Section: React.FC<SectionProps> = ({
  sectionRef,
  bgColor,
  sliderSettings,
  img1,
  img2,
  img3,
  Name
}) => {
  return (
    <section
      ref={sectionRef}
      className="flex-shrink-0 w-full h-full snap-center flex"
    >
      <div className="grid grid-rows-[0.25fr_1fr] w-full h-full">
        <div></div>
        <div className="w-full h-full">
          <div className="grid grid-cols-[1fr_1fr] w-full h-full">
            <div className={`${bgColor.replace("300", "200")} w-full h-full`}>
              <div className="h-full w-full grid grid-cols-[0.2fr_1fr]">
                <div className="w-full h-full"></div>
                <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr] items-center w-full h-full">
                  <div></div>
                  <div>
                    <div className="w-full h-full flex items-center">
                      <p className="text-sm xl:text-5xl 2xl:text-4xl">
                        {Name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="w-full h-20 flex items-center">
                      <p className="overflow-scroll h-24 no-scrollbar">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore aspernatur minima placeat asperiores omnis
                        incidunt a doloremque aut voluptate? Dolores earum
                        accusantium eos laborum est fuga, iusto non inventore
                        error. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Necessitatibus dicta, ut voluptatem
                        eligendi adipisci debitis iusto voluptate eos velit,
                        expedita obcaecati enim reprehenderit ipsam, illum esse
                        aliquid numquam! Veniam, nihil?
                      </p>
                    </div>
                  </div>
                  <div>
                    <ul className=" w-full flex justify-start">
                      <li className="text-sm xl:text-5xl 2xl:text-3xl">
                        Tools
                      </li>
                    </ul>
                    <ul className="w-full flex justify-start gap-4">
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>HTML</li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              className={`${bgColor.replace(
                "300",
                "800"
              )} flex justify-center items-center overflow-hidden w-full h-full`}
            >
              <Slider {...sliderSettings} className="w-full h-1/2">
                <div className="bg-red-400">
                  <img src={img1} alt="" className="h-full w-full" />
                </div>
                <div className="bg-green-400 ">
                  <img src={img2} alt="" className="h-full w-full" />
                </div>
                <div className="bg-yellow-400">
                  <img src={img3} alt="" className="h-full w-full" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// const sliderSettings = {
//   dots: true, // Enable dots
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: false,
//   autoplaySpeed: 2000,
//   customPaging: (i:number) => (
//     <div className="custom-dot">
//       <div className={`w-6 h-6 rounded-full bg-${i % 2 === 0 ? 'red' : 'blue'}-500`} />
//     </div>
//   ),
// };

// function Nav() {
//   return (

//     <div className="h-full w-full overflow-hidden "> {/* Apply overflow-hidden here */}
//     <Slider {...sliderSettings} className="w-full ">
//       <div className="bg-red-400 h-32  ">
//         <span className="text-white font-bold"></span>
//       </div>
//       <div className="bg-green-400 h-32 ">
//         <span className="text-white font-bold"></span>
//       </div>
//       <div className="bg-yellow-400 h-32 ">
//         <span className="text-black font-bold"></span>
//       </div>
//       <div className="bg-yellow-400 h-32 ">
//         <span className="text-black font-bold"></span>
//       </div>
//     </Slider>
//   </div>

//   );
// }
