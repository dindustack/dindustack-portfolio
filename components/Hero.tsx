import Image from "next/image";
import React from "react";

import slideImageOne from "../images/Chinwendu-Agbaetuo.jpeg";
import slideImageTwo from "../images/Chinwendu-Agbaetuo-5.jpeg";

export default function Hero() {
  return (
    <div className="relative pt-[15rem] pb-[7.5rem]">
      <div className="py-0 px-[1.3rem] md:px-[2.5rem] md:max-w-[90rem] mx-auto my-0">
        <div className="grid grid-cols-3 gap-4 ">
          <h1>Hello, i&apos;m Chinwendu</h1>
          <div className="relative">
            <Image
              alt="Chinwendu Agbaetuo"
              src={slideImageOne}
              className="w-[29rem] h-[29rem] max-w-[100%] border-white  border-2 rounded-[50%] object-cover"
            />

            <Image
              alt="Chinwendu Agbaetuo"
              src={slideImageTwo}
              className="absolute top-0 opacity-0 left-0 w-[29rem] h-[29rem] border-white border-2 max-w-[100%] rounded-[50%] object-cover transition-all duration-700 ease-in-out hover:opacity-100"
            />
          </div>

          <h1>creative frontend developer</h1>
        </div>
      </div>
    </div>
    // <div className='absolute bottom-0 left-[50%] z-[-1] -translate-x-[50%]'>Hero</div>
  );
}
