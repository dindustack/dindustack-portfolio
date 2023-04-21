import { services } from "@/constants/services";
import React from "react";

export default function Services() {
  return (
    <div className="relative py-[6.25rem] px-0 font-monument">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto 2xl:mx-0">
        <div className="pb-[3.75rem]">
          <h2 className="normal-case text-[2rem] md:text-[3.58rem] leading-[1.1] -tracking-[0.02rem]">
            I can help you with ...
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-[10px]">
          {React.Children.toArray(
            services.map((service) => (
              <div className="before:absolute before:w-[100%] md:before:w-[1px] before:h-[1px] md:before:h-[100%] before:left-[0] before:top-[auto] md:before:top-[0] before:bottom-[0] before:bg-[#e7e7e7] relative md:pl-[2rem] py-[2rem] md:py-0">
                <span className="block mb-20 opacity-60 text-[3.58rem] leading-[1.1] tracking-tight">
                  {service.id}
                </span>
                <h2 className="mb-[0.5rem] normal-case text-[1.59rem] leading-none tracking-normal">
                  {service.service}
                </h2>
                <p className="text-xl font-migra leading-[1.5] md:max-w-[25rem] normal-case">
                  {service.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
