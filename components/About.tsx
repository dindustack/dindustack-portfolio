import React, { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { toolItems } from "@/constants/tools";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  id: string;
};

export const About = forwardRef<HTMLDivElement, AboutProps>(function About(
  { id },
  ref
) {
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

  const tools = [
    "GraqhQL",
    "Next.js",
    "React-Query",
    "Storybook",
    "TailwindCSS",
    "TypeScript",
    "Zustand",
  ];

  useEffect(() => {
    const element = aboutRef.current;

    let ctx = gsap.context(() => {
      gsap.to(lettersRef.current, {
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
    });
    return () => {
      ctx.revert();
    };
  }, [aboutRef, lettersRef]);

  return (
    <section
      className="flex flex-col justify-center min-h-screen mt-16"
      data-scroll-section
      id={id}
      ref={ref}
    >
      <span className="about-title">about</span>
      <div className="xl:pl-[7.5rem] pt-[2.25rem] md:pt-[4rem] space-y-[5.5rem]">
        <div className="flex flex-col lg:flex-row font-eastman-medium lg:space-x-[2.875rem]">
          <span className="whitespace-nowrap text-[1rem] text-gray-300 uppercase mb-3">
            my role
          </span>
          <div ref={triggerRef} className="lg:max-w-[60vw]">
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

        <div className="flex flex-col lg:flex-row font-eastman-medium lg:space-x-[2.875rem]">
          <span className="whitespace-nowrap text-[1rem] text-gray-300 uppercase mb-3">
            my tools
          </span>
          <div
            ref={aboutRef}
            className="hidden lg:grid grid-cols-3 gap-x-16 gap-y-8"
          >
            {React.Children.toArray(
              tools.map((tool) => <div className="about-text">{tool}</div>)
            )}
          </div>

          <div
            ref={aboutRef}
            className="grid grid-cols-3 gap-5  place-content-between lg:hidden"
          >
            {React.Children.toArray(
              toolItems.map((tool) => (
                <div className="flex flex-col items-center flex-shrink-0 w-[6.6875rem] h-[6.4375rem] rounded-[0.75rem] border-[#EFEFEF] border pt-6 pb-[0.625rem] gap-y-4">
                  <Image
                    src={tool.imgSrc}
                    alt=""
                    className="w-[2.25rem] h-[2.25rem]"
                  />
                  <div className="about-text">{tool.name}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
