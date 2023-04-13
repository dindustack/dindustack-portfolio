import {  gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

export default function ProjectBox() {
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

  useEffect(() => {
    let requestId: any;

    const animate = () => {
      setWavyPosition({
        positionX: gsap.utils.interpolate(wavyPosition.positionX, position.x, 0.08),
        positionY: gsap.utils.interpolate(wavyPosition.positionY, position.y, 0.08),
      });

      requestId = requestAnimationFrame(animate);
    };

    
    if (position.x !== wavyPosition.positionX || position.y !== wavyPosition.positionY) {
      animate();
    }





    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [position.x, position.y, wavyPosition.positionX, wavyPosition.positionY]);

  

  

  return (
    <div
      ref={cursorRef}
      className="w-[30vw] h-[18vw] fixed top-0 left-0  z-10 bg-green-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        top: `${wavyPosition.positionY}px`,
        left: `${wavyPosition.positionX}px`,
      }}
    ></div>
  );
}
