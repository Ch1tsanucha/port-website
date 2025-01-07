import Slider from 'react-slick';
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
  dots: true, // Enable dots
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true, 
  autoplaySpeed: 3000,
  pauseOnHover: true,
  
};



function Nav() {

  
  return (
   
    <div className="h-full w-full flex justify-center items-center my-10"> {/* Apply overflow-hidden here */}
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
  </div>
   
  );
}



export default function Project() {

  
  return (
    <div className="h-full w-full flex justify-center"> 
     {/* grid-rows-[1fr] items-center */}
      {/* <div className="h-full w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
        <section className="flex-shrink-0 w-full h-full snap-center bg-[#131313] flex"></section>

        <section className="flex-shrink-0 w-full h-full snap-center bg-red-500 flex "></section>

        <section className="flex-shrink-0 w-full h-full snap-center bg-[#131313] flex"></section>
      </div> */}

      <div className="h-full w-[1500px]">
        <Nav />
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
