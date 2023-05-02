import React, { useRef, useState } from "react";
import { Element } from "react-scroll";

import ProjectItem from "./Item";
import { projects } from "@/constants/projects";
import { ProjectBox } from "./Box";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectBoxRef = useRef(null);
  const offsets = useRef({ x: 0, y: 0 });

  const handleMove = (event) => {
    const { x, y, index } = event;
    offsets.current[index] = { x, y };
  };


  return (
    <Element name="projects">
    <div className="relative py-[6.25rem] font-monument">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto">
        <div className="pb-[1.25rem]">
          <div className="flex space-x-4 items-center">
            <h3 className="text-[1.5rem] md:text-[2.4rem] normal-case leading-none -tracking-[0.01rem]">
              Selected Work
            </h3>
            <span>(4)</span>
          </div>
        </div>

        <div
          onMouseEnter={() => projectBoxRef.current.animateIn()}
          onMouseLeave={() => projectBoxRef.current.animateOut()}
        >
          {React.Children.toArray(
            projects.map((project, index) => (
              <ProjectItem
                serialNumber={project.id}
                projectName={project.projectName}
                index={index}
                onEnter={(index) => setActiveIndex(index)}
                onMove={(event) => handleMove(event)}
              />
            ))
          )}
        </div>

        <ProjectBox
          projectImages={projects}
          activeIndex={activeIndex}
          ref={projectBoxRef}
          offsets={offsets.current}
        />

        {/* Project Footer */}
        <div className="pt-[3rem]">
          <h3 className="text-[2.4rem] font-monument normal-case leading-none -tracking-[0.01rem] mb-3">
            Want to see more?
          </h3>
          <p className="normal-case font-migra text-xl">
            <span>Reach out to me at</span>
            <a
              href="mailto:contact@dindustack.com"
              className="relative py-1 ml-1"
            >
              contact@dindustack.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </Element>
  );
}
