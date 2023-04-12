import React, { useRef } from "react";
import { Power2, gsap } from "gsap";


export default function ProjectItem() {
  const textRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;

  const onEnter = () => {
    gsap.killTweensOf(textRef);

    gsap.to(textRef, {
      paddingLeft: 0,
      duration: 0.335,
      ease: Power2.easeInOut,
    });
  };

  const onLeave = () => {
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef, {
      paddingLeft: "9rem",
      duration: 0.335,
      ease: Power2.easeInOut,
    });
  };
  return (
    <a
      href=""
      ref={textRef}
      className="pl-32 flex justify-between items-end py-[3rem] cursor-pointer border-b border-white w-[100%] border-t"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div>
        <h2 className=" text-[5.4rem] leading-none normal-case pointer-events-none -tracking-[0.03rem]">
          Bridge Falls
        </h2>
        <p className="text-base leading-[1.5]"></p>
      </div>
      <div
        className="absolute z-[1] top-0 left-0 w-[17rem] h-[28rem]"
        // style={{transform: `translate(${position.x}px, ${position.y}px)`}}
      >
        {/* <div className="relative h-[100%] w-[100%] origin-[50%_120%] translate-x-0 translate-y-0" style={{ transform: "translate(0px, 0px)", transformOrigin: "50% 120%"}}> */}
        {/* <div
                className="relative h-[100%] w-[100%]"
                style={{
                  transform: "translate(0px, 0px)",
                  transformOrigin: "50% 120%",
                }}
              >
                <div className="bg-center bg-cover opacity-1">
                  <Image alt="" src={hoverImage}  />
                </div>
              </div> */}
      </div>
    </a>
  );
}
