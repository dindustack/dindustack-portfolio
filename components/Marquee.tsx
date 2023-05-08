import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import React from "react";
import { marqueeContent } from "@/constants/marquee";

export function MarqueeSection() {
  return (
    <div className="md:pt-8 pb-8">
      <div className="border-white border-t border-b font-monument">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            autoWidth: true,
            gap: 40,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 2,
            },
          }}
          extensions={{ AutoScroll }}
          className="py-[1.3rem] px-0"
        >
          {React.Children.toArray(
            marqueeContent.map((content) => (
              <SplideSlide>
                <span className="inline-block relative pr-[7.5rem] text-[1.5rem] md:text-[3.75rem] uppercase text-[#E7E7E7] tracking-wider">
                  {content.firstWord}
                  <span className="ml-4 md:ml-6 text-transparent text-stroke tracking-wider">
                    {content.secondWord}
                  </span>
                  <Image
                    src={content.imgSrc}
                    alt="Chinwendu Agbaetuo"
                    className="marquee-img"
                  />
                </span>
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
    </div>
  );
}
