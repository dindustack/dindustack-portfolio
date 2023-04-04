import Image from "next/image";
import React from "react";

import slideImageOne from "../images/Chinwendu-Agbaetuo.jpeg";
import slideImageTwo from "../images/Chinwendu-Agbaetuo-5.jpeg";

export default function Hero() {
  return (
    <div className="pt-[13rem] md:pt-[15rem] pb-[7.5rem] w-[100vw] h-[95vh] overflow-hidden">
      <div className="py-0 px-[1.3rem] md:px-[2.5rem] md:max-w-[90rem] mx-auto my-0">
        <div className="flex flex-col items-center md:items-stretch md:grid md:grid-cols-3 md:gap-4 ">
          <h1 className="text-4xl font-monument font-normal md:text-4xl text-center md:text-left lg:text-7xl -mb-[0.8rem] md:mb-0 leading-none z-20">
            Hey, i&apos;m Chinwendu
          </h1>
          <div className="relative">
            <Image
              alt="Chinwendu Agbaetuo"
              src={slideImageOne}
              className="w-[19rem] h-[19rem] md:w-[29rem] md:h-[29rem] max-w-[100%] border-white  border-2 rounded-[50%] object-cover"
            />

            <Image
              alt="Chinwendu Agbaetuo"
              src={slideImageTwo}
              className="absolute top-0 opacity-0 left-0 w-[19rem] h-[19rem] md:w-[29rem] md:h-[29rem] border-white border-2 max-w-[100%] rounded-[50%] object-cover transition-all duration-700 ease-in-out hover:opacity-100"
            />
          </div>

          <div className="flex justify-end flex-col">
            <h2 className="text-3xl font-monument font-light md:text-4xl text-center md:text-right lg:text-5xl -mt-[0.5rem] md:mt-0 leading-none z-[2]">
              creative
              <br /> 
              <span className="relative lg:-left-[12rem]">frontend</span>
              <br />
               <span>developer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
