"use client";
import { gsap, Power2 } from "gsap";
import hoverEffect from "hover-effect";
import React, { useEffect, useRef } from "react";
import { Sidebar } from "./Sidebar";

export function Hero() {
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
      image1: "./images/Chinwendu_Agbaetuo-2.jpeg",
      image2: "./images/Chinwendu_Agbaetuo-1.jpeg",
      displacementImage: "./images/displacement_image.jpeg",
    });
  });

  return (
    <Sidebar>
      <div className="flex flex-col items-center justify-center relative h-screen">
        {/* absolute text to the left */}
        <div className="absolute  left-0 z-[20]">
          <div
            ref={heroTextAnimation}
            className="leading-[3.75rem] text-gray-900"
          >
            <div className="name-animation font-migra-extrabold font-extrabold">
              <div className=" leading-[0] hero-text text-[5.7425rem]">Hey</div>
              <br />
              <span className=" leading-[0] text-[5.7425rem]">I&apos;m</span>
              <span className=" ml-2 md:ml-4 xl:ml-8 text-[5.7425rem]">
                Chinwendu
              </span>
            </div>
            <div className="role-animation uppercase font-eastman-offset  text-[2rem] tracking-[0.06em]">
              creative frontend developer
            </div>
            <div className="text-animation font-eastman leading-[1.25rem] text-[#000000] mt-6 text-[1rem] max-w-[28.6875rem]">
              Crafting beautiful and intuitive user experiences, one line of
              code at a time.
            </div>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
    </Sidebar>
  );
}
