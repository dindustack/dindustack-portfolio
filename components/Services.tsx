import { services } from "@/constants/services";
import React from "react";
import { Sidebar } from "./Sidebar";

export function Services() {
  return (
    <Sidebar>
      <div
        className="flex flex-col justify-center min-h-screen lg:min-h-[1px]"
        data-scroll-section
        id="services"
      >
        <div className="section-title pt-[6.25rem] md:pt-0 pb-[3.625rem]">
          skillsets
        </div>

        <div className="lg:pl-[7.5rem] grid md:grid-cols-2 gap-x-32 gap-y-16">
          {React.Children.toArray(
            services.map((service) => (
              <div className="flex flex-row items-start p-0 gap-2">
                <span className=" font-migra-extrabold font-extrabold text-gray-300 text-[4rem] leading-none">
                  {service.id}
                </span>
                <div className="flex flex-col items-start p-0 gap-2 max-w-[21.875rem]">
                  <span className="font-eastman-medium text-gray-900 text-[2.5rem] leading-[2.5rem] mb-4">
                    {service.service}
                  </span>
                  <span className="text-[1.125rem] font-eastman text-gray-500 normal-case">
                    {service.content}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Sidebar>
  );
}
