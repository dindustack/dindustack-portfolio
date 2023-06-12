import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Sidebar } from "./Sidebar";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const aboutRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]) as any;
    lettersRef.current = [];
    return [lettersRef, (ref: any) => ref && lettersRef.current.push(ref)];
  }

  const text =
    "As a frontend developer I create engaging and intuitive web applications that deliver a great user experience across all devices and platforms.";

  useEffect(() => {
    const element = aboutRef.current;
    gsap.to(element.querySelectorAll(".about-text"), {
      backgroundPositionX: "0%",
      stagger: 1,
      color: "#565656",
      scrollTrigger: {
        trigger: element.querySelectorAll(".about-text"),
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    });
  }, []);

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
      color: "#202020",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  });

  return (
    <Sidebar>
      <div className="flex flex-col justify-center min-h-screen">
        <span className="uppercase font-migra-extrabold text-[3.5rem] text-gray-900">
          about
        </span>
        <div className="flex font-eastman-medium space-x-[2.875rem] mt-[44px]">
          <div className="about-title">
            <span className="transform -rotate-90 whitespace-nowrap text-[1rem] text-gray-300 uppercase -mt-[2.5rem]">
              my role
            </span>
          </div>
          <div ref={triggerRef} className="max-w-[60vw]">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                ref={setlettersRef}
                className="about-first-text break-words  text-[1.5rem] md:text-[2rem]  first-letter:text-7xl"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-[5.5rem] flex font-eastman-medium space-x-[2.875rem]">
          <div className="about-title">
            <span className="transform -rotate-90 whitespace-nowrap text-[1rem] text-gray-300 uppercase -mt-[6.5rem]">
              my stack
            </span>
          </div>
          <div ref={aboutRef} className="grid grid-cols-3 gap-x-16 gap-y-8">
            <div className="about-text">GraqhQL</div>
            <div className="about-text">Next.js</div>
            <div className="about-text">React-Query</div>
            <div className="about-text">Storybook</div>
            <div className="about-text">TailwindCSS</div>
            <div className="about-text">TypeScript</div>
            <div className="about-text">Zustand</div>
          </div>
        </div>
      </div>
    </Sidebar>
    // <Element name="about">
    //   <div
    //     ref={aboutRef}

    //     className="relative flex justify-between items-start px-[0.75rem] md:px-[2.5rem] font-monument py-[6.25rem]"
    //   >
    //     <div className="normal-case space-y-8">
    //       <div ref={triggerRef}>
    //         {text.split("").map((letter, index) => (
    //           <span
    //             key={index}
    //             ref={setlettersRef}
    //             className="indent-8 about-first-text break-words leading-loose md:leading-[4.5rem] text-[1.5rem] md:text-5xl font-bold tracking-wide first-letter:text-7xl"
    //           >
    //             {letter}
    //           </span>
    //         ))}
    //       </div>

    //       <div className="text-[2.2rem] md:text-5xl space-y-8">
    //         <p className="about-text font-migra text-[2rem] md:text-5xl">
    //           I am proficient in:
    //         </p>
    //         <p className="about-text">React</p>
    //         <p className="about-text ">GraqhQL</p>
    //         <p className="about-text indent-[3vw]">Next.js</p>
    //         <p className="about-text indent-[5vw]">React-Query</p>
    //         <p className="about-text indent-[6vw]">Storybook</p>
    //         <p className="about-text indent-[7vw]">TailwindCSS</p>
    //         <p className="about-text indent-[9vw]">TypeScript</p>
    //         <p className="about-text indent-[10vw]">Zustand</p>
    //       </div>
    //     </div>
    //   </div>
    // </Element>
  );
}
