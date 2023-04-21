import React from "react";

export default function Footer() {
  return (
    <div className="relative font-monument px-[0.75rem] md:px-[2.5rem]">
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 font-monument font-semibold py-10 text-[11.5vmax] my-1 leading-none">
          dindustack
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between">
        <div>follow me</div>
        <a href="https://www.instagram.com/dindustack/" className="text-4xl underline">instagram</a>
        <a href="https://www.linkedin.com/in/dindustack/" className="text-4xl underline">linkedin</a>
        <a href="https://twitter.com/dindustack" className="text-4xl underline">twitter</a>
        <a href="https://dribbble.com/dindustack" className="text-4xl underline">dribbble</a>
      </div>
      <div className="flex pt-5 flex-col xl:flex-row items-end xl:items-center justify-between">
        <div>top</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">about</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">services</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">projects</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">contact</div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row lg:mt-20 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">copyright 2023 - ds</div>
        <div>frontend engineer <br /> in Lagos, Nigeria</div>
      </div>
    </div>
  );
}
