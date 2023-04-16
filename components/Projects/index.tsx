import React, { useRef, useState } from "react";
import ProjectItem from "./Item";
import { projects } from "@/constants/projects";
import { ProjectBox } from "./Box";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectBoxRef = useRef(null);

  return (
    <div className="relative py-[6.25rem]">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto">
        <div className="grid grid-cols-[8fr_4fr] items-end pb-[1.25rem]  md:gap-x-[1.25rem]">
          <div className="flex">
            <h3 className="text-[2.4rem] normal-case leading-none -tracking-[0.01rem]">
              Selected Work
            </h3>
            <span className="ml-[0.5rem]">(4)</span>
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
              />
            ))
          )}
        </div>

        <ProjectBox
          projectImages={projects}
          activeIndex={activeIndex}
          ref={projectBoxRef}
        />

        {/* Project Footer */}
        <div className="pt-[3rem]">
          <h3 className="text-[2.4rem] normal-case leading-none -tracking-[0.01rem] mb-3">
            Want to see more?
          </h3>
          <p className="normal-case">
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
  );
}
