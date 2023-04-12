import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import hoverImage from "../images/test.jpeg";
import ProjectItem from "./Item";

export default function Projects() {
  

  return (
    <div className="relative py-[6.25rem]">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto">
        <div className="grid grid-cols-[8fr_4fr] items-end pb-[1.25rem] gap-x-[1.25rem]">
          <div className="flex">
            <h3 className="text-[2.4rem] normal-case leading-none -tracking-[0.01rem]">
              Selected Work
            </h3>
            <span className="md:ml-[0.5rem]">(4)</span>
          </div>
        </div>

        <ProjectItem />

       
      </div>
    </div>
  );
}
