import { marqueeContent } from "@/constants/marquee";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import React from "react";

export function MarqueeSection() {
  return (
    <div
      className="hidden mx-[-200px] md:grid border-gray-900 bg-gray-900 
      border-t border-b font-eastman-offset absolute -z-[2]"
      id="marquee"
    >
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
              <span className="inline-block relative pr-[7.5rem] text-[1rem] md:text-[1.25rem] text-[#FFFEF4]  uppercase  tracking-wider">
                {content.firstWord}
                <span className="ml-2 text-stroke text-gray-900 tracking-wider">
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
  );
}
