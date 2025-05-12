import SEA from "../assets/sea_mono.mp4";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

export default function Nav() {
  const location = useLocation();
  const typedRef = useRef<HTMLDivElement | null>(null); // Typed.js ref
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const section4Ref = useRef<HTMLElement | null>(null);

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
    let index = 0;

    const initializeTyped = (text: string) => {
      if (typedRef.current) {
        typed = new Typed(typedRef.current, {
          strings: [text],
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 2000,
          startDelay: 300,
          showCursor: false,
          loop: false,
          onComplete: () => {
            index = (index + 1) % greetings.length;
            initializeTyped(greetings[index]);
          },
        });
      }
    };

    const timer = setTimeout(() => {
      initializeTyped(greetings[index]);
    }, 5000);

    return () => {
      if (typed) {
        typed.destroy();
      }
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
    };
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const comp = useRef<HTMLDivElement | null>(null);

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
          "-=1",
        )
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: -100,
          duration: 1.3,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      {/* <div
        id="intro-slider"
        className="absolute left-0 top-0 z-20 flex h-screen w-full flex-col gap-10 bg-[#fefaf2] p-10 tracking-tight"
      >
        <h1 id="title1" className="text-9xl font-bold text-[#131313]">
          CHITSANUCH
        </h1>
        <h1 id="title2" className="text-9xl font-bold text-[#131313]">
          ONRIT
        </h1>
        <h1 id="title3" className="text-9xl font-bold text-[#131313]">
          BB.
        </h1>
      </div> */}

      <div className="no-scrollbar flex h-screen flex-col">
        <nav className="pointer-events-auto absolute left-0 right-0 z-10 flex h-36 w-full items-center">
          <ul className="relative flex w-full">
            <button
              className={`flex-1 rounded-s-full px-20 xl:text-[60px] ${
                activeSection === "section2" ||
                activeSection === "section3" ||
                activeSection === "section4"
                  ? "text-[#fefaf2]"
                  : "text-[#131313]"
              } flex`}
              onClick={() => scrollToSection(section1Ref)}
            >
              CHITSANUCHA
            </button>

            <div className="invisible flex flex-1 items-center justify-end px-20 text-sm xl:visible xl:text-2xl 2xl:text-3xl">
              <ul className="flex w-full justify-around gap-10">
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
          className="flex h-screen w-full flex-shrink-0 snap-center"
          ref={section1Ref}
          id="section1"
        >
          {location.pathname === "/" && (
            <video
              src={SEA}
              autoPlay
              loop
              muted
              className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
            />
          )}

          <div className="flex h-screen w-screen items-center justify-center">
            {location.pathname === "/" && (
              <div
                ref={typedRef}
                className="greeting-text flex h-full items-center justify-center text-[100px] text-[#131313]"
              ></div>
            )}
          </div>
        </section>

        {/* Section 2 */}
        <section
          className="flex h-screen w-full flex-shrink-0 snap-center bg-[#131313]"
          ref={section2Ref}
          id="section2"
        >
          <About />
        </section>

        {/* Section 3 */}
        <section
          className="flex h-screen w-full flex-shrink-0 snap-center justify-center bg-[#131313]"
          ref={section3Ref}
          id="section3"
        >
          <div className="h-full w-full">
            <div className="flex h-full w-full justify-center">
              <Project />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section
          className="flex h-screen w-full flex-shrink-0 snap-center justify-center bg-[#131313]"
          ref={section4Ref}
          id="section4"
        >
          <div className="flex h-screen w-screen items-center justify-center">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}
