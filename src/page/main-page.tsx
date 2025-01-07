import {
  Link,
  Outlet,
  useLocation,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef, useLayoutEffect,useState } from "react";
import Typed from "typed.js"; // Import Typed.js
import { delay, motion } from "framer-motion";

// import { div } from "framer-motion/client";
import gsap from "gsap";

export default function Main_page() {
  const greetings = [
    "สวัสดี", // Thai
    "こんにちは", // Japanese
    "你好", // Chinese (Simplified)
    "안녕하세요", // Korean
    "नमस्ते", // Hindi
    "Xin chào", // Vietnamese
    "Kamusta", // Filipino (Tagalog)
    "Selamat pagi", // Indonesian (Good Morning)
    "Merhaba", // Turkish
    "Sawubona", // Zulu
    "שלום", // Hebrew
    "Zdravstvuyte", // Bulgarian
    "Dobrý den", // Czech
    "Hei", // Finnish
    "Përshëndetje", // Albanian
    "Helo", // Welsh
    "Привет", // Russian
    "Hola", // Spanish
    "Bonjour", // French
    "Ciao", // Italian
    "Hallo", // German
    "Olá", // Portuguese
    "Hello", // English
  ];

  const location = useLocation();
  const typedRef = useRef(null); // Create a ref for Typed.js
  const navigate = useNavigate();
  const handleRefresh = () => {
    // Navigate to '/' and force a re-render
    navigate("/", { replace: true });
    // Optionally, you can use window.location.reload() to fully refresh
    window.location.reload();
  };

  useEffect(() => {
    let typed: Typed | null = null;
    let index = 0; // Start with the first greeting

    // Function to initialize the Typed.js effect
    const initializeTyped = (text: string) => {
      if (typedRef.current) {
        typed = new Typed(typedRef.current, {
          strings: [text],
          typeSpeed: 200, // Slower typing speed (default is 100)
          backSpeed: 200, // Slower backspacing speed (default is 50)
          backDelay: 2000, // Delay before backspacing starts
          startDelay: 300, // Delay before typing starts
          showCursor: false, // Whether to show the cursor
          loop: false, // Disable loop to prevent infinite typing
          onComplete: () => {
            // When typing is complete, move to the next greeting
            index = (index + 1) % greetings.length;
            initializeTyped(greetings[index]); // Start typing the next greeting
          },
        });
      }
    };
    // Initialize the typing effect with the first greeting
    initializeTyped(greetings[index]);

    return () => {
      if (typed) {
        typed.destroy(); // Clean up the Typed.js instance when the component unmounts
      }
    };
  }, []); // Empty dependency array to run the effect once

  //   const comp = useRef(null);

  //   useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //       const t1 = gsap.timeline();
  //       t1.from("#intro-slider", {
  //         xPercent: -100,
  //         duration: 1.3,
  //         delay: 0.3,
  //       })
  //         // .from(
  //         //   ["#title1", "#title2", "#title3"],
  //         //   {
  //         //     opacity: 0,
  //         //     y: "+=30",
  //         //     stagger: 0.5,
  //         //   },
  //         //   "-=1"
  //         // ) // Overlap with previous animation
  //         .to(["#title1", "#title2", "#title3"], {
  //           opacity: 0,
  //           y: "-=30",
  //           delay: 0.3,
  //           stagger: 0.5,
  //         }).to("#intro-slider", {
  //             xPercent: -100,
  //             duration: 1.3,
  //         })
  //     }, comp);

  //     return () => ctx.revert();
  //   }, []);
  const [isHovered, setIsHovered] = useState(false);
  return (
    // ref={comp}
    <div className="relative">
      {/* <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight">
            <h1 id="title1" className="text-9xl text-black font-bold">CHITSANUCHA</h1>
            <h1 id="title2" className="text-9xl text-black font-bold">ONRIT</h1>
            <h1 id="title3" className="text-9xl text-black font-bold">BB.</h1>
        </div> */}
      <div id="main" className="flex flex-col justify-center h-screen ">
        <ul className="flex text-[40px]  w-full gap-10">
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: 20 }}
            onHoverStart={() => setIsHovered(true)}
            className="flex-1"
          >
             {isHovered && (
            <NavLink
              className={({ isActive }) => (isActive ? "" : "hover:underline")}
              to={"/"}
              onClick={handleRefresh} // Trigger the refresh on click
            >
              {({ isActive }) => (
                <li>
                  Ch1tsanucha &#160;
                  {/* <motion.a
                    animate={{ y: [0, 10, 0] }} // Moves from 0 to 20 and back to 0
                    transition={{
                      duration: 2, // Animation duration
                      repeat: Infinity, // Loop indefinitely
                      repeatType: "loop", // Repeat type can be "loop" or "reverse"
                      ease: "easeInOut", // Smooth animation easing
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      }}
                      className="text-[60px] font-sans"
                    >
                      {" "}
                      {isActive && "\uD83D\uDC31"}{" "}
                    </span>
                  </motion.a> */}
                </li>
              )}
            </NavLink>
            )}
          </motion.div>

          <div className="flex justify-between flex-1">
            <motion.a initial={{ y: 0 }} whileHover={{ y: 20 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "hover:underline"
                }
                to={"/about"}
              >
                {({ isActive }) => (
                  <li className="flex items-center">
                    About Me &#160;
                    {/* <motion.a
                    animate={{ y: [0, 10, 0] }} // Moves from 0 to 20 and back to 0
                    transition={{
                      duration: 2, // Animation duration
                      repeat: Infinity, // Loop indefinitely
                      repeatType: "loop", // Repeat type can be "loop" or "reverse"
                      ease: "easeInOut", // Smooth animation easing
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      }}
                      className="pt-7 text-[60px]"
                    >
                      {" "}
                      {isActive && "\uD83D\uDC31"}{" "}
                    </span>
                  </motion.a> */}
                  </li>
                )}
              </NavLink>
            </motion.a>
            <motion.a initial={{ y: 0 }} whileHover={{ y: 20 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "hover:underline"
                }
                to={"/project"}
              >
                {({ isActive }) => (
                  <li className="flex items-center">
                    Project &#160;
                    {/* <motion.a
                    animate={{ y: [0, 10, 0] }} // Moves from 0 to 20 and back to 0
                    transition={{
                      duration: 2, // Animation duration
                      repeat: Infinity, // Loop indefinitely
                      repeatType: "loop", // Repeat type can be "loop" or "reverse"
                      ease: "easeInOut", // Smooth animation easing
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      }}
                      className="pt-7 text-[60px]"
                    >
                      {" "}
                      {isActive && "\uD83D\uDC31"}{" "}
                    </span>
                  </motion.a> */}
                  </li>
                )}
              </NavLink>
            </motion.a>
            <motion.a initial={{ y: 0 }} whileHover={{ y: 20 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "hover:underline"
                }
                to={"/contact"}
              >
                {({ isActive }) => (
                  <li className="flex items-center">
                    Contact &#160;
                    {/* <motion.a
                    animate={{ y: [0, 10, 0] }} // Moves from 0 to 20 and back to 0
                    transition={{
                      duration: 2, // Animation duration
                      repeat: Infinity, // Loop indefinitely
                      repeatType: "loop", // Repeat type can be "loop" or "reverse"
                      ease: "easeInOut", // Smooth animation easing
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      }}
                      className="pt-7 text-[60px]"
                    >
                      {" "}
                      {isActive && "\uD83D\uDC31"}{" "}
                    </span>
                  </motion.a> */}
                  </li>
                )}
              </NavLink>
              
            </motion.a>
          </div>
        </ul>
        <div className="flex-1 flex items-center justify-center">
          {location.pathname === "/" && (
            <div
              ref={typedRef}
              className="greeting-text text-[100px] flex justify-center items-center h-full"
            ></div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
