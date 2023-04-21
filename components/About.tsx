import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const element = aboutRef.current;
    gsap.to(element.querySelectorAll(".about-text"), {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: element.querySelectorAll(".about-text"),
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="relative flex justify-between items-start px-[0.75rem] md:px-[2.5rem] h-[100vh] font-monument w-[100%] py-[6.25rem]"
    >
      <div className="normal-case space-y-8">
        <p className="indent-8 about-text leading-loose md:leading-[4.5rem] text-[1.2rem] md:text-5xl font-bold tracking-wide">
          As a frontend developer I create engaging and intuitive web
          applications that deliver a great user experience across all devices
          and platforms.
        </p>

        <div className="text-[1.2rem] md:text-5xl space-y-8">
          <p className="about-text">I am proficient in:</p>
          <p className="about-text">React</p>
          <p className="about-text indent-[2vw]">TypeScript</p>
          <p className="about-text indent-[4vw]">Next.js</p>
          <p className="about-text indent-[6vw]">React-Query</p>
          <p className="about-text indent-[8vw]">GraqhQL</p>
          <p className="about-text indent-[9vw]">TailwindCSS</p>
          <p className="about-text indent-[10vw]">Storybook</p>
        </div>
      </div>
    </div>
  );
}
