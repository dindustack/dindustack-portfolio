import React, { useRef } from "react";
import { Power2, gsap } from "gsap";

type ProjectItemProps = {
  serialNumber: string;
  projectName: string;
};


export default function ProjectItem ({ serialNumber, projectName }: ProjectItemProps) {
  const textRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;

  const onEnter = () => {
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      paddingLeft: 0,
      duration: 0.335,
      ease: Power2.easeInOut,
    });
  };

  const onLeave = () => {
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      paddingLeft: "9rem",
      duration: 0.335,
      ease: Power2.easeInOut,
    });
  };
  return (
    <div>
      <a
        href=""
        ref={textRef}
        className="relative md:pl-32 flex justify-between items-end py-[3rem] cursor-pointer border-b border-white w-[100%] border-t z-[1000]"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex space-x-4 md:space-x-8">
          <span className="text-base leading-[1.5] translate-y-[0.4rem] md:translate-y-3">{serialNumber}</span>
          <h2 className="text-[2rem] md:text-[5.4rem] md:leading-none normal-case pointer-events-none -tracking-[0.03rem]">
            {projectName}
          </h2>
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
    </div>
  );
}
