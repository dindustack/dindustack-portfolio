import { useRafFn } from "@/constants/animation";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

type ProjectBoxProps = {
  // imageSrc: StaticImageData | string;
  imageSrc: any
};

export default function ProjectBox({ imageSrc}: ProjectBoxProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [wavyPosition, setWavyPosition] = useState({
    positionX: 0,
    positionY: 0,
  });
  console.log(wavyPosition.positionX, wavyPosition.positionY);
  const cursorRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      setPosition({ x: mouseX, y: mouseY });
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  const rafFn = useRafFn(() => {
    setWavyPosition({
      positionX: gsap.utils.interpolate(
        wavyPosition.positionX,
        position.x,
        0.08
      ),
      positionY: gsap.utils.interpolate(
        wavyPosition.positionY,
        position.y,
        0.08
      ),
    });
  });

  useEffect(() => {
    // Call rafFn to start the animation
    rafFn();
  }, [rafFn]);

  return (
    <div
      ref={cursorRef}
      className="w-[30vw] h-[18vw] fixed top-0 left-0  z-10 bg-green-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"
      style={{
        top: `${wavyPosition.positionY}px`,
        left: `${wavyPosition.positionX}px`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 opacity-0">
        <Image alt="" src={imageSrc} className="w-full h-full object-cover" />
       </div>

    </div>
  );
}
