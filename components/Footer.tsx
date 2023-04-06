import React from "react";

export default function Footer() {
  return (
    <div className="relative font-neutralFace px-3">
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 font-monument font-semibold py-10 text-[11.5vmax] my-1 leading-none">
          dindustack
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>follow me</div>
        <div className="text-4xl underline">instagram</div>
        <div className="text-4xl underline">linkedin</div>
        <div className="text-4xl underline">twitter</div>
        <div className="text-4xl underline">dribbble</div>
      </div>
      <div className="flex pt-5 flex-col lg:flex-row items-end lg:items-center justify-between">
        <div>top</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">work</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">about</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">publications</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">office</div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row lg:mt-20 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">copyright 2023 - ds</div>
        <div>frontend engineer <br /> in Lagos, Nigeria</div>
      </div>
    </div>
  );
}
