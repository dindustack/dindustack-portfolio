import React from "react";

export default function Services() {
  return (
    <div className="relative py-[6.25rem] px-0">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto 2xl:mx-0">
        <div className="pb-[3.75rem]">
          <h2 className="font-monument normal-case text-[2rem] md:text-[3.58rem] leading-[1.1] -tracking-[0.02rem]">
            I can help you with ...
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[10px]">
          {/* Design */}
          <div className="before:absolute before:w-[100%] md:before:w-[1px] before:h-[1px] md:before:h-[100%] before:left-[0] before:top-[auto] md:before:top-[0] before:bottom-[0] before:bg-[#e7e7e7] relative md:pl-[2rem] py-[2rem] md:py-0">
            <span className="block mb-20 opacity-60 text-[3.58rem] leading-[1.1] tracking-tight">
              01
            </span>
            <h2 className="mb-[0.5rem] normal-case text-[1.59rem] leading-none tracking-normal">
              Design
            </h2>
            <p className=" text-base leading-[1.5] md:max-w-[25rem] normal-case">
              Provide UI/UX design services to help clients create user-friendly
              interfaces for their web applications.
            </p>
          </div>

          {/* Development */}
          <div className="before:absolute before:w-[100%] md:before:w-[1px] before:h-[1px] md:before:h-[100%] before:left-[0] before:top-[auto] md:before:top-[0] before:bottom-[0] before:bg-[#e7e7e7] relative md:pl-[2rem] py-[2rem] md:py-0">
            <span className="block mb-20 opacity-60 text-[3.58rem] leading-[1.1] tracking-tight">
              02
            </span>
            <h2 className="mb-[0.5rem] text-[1.59rem] normal-case leading-none tracking-normal">
              Web Development
            </h2>
            <p className=" text-base leading-[1.5] md:max-w-[25rem] normal-case">
              Build responsive websites using modern frontend tools; and
              optimize for speed and performance.
            </p>
          </div>

          {/* Technical Writing */}
          <div className="before:absolute before:w-[100%] md:before:w-[1px] before:h-[1px] md:before:h-[100%] before:left-[0] before:top-[auto] md:before:top-[0] before:bottom-[0] before:bg-[#e7e7e7] relative md:pl-[2rem] py-[2rem] md:py-0">
            <span className="block mb-20 opacity-60 text-[3.58rem] leading-[1.1] tracking-tight">
              03
            </span>
            <h2 className="mb-[0.5rem] text-[1.59rem] normal-case leading-none tracking-normal">
              Technical Writing
            </h2>
            <p className="text-base leading-[1.5] md:max-w-[25rem] normal-case">
              Write technical documentation for web applications, APIs, and
              other software projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
