import { div } from "framer-motion/client";
import { delay, motion } from "framer-motion";
import SEA from "../assets/sea_mono.mp4";
import Headroom from "react-headroom";
import gsap from "gsap";
import {
  
  Link,
  Outlet,
  useLocation,
  NavLink,
  useNavigate,
} from "react-router-dom";
import Typed from "typed.js"; // Import Typed.js
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import About from "./about";
import Project from "./project_2";
import Contact from "./contact";
export default function Nav() {
  const location = useLocation();
  const typedRef = useRef(null); // Create a ref for Typed.js
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  // State to track the active section
  const [activeSection, setActiveSection] = useState("");
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

  useEffect(() => {
    let typed: Typed | null = null;
    let index = 0; // Start with the first greeting
  
    // Function to initialize the Typed.js effect
    const initializeTyped = (text: string) => {
      if (typedRef.current) {
        typed = new Typed(typedRef.current, {
          strings: [text],
          typeSpeed: 200, // Slower typing speed
          backSpeed: 200, // Slower backspacing speed
          backDelay: 2000, // Delay before backspacing starts
          startDelay: 300, // Delay before typing starts for each greeting
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
  
    // Start with a 1-second delay
    const timer = setTimeout(() => {
      initializeTyped(greetings[index]); // Initialize the typing effect
    }, 5000); // 1 second = 1000 milliseconds
  
    return () => {
      if (typed) {
        typed.destroy(); // Clean up the Typed.js instance when the component unmounts
      }
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []); // Empty dependency array to run the effect once
  

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // 50% of the section should be visible for it to be considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update active section based on the section that is in view
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);

    // Clean up observer on unmount
    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
    };
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

      const comp = useRef(null);

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from("#intro-slider", {
          zPercent: 100,
          duration: 1.3,
          delay: 0.3,
        })
          .from(
            ["#title1", "#title2", "#title3"],
            {
              opacity: 0,
              y: "+=30",
              stagger: 0.5,
            },
            "-=1"
          ) // Overlap with previous animation
          .to(["#title1", "#title2", "#title3"], {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          }).to("#intro-slider", {
              xPercent: -100,
              duration: 1.3,
          })
      }, comp);

      return () => ctx.revert();
    }, []);

  return (
    <div className="relative " ref={comp}>
    {/* <div id="intro-slider" className="h-screen p-10 bg-[#fefaf2] absolute top-0 left-0 z-20 w-full flex flex-col gap-10 tracking-tight">
            <h1 id="title1" className="text-9xl text-[#131313] font-bold">CHITSANUCH</h1>
            <h1 id="title2" className="text-9xl text-[#131313] font-bold">ONRIT</h1>
            <h1 id="title3" className="text-9xl text-[#131313] font-bold">BB.</h1>
        </div> */}
  
    <div className=" flex flex-col  no-scrollbar h-screen">
     
      <nav className="h-36 flex items-center left-0 right-0 fixed pointer-events-auto overflow-visible z-10">

        <ul className="w-full flex relative">
          <button
            className={`flex-1 px-20 text-[60px] rounded-s-full ${
              activeSection === "section2" ||
              activeSection === "section3" ||
              activeSection === "section4"
                ? "text-[#fefaf2]"
                : "text-[#131313]"
            }
      flex`}
            onClick={() => scrollToSection(section1Ref)}
          >
            CHITSANUCHA
          </button>

          <div className="flex-1 flex justify-end px-20 text-[30px]  xl:text-[35px] 2xl:text-[45px] items-center">
            <ul className="w-full flex justify-around gap-10">
              <button
                className={`${
                  activeSection === "section2" ||
                  activeSection === "section3" ||
                  activeSection === "section4"
                    ? "text-[#fefaf2]"
                    : "text-[#131313]"
                } ${activeSection === "section2" ? "underline" : ""}`}
                onClick={() => scrollToSection(section2Ref)}
              >
                <li>About Me</li>
              </button>

              <button
                className={`${
                  activeSection === "section2" ||
                  activeSection === "section3" ||
                  activeSection === "section4"
                    ? "text-[#fefaf2]"
                    : "text-[#131313]"
                } ${activeSection === "section3" ? "underline" : ""}`}
                onClick={() => scrollToSection(section3Ref)}
              >
                <li>Project</li>
              </button>

              <button
                className={`${
                  activeSection === "section2" ||
                  activeSection === "section3" ||
                  activeSection === "section4"
                    ? "text-[#fefaf2]"
                    : "text-[#131313]"
                } ${activeSection === "section4" ? "underline" : ""}`}
                onClick={() => scrollToSection(section4Ref)}
              >
                <li>Contact</li>
              </button>
            </ul>
          </div>
        </ul>
      </nav>
   
      {/* Section 1 */}
      <section
        className="flex-shrink-0 h-screen w-full snap-center flex"
        ref={section1Ref}
        id="section1"
      >
        {/* Show video only in Section 1 */}
        {location.pathname === "/" && (
          <video
            src={SEA}
            autoPlay
            loop
            muted
            className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          />
        )}

        <div className="flex justify-center items-center w-screen h-screen">
          {location.pathname === "/" && (
            <div
              ref={typedRef}
              className="greeting-text text-[100px] flex justify-center items-center h-full text-[#131313] "
            ></div>
          )}
        </div>
      </section>

      {/* Section 2 (About section) */}
      <section
        className="flex-shrink-0 h-screen w-full snap-center flex bg-[#131313]"
        ref={section2Ref}
        id="section2"
      >
        <About />
      </section>

      {/* Section 3 */}
      <section
        className="flex-shrink-0 h-screen w-full snap-center flex justify-center bg-[#131313]"
        ref={section3Ref}
        id="section3"
      >
        <div className="h-full w-full">
          {/* <div className=" h-36 w-full"></div> */}
          <div className="w-full h-full flex justify-center">
            <Project />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        className="flex-shrink-0 h-screen w-full snap-center flex justify-center bg-[#131313]"
        ref={section4Ref}
        id="section4"
      >
        <div className="w-screen h-screen flex justify-center items-center">
          
          <Contact />
        </div>
      </section>
    </div>

    </div>
  );
}
