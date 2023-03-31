import React, {  useRef } from "react";

export default function SplashScreen() {
  let loadingScreen: any = useRef<HTMLDivElement | null>(null);
  let logoOne: any = useRef(null)
  let logoTwo: any = useRef(null)
  let logoThree: any = useRef(null)
  let logoFour: any = useRef(null)
  let logoFive: any = useRef(null)
  let logoSix: any = useRef(null)
  return (
    <div className="text-[#E7E7E7] uppercase">
      <div ref={(el) => (loadingScreen = el)} className="fixed top-0 left-0 h-screen w-full z-50 bg-[#101010]">
        <div>
          {/* ONE */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div ref={(el) => (logoOne = el)} className="font-semibold text-[#E7E7E7] text-[6vmax] md:text-[10.1vmax] mix-blend-difference leading-none">dindustack</div>
          </div>

          {/* TWO */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div ref={(el) => (logoTwo = el)} className="font-semibold text-[#01FF01] text-[6.1vmax] md:text-[10.2vmax] mix-blend-difference leading-none">dindustack</div>
          </div>

          {/* THREE */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div ref={(el) => (logoThree = el)} className="font-semibold text-[#FC1F1F] text-[6.2vmax] md:text-[10.3vmax] mix-blend-difference leading-none">dindustack</div>
          </div>

          {/* FOUR */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div ref={(el) => (logoFour = el)} className="font-semibold text-[#8CF7F7] text-[6.3vmax] md:text-[10.4vmax] mix-blend-difference leading-none">dindustack</div>
          </div>

          {/* FIVE */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div ref={(el) => (logoFive = el)} className="font-semibold text-[#4254F8] text-[6.4vmax] md:text-[10.5vmax] mix-blend-difference leading-none">dindustack</div>
          </div>

          {/* SIX */}
          <div className="flex absolute items-center justify-center w-full h-screen">
            <div ref={(el) => (logoSix = el)} className="font-semibold text-[#AC00AC] text-[6.5vmax] md:text-[10.6vmax] mix-blend-difference leading-none">dindustack</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// resolve this issue Type 'HTMLDivElement | null' is not assignable to type 'MutableRefObject<null>'.
// Type 'HTMLDivElement' is not assignable to type 'null'.

