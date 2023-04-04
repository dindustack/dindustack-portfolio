import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const {clientX, clientY} = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2

      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  })
  return (
    <div ref={cursorRef} className="hidden lg:block absolute z-[1000] rounded-[50%] w-[5rem] h-[5rem] border-2 border-white pointer-events-none overflow-hidden translate-z-0"></div>
  );
}
