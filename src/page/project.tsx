import { useRef } from "react";

export default function Project2() {
  // Create refs for the sections
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full flex flex-col  w-screen items-center">
  

      {/* Buttons to scroll */}
      {/* <div className="flex gap-4 mb-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => scrollToSection(section1Ref)}
        >
          Go to Section 1
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => scrollToSection(section2Ref)}
        >
          Go to Section 2
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => scrollToSection(section3Ref)}
        >
          Go to Section 3
        </button>
      </div> */}

      {/* Scrollable Sections */}
      <div className="h-4/5 w-10/12 flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
        <section
          ref={section1Ref}
          className="flex-shrink-0 w-full h-full snap-center bg-red-300 flex"
        >
          {/* <p className="overflow-scroll w-10/12 no-scrollbar scroll-smooth snap-center text-left">
           
          </p> */}
          <div className="flex  flex-col overflow-y-auto snap-y snap-mandatory w-full no-scrollbar">
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd1
            </section>
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd2
            </section>
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd3
            </section>
          </div>
        </section>

        <section
          ref={section2Ref}
          className="flex-shrink-0 w-full h-full snap-center bg-green-300 flex "
        >
          <div className="flex  flex-col overflow-y-auto snap-y snap-mandatory w-full no-scrollbar">
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd1
            </section>
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd2
            </section>
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd3
            </section>
          </div>
        </section>

        <section
          ref={section3Ref}
          className="flex-shrink-0 w-full h-full snap-center bg-yellow-300 flex"
        >
          {/* <div className="flex  flex-col overflow-y-auto snap-y snap-mandatory w-full no-scrollbar">
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd1
            </section>
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd2
            </section>
            <section className="flex-shrink-0 h-full w-full snap-center flex">
              asd3
            </section>
          </div> */}
        </section>
      </div>
    </div>
  );
}
