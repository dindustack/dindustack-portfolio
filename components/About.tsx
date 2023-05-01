import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const aboutRef = useRef(null);

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
      color: "rgba(255,255,255,1)",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="relative flex justify-between items-start px-[0.75rem] md:px-[2.5rem] font-monument py-[6.25rem]"
    >
      <div className="normal-case space-y-8">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span
              key={index}
              ref={setlettersRef} 
              className="indent-8 about-first-text break-words leading-loose md:leading-[4.5rem] text-[1.5rem] md:text-5xl font-bold tracking-wide first-letter:text-7xl"
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="text-[2.2rem] md:text-5xl space-y-8">
          <p className="about-text font-migra text-[2rem] md:text-5xl">
            I am proficient in:
          </p>
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
