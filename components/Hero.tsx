"use client";
import { gsap, Power2 } from "gsap";
import hoverEffect from "hover-effect";
import React, { forwardRef, useEffect, useRef } from "react";
import { Sidebar } from "./Sidebar";

type HeroProps = {
  id: string;
};

export const Hero = forwardRef<HTMLDivElement, HeroProps>(function Hero(
  props,
  ref
) {
  const { id } = props;
  const heroAnimation = gsap.timeline();
  const heroTextAnimation = useRef(null);

  /**
   * GSAP Animation
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      heroAnimation.fromTo(
        ".text-animation",
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
        ".name-animation",
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
        ".role-animation",
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
    }, heroTextAnimation);
    return () => ctx.revert();
  });

  /**
   * Liquid Image Distortion
   */

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".hero-image"),
      intensity: 0.3,
      image1: "./images/cropped-Chinwendu_Agbaetuo-2.png",
      image2: "./images/cropped-Chinwendu_Agbaetuo-1.png",
      displacementImage: "./images/displacement_image.jpeg",
      speedIn: 1.2,
      imagesRatio: 2811 / 2811,
    });
  });

  return (
    <div
      className="flex flex-col-reverse items-center justify-center relative h-screen"
      id={id}
      ref={ref}
    >
      {/* absolute text to the left */}
      <div className="lg:absolute lg:left-0 z-[20]">
        <div
          ref={heroTextAnimation}
          className="leading-[3.75rem] text-gray-900"
        >
          <div className="name-animation flex flex-col -space-y-[1rem] md:space-y-[1rem] font-neue-ultrabold font-extrabold text-[2.5rem] md:text-[4.5rem]">
            <div className="">Hey -</div>
            <div className="space-x-4 md:space-x-8 md:mt-8">
              <span className="leading-[0]">I&apos;m</span>
              <span>Chinwendu</span>
            </div>
          </div>
          <div className="role-animation hidden md:block uppercase font-eastman-offset text-[2rem] tracking-[0.06em] mt-[1.5rem]">
            creative frontend developer
          </div>
          <div className="text-animation hidden md:block font-eastman leading-[1.25rem] text-[#000000] mt-7 text-[1rem] max-w-[28.6875rem]">
            Crafting beautiful and intuitive user experiences, one line of code
            at a time.
          </div>

          <div className="text-animation block md:hidden font-eastman leading-[1.25rem] text-[#000000] mt-7 text-[1rem] max-w-[28.6875rem]">
            I am a creative developer and I craft beautiful and intuitive user
            experiences, one line of code at a time.
          </div>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  );
});
