import gsap, { Sine } from "gsap";
import React, { useEffect, useRef } from "react";

export function SplashScreen() {
  let loadingScreen: any = useRef<HTMLDivElement | null>(null);
  let logoOne: any = useRef(null);
  let logoTwo: any = useRef(null);
  let logoThree: any = useRef(null);
  let logoFour: any = useRef(null);
  let logoFive: any = useRef(null);
  let logoSix: any = useRef(null);

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.from(logoOne, {
      opacity: 0,
      duration: 0.5,
      skewX: 10,
      y: -200,
      ease: Sine.easeInOut,
    });
    timeline.from(
      logoTwo,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      logoThree,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      logoFour,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: -200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      logoFive,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: -200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      logoSix,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(logoTwo, {
      delay: 0.1,
      duration: 0.5,
      opacity: 0,
      ease: Sine.easeInOut,
      y: -200,
    });

    timeline.to(
      logoFive,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );

    timeline.to(
      logoThree,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -300,
      },
      "-=.2"
    );

    timeline.to(
      logoSix,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );

    timeline.to(
      logoFour,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );

    timeline.to(logoOne, {
      position: "absolute",
    });

    timeline.to(logoOne, {
      fontSize: "2vmax",
      top: "10px",
      left: "10px",
      ease: Sine.easeInOut,
    });
  });

  return (
    <div className="text-[#E7E7E7] uppercase">
      <div
        ref={(el) => (loadingScreen = el)}
        className="fixed top-0 left-0 h-screen w-full z-50 bg-[#101010]"
      >
        <div>
          {/* ONE */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div
              ref={(el) => (logoOne = el)}
              className="font-monument font-semibold text-[#E7E7E7] text-[3vmax] md:text-[10.1vmax] mix-blend-difference leading-none"
            >
              dindustack
            </div>
          </div>

          {/* TWO */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div
              ref={(el) => (logoTwo = el)}
              className="font-monument font-semibold text-[#01FF01] text-[3.1vmax] md:text-[10.2vmax] mix-blend-difference leading-none"
            >
              dindustack
            </div>
          </div>

          {/* THREE */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div
              ref={(el) => (logoThree = el)}
              className="font-monument font-semibold text-[#FC1F1F] text-[3.2vmax] md:text-[10.3vmax] mix-blend-difference leading-none"
            >
              dindustack
            </div>
          </div>

          {/* FOUR */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div
              ref={(el) => (logoFour = el)}
              className="font-monument font-semibold text-[#8CF7F7] text-[3.3vmax] md:text-[10.4vmax] mix-blend-difference leading-none"
            >
              dindustack
            </div>
          </div>

          {/* FIVE */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div
              ref={(el) => (logoFive = el)}
              className="font-monument font-semibold text-[#4254F8] text-[3.4vmax] md:text-[10.5vmax] mix-blend-difference leading-none"
            >
              dindustack
            </div>
          </div>

          {/* SIX */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div
              ref={(el) => (logoSix = el)}
              className="font-monument font-semibold text-[#AC00AC] text-[3.5vmax] md:text-[10.6vmax] mix-blend-difference leading-none"
            >
              dindustack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
