// import React, { useEffect, useState, useRef } from "react";

// export default function CustomCursor() {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const cursorRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  
//     useEffect(() => {
//       document.addEventListener("mousemove", (event) => {
//         const { clientX, clientY } = event;
//         const mouseX = clientX;
//         const mouseY = clientY;
  
//         setPosition({ x: mouseX, y: mouseY });
//       });
  
//       return () => {
//         document.removeEventListener("mousemove", () => {});
//       };
//     }, []);
//   return (
//     <div ref={cursorRef} className="hidden lg:block absolute z-[1000] rounded-[50%] w-[5rem] h-[5rem] border-2 border-white pointer-events-none overflow-hidden"
//     style={{ top: `${position.y}px`, left: `${position.x}px` }}
    
//     ></div>
//   );
// }
