import Slider from "react-slick";
import { div } from "framer-motion/client";
import { delay, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
function Sec1() {
  return <div className="bg-red-500 w-full">aaaa</div>;
}

function Sec2() {
  return <div className="bg-green-500 w-full">aaaa</div>;
}

function Sec3() {
  return <div className="bg-yellow-500 w-full">aaaa</div>;
}

const sliderSettings = {
  dots: false, // Enable dots
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
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

export default function Project() {
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  return (
    <div className="h-full w-full grid grid-rows-[1fr_0.25fr] ">
      {/* grid-rows-[1fr] items-center */}
      {/* <div className="h-full w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
        <section className="flex-shrink-0 w-full h-full snap-center bg-[#131313] flex"></section>

        <section className="flex-shrink-0 w-full h-full snap-center bg-red-500 flex "></section>

        <section className="flex-shrink-0 w-full h-full snap-center bg-[#131313] flex"></section>
      </div> */}

      <div className="flex-1 w-full flex justify-center items-center">
        {/* <Nav /> */}
        <div className="h-full w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
          <section
            ref={section1Ref}
            className="flex-shrink-0 w-full h-full snap-center  flex"
          >
            <div className="grid grid-rows-[0.25fr_1fr] w-full">
              <div className=""></div>
              <div className=" bg-[#131313] w-full ">
                <div className="grid grid-cols-[1fr_2fr] w-full h-full">
                  <div className="bg-[#131313] relative">
                  <div className="bg-red-300 blur-lg absolute right-0 top-0 bottom-0">asdasd</div>
                  </div>
                  <div className="bg-[#131313] flex justify-center items-center overflow-hidden relative">
                     <div className="bg-red-300 blur-lg absolute left-0 top-0 bottom-0">asdasd</div>
                    <Slider {...sliderSettings} className="h-[400px] w-[700px] z-10 ">
                      <div className="bg-red-400 h-[400px] w-full ">
                        <span className="text-black font-bold"></span>
                      </div>
                      <div className="bg-green-400 h-[400px] w-full">
                        <span className="text-white font-bold"></span>
                      </div>
                      <div className="bg-yellow-400 h-[400px]  w-full">
                        <span className="text-black font-bold"></span>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={section2Ref}
            className="flex-shrink-0 w-full h-full snap-center  flex"
          >
            <div className="grid grid-rows-[0.25fr_1fr] w-full">
              <div className=""></div>
              <div className=" bg-green-300">
              <div className="grid grid-cols-[1fr_2fr] w-full h-full">
                  <div className="bg-green-200"></div>
                  <div className="bg-green-800 flex justify-center items-center overflow-hidden ">
                    <Slider {...sliderSettings} className="h-[400px] w-[700px] ">
                      <div className="bg-red-400 h-[400px] w-full ">
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

          <section
            ref={section3Ref}
            className="flex-shrink-0 w-full h-full snap-center  flex"
          >
            <div className="grid grid-rows-[0.25fr_1fr] w-full">
              <div className=""></div>
              <div className=" bg-yellow-300">
              <div className="grid grid-cols-[1fr_2fr] w-full h-full">
                  <div className="bg-yellow-200"></div>
                  <div className="bg-yellow-800 flex justify-center items-center overflow-hidden">
                    <Slider {...sliderSettings} className="h-[400px] w-[700px] ">
                      <div className="bg-red-400 h-[400px] w-full ">
                        <span className="text-black font-bold"></span>
                      </div>
                      <div className="bg-green-400 h-[400px]  w-full">
                        <span className="text-white font-bold"></span>
                      </div>
                      <div className="bg-yellow-400 h-[400px]  w-full">
                        <span className="text-black font-bold"></span>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className=" flex-1 w-full items-center flex justify-center">
        <div className="flex gap-2 h-full w-1/2 justify-center items-center">
          <motion.div
            className="h-4/5 w-10/12"
            onMouseEnter={() => setCheck1(true)}
            onMouseLeave={() => setCheck1(false)}
          >
            <motion.section
              initial={{ y: 0 }}
              animate={{ y: check1 ? -30 : 0 }}
              className="bg-red-500 h-full w-full"
              onClick={() => scrollToSection(section1Ref)}
            ></motion.section>
          </motion.div>
          <motion.div
            className="h-4/5 w-10/12"
            onMouseEnter={() => setCheck2(true)}
            onMouseLeave={() => setCheck2(false)}
          >
            <motion.section
              initial={{ y: 0 }}
              animate={{ y: check2 ? -30 : 0 }}
              className="bg-green-500 h-full w-full"
              onClick={() => scrollToSection(section2Ref)}
            ></motion.section>
          </motion.div>

          <motion.div
            className="h-4/5 w-10/12"
            onMouseEnter={() => setCheck3(true)}
            onMouseLeave={() => setCheck3(false)}
          >
            <motion.section
              initial={{ y: 0 }}
              animate={{ y: check3 ? -30 : 0 }}
              className="bg-yellow-500 h-full w-full"
              onClick={() => scrollToSection(section3Ref)}
            ></motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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
