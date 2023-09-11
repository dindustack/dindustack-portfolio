import React, { forwardRef, useRef, useState } from "react";

import ProjectItem from "./Item";
import { projects } from "@/constants/projects";
import { ProjectBox } from "./Box";
import { Sidebar } from "../Sidebar";

type ProjectBoxRef = {
  animateIn: () => void;
  animateOut: () => void;
};

type ProjectsProps = {
  id: string;
};

export const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  function Projects({ id }, ref) {
    const [activeIndex, setActiveIndex] = useState(0);
    const projectBoxRef = useRef<ProjectBoxRef | null>(null);
    const offsets = useRef<{ x: number | undefined; y: number | undefined }[]>(
      []
    );

    const handleMove = (event: { x: number; y: number; index: number }) => {
      const { x, y, index } = event;
      offsets.current[index] = { x, y };
    };

    return (
      <div
        className="flex flex-col justify-center min-h-screen py-[6.25rem]"
        data-scroll-section
        id={id}
        ref={ref}
      >
        <div className="capitalize text-[2.25rem] md:text-[3.5rem] font-neue-ultrabold text-gray-900 py-[1.125rem] md:py-12">
          work
          {/* <span className="ml-4 normal-case text-[1.5rem]">
            (Work in progress)
          </span> */}
        </div>
        <div
          onMouseEnter={() => projectBoxRef.current?.animateIn()}
          onMouseLeave={() => projectBoxRef.current?.animateOut()}
          className="lg:pl-[14.75rem]"
        >
          {React.Children.toArray(
            projects.map((project, index) => (
              <ProjectItem
                url={project.url}
                serialNumber={project.id}
                projectName={project.projectName}
                content={project.content}
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
        <div className="flex flex-col justify-center items-center gap-2 mt-[13.5rem] mb-[8.5rem]">
          <div className="text-[2rem] md:text-[2.5rem] text-gray-900 font-neue-ultrabold uppercase leading-[auto] mb-2">
            Want to hire me?
          </div>
          <div className="normal-case font-eastman text-[1rem] md:text-[1.5rem]">
            <span>Reach out via</span>
            <a
              href="mailto:contact@dindustack.com"
              className="relative py-1 ml-1"
            >
              contact@dindustack.com
            </a>
          </div>
        </div>
      </div>
    );
  }
);
