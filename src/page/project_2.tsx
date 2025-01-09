import React, { RefObject, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project() {
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

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

  return (
    <div className="h-full w-full grid grid-rows-[1fr_0.25fr]">
      <div className="flex-1 w-full flex justify-center items-center">
        <div className="h-full w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
          <Section
            sectionRef={section1Ref}
            bgColor="bg-red-300"
            sliderSettings={sliderSettings}
          />
          <Section
            sectionRef={section2Ref}
            bgColor="bg-green-300"
            sliderSettings={sliderSettings}
          />
          <Section
            sectionRef={section3Ref}
            bgColor="bg-yellow-300"
            sliderSettings={sliderSettings}
          />
        </div>
      </div>

      <div className="flex-1 w-full items-center flex justify-center">
        <div className="flex gap-2 h-full w-1/2 justify-center items-center">
          <motion.div
            className="h-4/5 w-10/12"
            onMouseEnter={() => setCheck1(true)}
            onMouseLeave={() => setCheck1(false)}
            onClick={() => scrollToSection(section1Ref)}
          >
            <motion.section
              initial={{ y: 0 }}
              animate={{ y: check1 ? -30 : 0 }}
              className="bg-red-500 h-full w-full"
            />
          </motion.div>

          <motion.div
            className="h-4/5 w-10/12"
            onMouseEnter={() => setCheck2(true)}
            onMouseLeave={() => setCheck2(false)}
            onClick={() => scrollToSection(section2Ref)}
          >
            <motion.section
              initial={{ y: 0 }}
              animate={{ y: check2 ? -30 : 0 }}
              className="bg-green-500 h-full w-full"
            />
          </motion.div>

          <motion.div
            className="h-4/5 w-10/12"
            onMouseEnter={() => setCheck3(true)}
            onMouseLeave={() => setCheck3(false)}
            onClick={() => scrollToSection(section3Ref)}
          >
            <motion.section
              initial={{ y: 0 }}
              animate={{ y: check3 ? -30 : 0 }}
              className="bg-yellow-500 h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  sectionRef: RefObject<HTMLElement>;
  bgColor: string;
  sliderSettings: Settings;
}

const Section: React.FC<SectionProps> = ({
  sectionRef,
  bgColor,
  sliderSettings,
}) => {
  return (
    <section
      ref={sectionRef}
      className="flex-shrink-0 w-full h-full snap-center flex"
    >
      <div className="grid grid-rows-[0.25fr_1fr] w-full">
        <div></div>
        <div className={`w-full ${bgColor}`}>
          <div className="grid grid-cols-[1fr_1fr] w-full h-full">
            <div className={`${bgColor.replace("300", "200")}`}>
              <div className="h-full w-full grid grid-cols-[0.2fr_1fr]">
                <div>
                  
                </div>
              <div className="grid grid-rows-[1fr_1fr_1fr] w-full h-full gap-1">
  <div className="flex justify-center items-center">
    <div className="w-full h-full flex items-center">
    <p className="text-sm xl:text-5xl 2xl:text-4xl">
      Name of Project
    </p>
    </div>
   
  </div>
  <div className="w-full flex justify-center items-center">
    <div className="w-full h-full flex items-center">
    <p className="overflow-scroll w-full h-40 p-4 border border-gray-300 rounded">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur minima placeat asperiores omnis incidunt a doloremque aut voluptate? Dolores earum accusantium eos laborum est fuga, iusto non inventore error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta, ut voluptatem eligendi adipisci debitis iusto voluptate eos velit, expedita obcaecati enim reprehenderit ipsam, illum esse aliquid numquam! Veniam, nihil?
    </p>
    </div>
  
  </div>
  <div className=" w-full flex flex-col justify-center items-center">
    <ul className=" w-full flex justify-start">
    <li className="text-sm xl:text-5xl 2xl:text-3xl">Tools</li>
    </ul>
    <ul className="w-full flex justify-start ">
      <li>JavaScript</li>
      <li>React</li>
      <li>HTML</li>
    </ul>
  </div>
</div>

              </div>
            </div>
            <div
              className={`${bgColor.replace(
                "300",
                "800"
              )} flex justify-center items-center overflow-hidden`}
            >
              <Slider {...sliderSettings} className="h-[400px] w-[700px]">
                <div className="bg-red-400 h-[400px] w-full">
                  <span className="text-black font-bold"></span>
                </div>
                <div className="bg-green-400 h-[400px] w-full">
                  <span className="text-white font-bold"></span>
                </div>
                <div className="bg-yellow-400 h-[400px] w-full">
                  <span className="text-black font-bold"></span>
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
