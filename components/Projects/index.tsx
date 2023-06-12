import React, { useRef, useState } from "react";

import ProjectItem from "./Item";
import { projects } from "@/constants/projects";
import { ProjectBox } from "./Box";
import { Sidebar } from "../Sidebar";

type Offset = { x: number; y: number };
type ProjectBoxRef = {
  animateIn: () => void;
  animateOut: () => void;
};

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectBoxRef = useRef<ProjectBoxRef | null>(null);
  const offsets = useRef<{ [key: number]: Offset }>({});

  const handleMove = (event: { x: number; y: number; index: number }) => {
    const { x, y, index } = event;
    offsets.current[index] = { x, y };
  };

  return (
    <Sidebar>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="font-migra-extrabold text-[3.5rem] text-gray-900 uppercase py-12">
          works
          <span className="ml-4 normal-case text-[1.5rem]">
            (Work in progress)
          </span>
        </div>

        <div
          onMouseEnter={() => projectBoxRef.current?.animateIn()}
          onMouseLeave={() => projectBoxRef.current?.animateOut()}
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

        <div className="flex flex-col justify-center items-center gap-2 mt-[13.5rem] mb-[8.5rem]">
          <div className="text-[2.5rem] text-gray-900 font-migra-extrabold uppercase leading-[auto] mb-2">
            Want to hire me?
          </div>
          <div className="normal-case font-eastman text-[1.5rem]">
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
    </Sidebar>
  );
}
