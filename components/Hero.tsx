import { gsap, Power2 } from "gsap";
import hoverEffect from "hover-effect";
import React, { useEffect, useRef } from "react";

export function Hero() {
  const heroAnimation = gsap.timeline();
  let socialAnimation = useRef(null);
  let textAnimation = useRef(null);
  let nameAnimation = useRef(null);
  let roleAnimation = useRef(null);

  const didAnimate = useRef(false);

  /**
   * GSAP Animation
   */
  useEffect(() => {
    if (didAnimate.current) {
      return;
    }

    didAnimate.current = true;

    heroAnimation.fromTo(
      socialAnimation.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: -10,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: {
          amount: 0.4,
        },
      }
    );

    heroAnimation.fromTo(
      textAnimation.current,
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );

    heroAnimation.fromTo(
      nameAnimation.current,
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );

    heroAnimation.fromTo(
      roleAnimation.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: -10,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: {
          amount: 0.4,
        },
      }
    );
  });

  /**
   * Liquid Image Distortion
   */

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".hero-image"),
      intensity: 0.3,
      image1: "./images/Chinwendu_Agbaetuo-2.jpeg",
      image2: "./images/Chinwendu_Agbaetuo-1.jpeg",
      displacementImage: "./images/displacement_image.jpeg",
    });
  });

  /**
   * 1. create hover animation on social links
   * 2. use GSAP to create animation
   */

  return (
    <div className="pt-[5rem] lg:pt-[15rem] pb-[7.5rem] px-[2.5rem] mx-auto w-[100vw] h-[87vh] md:h-[95vh] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="relative flex justify-start md:justify-center flex-col md:pb-0 lg:pb-[6rem] pt-[2.125rem] md:pt-[0] md:gap-y-[1rem] lg:gap-y-[4rem] w-[100%] lg:w-[18.5rem] xl:w-[17.7rem]">
          <h1
            ref={nameAnimation}
            className="mb-[10px] text-3xl font-monument font-bold md:text-4xl text-center md:text-left xl:text-[4rem] z-[2]"
          >
            <span className="leading-[1.5]">Hey</span>
            <br />
            <span>i&apos;m</span>
            <span className="ml-2 md:ml-4 xl:ml-8">Chinwendu</span>
          </h1>
          <div
            className="hidden md:flex flex-col items-start gap-y-[1rem]"
            ref={socialAnimation}
          >
            <a href="https://www.github.com/dindustack/" target="_blank">
              <h5 className="hero-social-link">github</h5>
            </a>
            <a href="https://www.linkedin.com/in/dindustack/" target="_blank">
              <h5 className="hero-social-link">linkedin</h5>
            </a>
            <a href="https://twitter.com/dindustack" target="_blank">
              <h5 className="hero-social-link">twitter</h5>
            </a>
            <a href="https://dribbble.com/dindustack" target="_blank">
              <h5 className="hero-social-link">dribbble</h5>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col md:-mt-[100px] lg:mt-0 justify-center items-center">
          <div className="hero-image"></div>
        </div>

        <div className="relative flex flex-col gap-y-[2rem] md:justify-center md:items-end pt-0 -mt-2 lg:pt-[15rem] w-[100%] lg:w-[18.5rem] xl:w-[17.7rem]">
          <h2
            ref={roleAnimation}
            className="text-3xl font-monument font-light md:text-4xl text-center md:text-right xl:text-6xl leading-none z-[2]"
          >
            creative
            <br />
            <span className="relative md:-left-[8rem] xl:-left-[16rem]">
              frontend
            </span>
            <br />
            <span>developer</span>
          </h2>
          <div
            ref={textAnimation}
            className="break-words font-migra normal-case text-xl hidden md:flex md:w-[20rem]"
          >
            Crafting beautiful and intuitive user experiences, one line of code
            at a time.
          </div>
        </div>
      </div>
    </div>
  );
}
