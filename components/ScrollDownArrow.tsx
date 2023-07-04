"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import arrowDown from "../public/icons/arrow-down.svg";
import Image from "next/image";

export const ScrollDownArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    let ctx = gsap.context(() => {
      // GSAP animation configuration
      gsap.set(arrow, { y: 10 });

      gsap.to(arrow, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    });

    return () => {
      ctx.revert();

      gsap.killTweensOf(arrow);
    };
  }, []);

  return (
    <div className="fixed right-5 bottom-5 h-[2.5rem] flex justify-center flex-col items-center z-[1]">
      <span className="inline-block font-eastman text-[12px] text-black">
        scroll
      </span>
      <div ref={arrowRef}>
        <span className="inline-block p-2">
          <Image src={arrowDown} alt="Arrow down icon" priority />
        </span>
      </div>
    </div>
  );
};
