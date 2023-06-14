"use client";
import React, { useRef, useState } from "react";
import { ScrollDownArrow } from "./ScrollDownArrow";
import {
  Scroll,
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Intro", path: "intro" },
  { label: "About", path: "about" },
  { label: "Services", path: "services" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { scroll } = useLocomotiveScroll();
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      scroll.scrollTo(target);
      setActiveLink(sectionId);
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen px-8" >
      <div className="flex col-start-1 col-end-1" data-scroll-sticky>
        <div className="flex max-w-[3.25rem] flex-col justify-center items-center p-0 gap-[4.5rem] h-full fixed z-10 border-r-2 border-gray-500 top-0 overflow-x-hidden ">
          {React.Children.toArray(
            navItems.map(({ label, path }) => (
              <a
                href={`#${path}`}
                className={`sidebar-item ${
                  activeLink === path && "font-eastman-bold text-gray-900"
                }`}
                data-scroll-to
                onClick={() => handleClick(path)}
              >
                {label}
              </a>
              // <a href={`#${path}`} className="sidebar-item">
              //   {label}
              // </a>
            ))
          )}
        </div>
      </div>

      <div className="col-start-2 col-end-13">{children}</div>
      <ScrollDownArrow />
    </div>
  );
}
