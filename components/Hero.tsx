import Image from "next/image";
import React from "react";

import slideImageOne from "../images/Chinwendu-Agbaetuo.jpeg";
import slideImageTwo from "../images/Chinwendu-Agbaetuo-5.jpeg";

export default function Hero() {
  return (
    <div className="pt-[10rem] lg:pt-[15rem] pb-[7.5rem] px-[1.5rem] md:px-[3.375rem] lg:px-[7rem] w-[100vw] h-[95vh] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="relative flex justify-start md:justify-center flex-col md:pb-0 lg:pb-[6rem] pt-[2.125rem] md:pt-[0] md:gap-y-[1rem] lg:gap-y-[4rem] w-[100%] lg:w-[18.5rem] xl:w-[17.7rem]">
          <h1 className=" mb-[10px] text-3xl font-monument font-bold md:text-4xl text-center md:text-left lg:text-[4rem] z-20">
            <span className="leading-[1.5]">Hey</span>
            <br />
            <span>i&apos;m</span>
            <span className="ml-2 md:ml-4 lg:ml-8">Chinwendu</span>
          </h1>
          <div className="hidden md:flex flex-col items-start gap-y-[1rem]">
            <a href="https://www.instagram.com/dindustack/">
              <h5 className="font-neutralFace font-normal text-base leading-none hover:underline hover:decoration-2 hover:underline-offset-4">
                instagram
              </h5>
            </a>
            <a href="https://www.linkedin.com/in/dindustack/">
              <h5 className="font-neutralFace font-normal text-base leading-none hover:underline hover:decoration-2 hover:underline-offset-4">
                linkedin
              </h5>
            </a>
            <a href="https://twitter.com/dindustack">
              <h5 className="font-neutralFace font-normal text-base leading-none hover:underline hover:decoration-2 hover:underline-offset-4">
                twitter
              </h5>
            </a>
            <a href="https://dribbble.com/dindustack">
              <h5 className="font-neutralFace font-normal text-base leading-none hover:underline hover:decoration-2 hover:underline-offset-4">
                dribbble
              </h5>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col md:-mt-[100px] lg:mt-0 justify-center items-center">
          <Image
            alt="Chinwendu Agbaetuo"
            src={slideImageOne}
            className="w-[19rem] h-[19rem] md:w-[22rem] md:h-[22rem] lg:w-[29rem] lg:h-[29rem] max-w-[100%] border-white  border-2 rounded-[50%] object-cover"
          />

          <Image
            alt="Chinwendu Agbaetuo"
            src={slideImageTwo}
            className="absolute top-0 opacity-0 left-0 w-[19rem] h-[19rem] md:w-[22rem] md:h-[22rem] lg:w-[29rem] lg:h-[29rem] border-white border-2 max-w-[100%] rounded-[50%] object-cover transition-all duration-700 ease-in-out hover:opacity-100"
          />
        </div>

        <div className="relative flex flex-col gap-y-[2rem] md:justify-center md:items-end pt-0 -mt-2 lg:pt-[15rem] w-[100%] lg:w-[18.5rem] xl:w-[17.7rem]">
          <h2 className="text-3xl font-monument font-light md:text-4xl text-center md:text-right lg:text-6xl leading-none z-[2]">
            creative
            <br />
            <span className="relative md:-left-[8rem] lg:-left-[16rem]">frontend</span>
            <br />
            <span>developer</span>
          </h2>
          <div className="break-words font-light normal-case text-base hidden md:flex md:w-[18rem] xl:w-[0]">Crafting beautiful and intuitive user experiences, one line of code at a time.</div>
        </div>
      </div>
    </div>
  );
}
