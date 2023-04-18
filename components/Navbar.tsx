import React, { useEffect, useRef } from "react";

import close from "../icons/close-outline.svg";
import menu from "../icons/menu-outline.svg";
import Image from "next/image";
import gsap from "gsap";

export default function Navbar() {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);

  let resMenuItem1 = useRef(null);
  let resMenuItem2 = useRef(null);
  let resMenuItem3 = useRef(null);
  let resMenuItem4 = useRef(null);

  const menuCollapse = gsap.timeline({
    paused: true,
    reversed: true,
  });

  /**
   * Fix navbar
   */


  useEffect(() => {
    menuCollapse.to(resMenu.current, {
      y: 0,
      zIndex: 100,
      duration: 0.2,
    });
    menuCollapse.from(
      [
        resMenuHeader.current,
        resMenuItem1.current,
        resMenuItem2.current,
        resMenuItem3.current,
        resMenuItem4.current,
      ],
      {
        duration: 0.5,
        stagger: {
          amount: 0.4,
        },
        y: -50,
      }
    );
  });

  function menuOpen() {
    // comment out
    menuCollapse.reversed() ? menuCollapse.play() : menuCollapse.reverse();
  }

  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black"
      >

        <div
          className="flex items-center justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px]">
            dindustack
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
          >
            <Image src={close} className="w-9 object-contain invert" alt="" />
          </div>
        </div>
        {/* Desktop view - Navbar */}

        <div className="mx-2 my-10 space-y-1">
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem1}
              className="font-neutralFace font-bold text-[30px]"
            >
              work
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem2}
              className="font-neutralFace font-bold text-[30px]"
            >
              about
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem3}
              className="font-neutralFace font-bold text-[30px]"
            >
              tools
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem4}
              className="font-neutralFace font-bold text-[30px]"
            >
              contact
            </div>
          </span>
        </div>
      </div>
        {/* Mobile view - Navbar */}

      <div className="absolute bg-black px-[0.75rem] md:px-[2.5rem] top-0 py-[5px] font-neutralFace h-[20vh] flex justify-between w-[100%] flex-col">
        <div
          id="header"
          className="flex items-center justify-between w-[100%] h-fit"
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] md:text-[30px]">
            dindustack
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            about
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            work
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            tools
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            contact
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
          >
            <Image alt="" src={menu} className="w-9 object-contain invert" />
          </div>
        </div>
      </div>
    </div>
  );
}
