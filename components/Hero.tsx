import { gsap, Power2 } from "gsap";
import hoverEffect from "hover-effect";
import React, { useEffect, useRef } from "react";
import { Sidebar } from "./Sidebar";

export function Hero() {
  const heroAnimation = gsap.timeline();
  let socialAnimation = useRef(null);
  let textAnimation = useRef(null);
  let nameAnimation = useRef(null);
  let roleAnimation = useRef(null);

  // social links ref
  const linkOne = useRef(null);
  const linkTwo = useRef(null);
  const linkThree = useRef(null);
  const linkFour = useRef(null);

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

  // Social Links
  const socialLinks = [
    {
      name: "Github",
      link: "https://www.github.com/dindustack/",
      ref: linkTwo,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/dindustack/",
      ref: linkOne,
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/dindustack/",
      ref: linkThree,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/dindustack/",
      ref: linkFour,
    },
  ];

  return (
    <Sidebar>
      <div className="flex  justify-center">
      <div className="hero-image"></div>
      </div>

      {/* <div className="flex flex-col justify-center absolute top-[50%] left-[50%]">
      <div className="hero-image"></div> */}

      {/* <div className="  ">
          <h1
            ref={nameAnimation}
            className="mb-[10px] text-3xl  font-monument font-bold md:text-4xl text-center md:text-left xl:text-[4rem] z-[2]"
          >
            <span className="leading-[1.5]">Hey</span>
            <br />
            <span>i&apos;m</span>
            <span className="ml-2 md:ml-4 xl:ml-8">Chinwendu</span>
          </h1>
        </div>
        <div className=" ">
          <div className="hero-image"></div>
        </div> */}
      {/* <div className="">
        <div className=" ">
          <h1
            ref={nameAnimation}
            className="mb-[10px] text-3xl  font-monument font-bold md:text-4xl text-center md:text-left xl:text-[4rem] z-[2]"
          >
            <span className="leading-[1.5]">Hey</span>
            <br />
            <span>i&apos;m</span>
            <span className="ml-2 md:ml-4 xl:ml-8">Chinwendu</span>
          </h1>
          
        </div>
        <div className="relative flex flex-col md:-mt-[100px] lg:mt-0 justify-center items-center">
         
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
      </div> */}
      {/* </div> */}
    </Sidebar>
  );
}

{
  /* <div className="hero-image"></div> */
}
