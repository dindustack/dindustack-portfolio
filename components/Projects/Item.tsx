import React, { useRef } from "react";
import { Power2, gsap } from "gsap";


type ProjectItemProps = {
  serialNumber: string;
  projectName: string;
  index: number;
  onEnter: (index: number) => void;
  onMove: (data: { x: number; y: number; index: number }) => void;

};


export default function ProjectItem ({ index, serialNumber, projectName, onEnter, onMove }: ProjectItemProps) {
  const textRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;

  const handleEnter = () => {
    onEnter(index);
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      paddingLeft: 0,
      duration: 0.335,
      ease: Power2.easeInOut,
    });
  };

  const handleLeave = () => {
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      paddingLeft: "9rem",
      duration: 0.335,
      ease: Power2.easeInOut,
    });
  };

  const handleMove = (event) => {
    const {left, top, width, height } = textRef.current.getBoundingClientRect()

    const progressionY = (1 / height) * (event.clientY - top);
    const progressionX = (1 / width) * (event.clientX - left);

    const x = gsap.utils.interpolate(-1, 1, progressionX)
    const y = gsap.utils.interpolate(-1, 1, progressionY)

    onMove({ x, y, index})
  }

  return (
    <div>
      <a
        href=""
        ref={textRef}
        className="relative md:pl-32 flex justify-between items-end py-[3rem] cursor-pointer border-b border-white w-[100%] border-t z-20"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMove}
      >
        <div className="flex space-x-4 md:space-x-8">
          <span className="text-base leading-[1.5] translate-y-[0.4rem] md:translate-y-3">{serialNumber}</span>
          <h2 className="text-[2rem] md:text-[5.4rem] md:leading-none normal-case pointer-events-none -tracking-[0.03rem]">
            {projectName}
          </h2>
        </div>
        
      </a>
    </div>
  );
}
