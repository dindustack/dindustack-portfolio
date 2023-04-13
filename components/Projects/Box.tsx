import React, { useEffect, useRef, useState } from "react";

export default function ProjectBox() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
  return (
    <div
      ref={cursorRef}
      className="w-[30vw] h-[18vw] fixed top-0 left-0  z-10 bg-green-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    ></div>
  );
}
