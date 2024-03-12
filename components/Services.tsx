import { services } from "@/constants/services";
import React, { forwardRef } from "react";

type ServicesProps = {
  id: string;
};

export const Services = forwardRef<HTMLDivElement, ServicesProps>(
  function Services(props, ref) {
    return (
      <section
        className="flex flex-col py-24"
        id={props.id}
        ref={ref}
      >
        <div className="skillset-title pb-[3.625rem]">
          skillsets
        </div>

        <div className="xl:pl-[7.5rem] grid lg:grid-cols-2 gap-x-32 gap-y-16">
          {React.Children.toArray(
            services.map((service) => (
              <div className="flex flex-col lg:flex-row items-start p-0 gap-2">
                <span className="font-neue lg:font-migra md:font-extrabold text-gray-300 text-[2.5rem] md:text-[4rem] leading-[40px] md:leading-none mb-2">
                  {service.id}
                </span>
                <div className="flex flex-col items-start p-0 gap-2 lg:max-w-[21.875rem]">
                  <span className="font-eastman-medium text-gray-900 text-[1.75rem] md:text-[2.5rem] leading-[2rem] md:leading-[2.5rem] lg:mb-4">
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
      </section>
    );
  }
);
