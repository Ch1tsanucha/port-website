import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "framer-motion";

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 200,
  // swipeToSlide: true,
  pauseOnHover: false,
  cssEase: "linear",
}


// const [speed, setSpeed] = useState(100); // Start with a fast speed
// const [increment, setIncrement] = useState(50); // Speed increment value

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: speed, // Dynamic transition speed
//   autoplaySpeed: speed, // Dynamic autoplay interval
//   pauseOnHover: false,
//   cssEase: "linear",
// };

// useEffect(() => {
//   // Update speed every second
//   const interval = setInterval(() => {
//     setSpeed((prevSpeed) => {
//       // Check if we need to reverse the speed change direction
//       if (prevSpeed >= 20000 || prevSpeed <= 100) {
//         setIncrement((prevIncrement) => -prevIncrement); // Reverse increment
//       }
//       return prevSpeed + increment; // Adjust speed
//     });
//   }, 1000); // Adjust every second

//   return () => clearInterval(interval); // Clean up interval on unmount
// }, [increment]); // Re-run effect if increment changes


function Nav() {
  return (
    <div className="h-full w-full overflow-hidden absolute top-[290px]">
      {" "}
      {/* Apply overflow-hidden here */}
      <Slider {...sliderSettings} className="w-full ">
        <div className="bg-[#16161d] h-32  "></div>
        <div className="bg-[#fefaf2] h-32 "></div>
        <div className="bg-[#16161d] h-32 "></div>
        <div className="bg-[#fefaf2] h-32 "></div>
      </Slider>
    </div>
  );
}

interface SplitTextProps {
  text: string;
}

// const SplitText: React.FC<SplitTextProps> = ({ text }) => {
//   const letters = text.split("");

//   return (
//     <div>
//       {letters.map((letter, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

export default function About() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <div className="w-2/3">
          <div className="text-[90px]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              CHITSANUCHA
            </motion.p>
          </div>
          <div className="text-[90px]">
            {" "}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              ONRIT
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full relative">
        <div className="text-sm xl:text-xl 2xl:text-4xl w-2/3">
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I’m a computer engineering student passionate about solving
              problems through programming.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I enjoy learning new things and finding ways to make life more fun
              and interesting.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I have a keen interest in creating automation scripts and web
              development, as well as exploring AI and emerging technologies.{" "}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I’m eager to gain diverse experiences beyond just programming and
              coding.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* <Nav /> */}
      </div>
    </div>
  );
}
